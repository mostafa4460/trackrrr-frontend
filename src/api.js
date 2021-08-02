import axios from 'axios';

const BASE_URL = process.env.BACKEND_BASE_URL || "http://localhost:3001";

const getSummoner = async (name, region) => {
    try {
        const resp = await axios.get(`${BASE_URL}/summoner/${region}/${name}`);
        return resp.data.summoner;
    } catch (err) {
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw message;
    };
};

export default getSummoner;