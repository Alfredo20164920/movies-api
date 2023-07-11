import axios from "axios";

const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: "application/json",
		Authorization: `Bearer ${process.env.API_KEY}`,
    }
});

export default moviesApi;