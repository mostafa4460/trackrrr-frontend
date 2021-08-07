import axios from 'axios';

const BASE_URL = "https://trackrrr-backend.herokuapp.com";

const getSummoner = async (name, region) => {
    try {
        const resp = await axios.get(`${BASE_URL}/summoners/${region}/${name}`);
        return resp.data.summoner;
    } catch (err) {
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw message;
    };
};

const updateSummoner = async (name, region) => {
    try {
        const resp = await axios.get(`${BASE_URL}/summoners/${region}/${name}/update`);
        return resp.data.summoner;
    } catch (err) {
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw message;
    };
};

export {
    getSummoner,
    updateSummoner
};