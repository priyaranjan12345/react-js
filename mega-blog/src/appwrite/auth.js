import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAcoount = await this.account.create(ID.unique(), email, password, name)

            if (userAcoount) {
                // on create account login user
                return this.login({ email, password })
            } else {
                return userAcoount
            }
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return this.account.get()
        } catch (error) {
            console.log("get current user error: " + error)
            throw error
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("logout error: " + error)
            throw error
        }
    }
}

const authService = new AuthService()

export default authService