import axios from "../utils/axios";

export const loadRecommendation = async () => {
    try {
        const response = await axios.get("/api/Movie/getRecommendedMovie");
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.response);
    }
};
