import conf from "../conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

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
}
const service = new Service();
console.log(service);

export default Service;
