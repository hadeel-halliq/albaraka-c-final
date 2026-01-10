import api from './axiosConfig';

export const getProducts = async() => {
    try {
        const res = await api.get("/products");
        return res;
    } catch (error) {
        throw error;
    }
}