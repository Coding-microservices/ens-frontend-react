
import { API } from "../constants/api.ts";
import authenticatedApi from "../constants/authenticatedApi.ts";

export const createAdmin = async (data: {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    super: boolean;
}) => {
    try {
        const userResponse = await authenticatedApi.post(`${API.AUTH_SERVICE}/accounting/admin`, data);
        console.log(userResponse.data);
        return userResponse.data;
    } catch {
        console.log("Something went wrong during admin creation");
        return {
            error: "Failed to login",
        };
    }
}

export const createUser = async (data: {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}) => {
    try {
        const userResponse = await authenticatedApi.post(`${API.AUTH_SERVICE}/accounting/user`, data);
        console.log(userResponse.data);
        return userResponse.data;
    } catch {
        console.log("Something went wrong during user creation");
        return {
            error: "Failed to login",
        };
    }
}

export interface UserSearchRequest {
    searchText: string;
    admins: boolean;
    users: boolean;
    blocked: boolean;
    deleted: boolean;
}

export const searchUsers = async (request: UserSearchRequest, page = 0, size = 10) => {
    try {
        const userResponse = await authenticatedApi.post(`${API.AUTH_SERVICE}/accounting/search?page=${page}&size=${size}`, request);
        console.log(userResponse.data);
        return userResponse.data;
    } catch {
        console.log("Something went wrong during user creation");
        return {
            error: "Failed to login",
        };
    }
}