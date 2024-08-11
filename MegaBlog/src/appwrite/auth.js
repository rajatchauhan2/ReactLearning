import { client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new client();
  account;

  constructor() {
    this.client
      .setEndponit(conf.appwriteurl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, password });

        // return userAccount;
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      return error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite error", error);
    }
    return null;
  }

  async logOut() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Error:: logOut :: error ", error);
    }
  }
} 

// eslint-disable-next-line no-unused-vars
const authService = new AuthService();
export default AuthService;
