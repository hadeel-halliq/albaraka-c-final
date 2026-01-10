import api from './axiosConfig';

export const getServices = async() => {
    try {
        const res = await api.get("/services");
        return res;
    } catch (error) {
        throw error;
    }
}