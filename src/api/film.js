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

export const addToWatchHistory = async (movie) => {
    try {
        const response = await axios.post("/api/WatchHistory", movie);
        return response.data;
    } catch (error) {
        throw new Error(error.response);
    }
}

export const commentFilm = async (data) => {
    try {
        const response = await axios.post("/api/Comments", data);
        return response.data;
    } catch (error) {
        throw new Error(error.response);
    }
}

export const getCommentsByMovieId = async (movieId) => {
    const {data} = await axios.get(`/api/Comments/getCommentsToMovie/${movieId}`)

    return data;
}
