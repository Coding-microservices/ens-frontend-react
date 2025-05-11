import axios from "axios";

import { API } from "../constants/api.ts";
import authenticatedApi from "../constants/authenticatedApi.ts";

export const authApi = async (email: string, password: string) => {
    try {
        console.log(email, password);
        const userResponse = await axios.post(`${API.AUTH_SERVICE}/login`, {
            email,
            password,
        });
        console.log(userResponse.data);
        return userResponse.data;
    } catch {
        console.log("Something went wrong");
        return {
            error: "Failed to login",
        };
    }
}

export const logout = async () => {
    try {
        const userResponse = await authenticatedApi.post(`${API.AUTH_SERVICE}/logout`, );
        console.log(userResponse.status);
        return;
    } catch {
        console.log("Something went wrong");
        return {
            error: "Failed to authApi",
        };
    }
}