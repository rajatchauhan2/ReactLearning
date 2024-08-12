/* eslint-disable no-unused-vars */
import conf from "../conf.js";
import { Client, ID, Databases, Storage, Query, Flag } from "appwrite";

export class Service {
  Client = new Client();
  Databases;
  Bucket;

  constructor() {
    this.client
      .setEndponit(conf.appwriteurl)
      .setProject(conf.appwriteProjectId);
    this.Databases = new Databases(this.client);
    this.Bucket = new Storage(this.Client);
  }

  async createPost({ title, slug, content, featureImage, status, userId }) {
    try {
      return await this.Databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite Error :: Service :: CreatePost", error);
    }
  }
  async updatePost(slug, { title, content, featureImage, status }) {
    try {
      return await this.Databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite ERROR :: Service :: 404", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.Databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deletePost :: error", error);
    }
    return false;
  }
  async getPost(slug) {
    try {
      return await this.Databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite service :: getPost", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]){
    try {
      return await this.Databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      )
    } catch (error) {
      console.log("appwrite Service :: GetPost :: error",error);
      return false
    }
  }


  // file upload service
  
async uploadFile(file){
  try {
    return await this.createFile(
      conf.appwriteBuketId,
      ID.unique(),
      file
    )
  } catch (error) {
    console.log("Appwrite Service :: uploadFile :: error", error);
    return false
    
  }
}

async deleteFile(fileId){
  try {
     await this.Bucket.deleteFile(
      conf.appwriteBuketId,
      fileId
    )
    return true
  } catch (error) {
    console.log("Appwrite Service :: DeleteFile :: error",error);
    
  }
}


getFilePreview(fileId){
  return this.Bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
  )
}

}
const service = new Service();
console.log(service);

export default Service;
