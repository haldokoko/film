import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import tmdbid from "../apis/tmdbid";
import { useSearchParams } from 'react-router-dom';

import fetchedMovies from "../data/fetchedMovies.json"


const MovieList = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const [movies, setMovies] = useState(fetchedMovies.results);
    const [moviesReady, setMoviesReady] = useState(false);

    useEffect(() => {
        const fetchedMovies = async () => {
            try {
                const fetchedMovies = await tmdbid.get('discover/movie');
                setMovies(fetchedMovies.data.results);
                setMoviesReady(true);
            }catch (error) {
                console.log(error);
            }
        }
       fetchedMovies();

    }, []);

    useEffect(() => {
        if (!moviesReady) return;
        const sortMovies = (type) => {
            if (type === 'asc') {
                const sorted = [...movies].sort((a, b) => a.vote_average - b.vote_average);
                setMovies(sorted);
            }
            if (type === 'desc') {
                const sorted = [...movies].sort((a, b) => b.vote_average - a.vote_average);
                setMovies(sorted);
            }
        }

        sortMovies(queryParams.get('sort'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams, moviesReady]);



    const setSortParam = (type) => {
        queryParams.set("sort", type);
        setQueryParams(queryParams);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 5,
        }}>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                Sort by Rating
                <Button
                    variant="contained"
                    sx={{ ml: 2 }}
                    onClick={() => setSortParam("asc")}
                >
                    Asc
                </Button>
                <Button
                    variant="contained"
                    sx={{ ml: 2, mr: 2 }}
                    onClick={() => setSortParam("desc")}
                >
                    Desc
                </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
            {
                movies.map(movie => (
                    <MovieCard movie={movie}></MovieCard>
                ))
            }
        </Box>
        </Box>
    );
}
export default MovieList;