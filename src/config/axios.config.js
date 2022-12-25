import { BACKEND_BASE_URL } from "../constants";


export const axiosConfig = {
    timeout: 15000,
    baseURL: BACKEND_BASE_URL + "/api/v1"
}