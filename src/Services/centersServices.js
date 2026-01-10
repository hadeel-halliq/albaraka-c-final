import api from './axiosConfig';

export const getCenters = async() => {
    try {
        const res = await api.get("/centers");
        return res;
    } catch (error) {
        throw error;
    }
}