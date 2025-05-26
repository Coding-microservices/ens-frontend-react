import axios from "axios";

import { API } from "../constants/api.ts";
import authenticatedApi from "../constants/authenticatedApi.ts";

export const login = async (email: string, password: string) => {
    try {
        console.log(email, password);
        const userResponse = await axios.post(`${API.AUTH_SERVICE}/auth/login`, {
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
        const userResponse = await authenticatedApi.post(`${API.AUTH_SERVICE}/auth/logout`, );
        console.log(userResponse.status);
        return;
    } catch {
        console.log("Something went wrong");
        return {
            error: "Failed to logout",
        };
    }
}

export const getUserProfileInfo = async () => {
    try {
        const userResponse = await authenticatedApi.get(`${API.AUTH_SERVICE}/account`, );
        console.log(userResponse.data);
        return userResponse.data;
    } catch {
        console.log("Something went wrong");
        return {
            error: "Failed to get user profile info",
        };
    }
}

export const changePassword = async function (currentPassword: string, newPassword: string, passwordConfirmation: string) {
    try {
        const userResponse = await authenticatedApi.patch(`${API.AUTH_SERVICE}/account/password`, {
            currentPassword,
            newPassword,
            passwordConfirmation,
        } );
        console.log(userResponse.data);
        return userResponse.status;
    } catch {
        console.log("Something went wrong");
        return {
            error: "Failed to change password",
        };
    }
}

