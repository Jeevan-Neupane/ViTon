import { account } from "./appwrite";
import { ID } from "appwrite";


class AuthService {

    async createAccount({ email, password, username }) {
        try {
            const userAccount = await account.create(ID.unique(), email, password, username);


            return userAccount;


        } catch (error) {

            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await account.createEmailSession(email, password);
        } catch (error) {

            throw error;
        }

    }

    async logout() {
        try {
            return await account.deleteSession("current");
        } catch (error) {
            console.log(error);
        }
    }

    async getCurrentUser() {
        try {
            const loggedIn = await account.get();
            return loggedIn;
        } catch (error) {
            // throw error;
            console.log(error)
        }
        return null;
    }

}

const authService = new AuthService();

export default authService;