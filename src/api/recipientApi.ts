import authenticatedApi from "../constants/authenticatedApi.ts";
import {API} from "../constants/api.ts";

export const searchRecipients = async () => {
    try {
        console.log(`${API.AUTH_SERVICE}/recipient/`);
        const userResponse = await authenticatedApi.get(`${API.AUTH_SERVICE}/recipient`);
        console.log(userResponse.data);
        return userResponse.data;
    } catch {
        console.log("Something went wrong during user creation");
        return {
            error: "Failed to login",
        };
    }
}

export const createRecipient = async (data: any) => {
    try {
        console.log(data);
        console.log(`${API.AUTH_SERVICE}/recipient/`);
        const userResponse = await authenticatedApi.post(`${API.AUTH_SERVICE}/recipient`, data);
        console.log(userResponse.data);
        return userResponse.data;
    } catch {
        console.log("Something went wrong during user creation");
        return {
            error: "Failed to login",
        };
    }
}