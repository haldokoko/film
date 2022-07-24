import axios from 'axios';
const API_KEY ='90c8537c4fd66b1b18ccdb7c0558c16a';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: API_KEY,
        
    },
});

export default tmdb