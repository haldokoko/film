import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import tmdb from '../apis/tmdb';
import VideoPlayer from '../components/VideoPlayer';
const Desc = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
    const fetchMovies = async () => {
        try {
            const fetchedMovies = await tmdb.get(`movie/${id}`);
            setMovies(fetchedMovies.data);
          
        } catch (error) {
            console.log(error);
        }
    }

    fetchMovies();
  }, [id]);

  const [videos, setVideos] = useState([]);
  useEffect(() => {
  const fetchVideos = async () => {
      try {
          const fetchedVideos = await tmdb.get(`movie/${id}/videos`);
          setVideos(fetchedVideos.data.results);
        
      } catch (error) {
          console.log(error);
      }
  }

  fetchVideos();
}, []);

    const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
    return (
        <Card sx={{ maxWidth: 2000 }}>
        <CardMedia
         component="img"
         sx={{ maxWidth: 2000, height:500 }}
         image={BASE_IMAGE_URL + movies.backdrop_path}
         alt="{movie.title}"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movies.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {movies.overview}
          </Typography>
          { videos.map(video => (<VideoPlayer video={video}></VideoPlayer>))}
            
        </CardContent>
      </Card>
    );
}
export default Desc;