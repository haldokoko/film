import axios from 'axios';
const API_KEY ='90c8537c4fd66b1b18ccdb7c0558c16a';
const baseUrl = 'https://api.themoviedb.org/3/';
const bahasa ='id';

const tmdbid = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: API_KEY,
        with_original_language: bahasa,
    },
});

export default tmdbid;