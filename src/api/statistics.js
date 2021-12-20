import axios from "../utils/axios";

export const getStatistics = async (dateFrom, dateTo) => {
    try {
        const from = (dateFrom)? dateFrom: new Date().toISOString();
        const to = (dateTo)? dateTo: new Date().toISOString();
        const response = await axios.get(`/api/WatchHistory/GetStatistics/${from}/${to}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response);
    }
}
