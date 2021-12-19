import axios from "../utils/axios";

export const getAllComments = async (data) => {
    try {
        const response = await axios.get("/api/Comments", data);
        return response.data;
    } catch (error) {
        throw new Error(error.response);
    }
}

export const deleteComment = async (id) => {
    try {
        const response = await axios.delete(`/api/Comments/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response);
    }
}