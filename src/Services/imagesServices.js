import api from './axiosConfig';

export const getImages = async() => {
    try {
        const res = await api.get("/images");
        return res;
    } catch (error) {
        throw error;
    }
}