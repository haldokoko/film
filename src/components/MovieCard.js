import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import Modal from '@mui/material/Modal';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

const MovieCard =({ movie }) => {
  
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Card id={movie.id} sx={{ display: 'flex', mt: 10,ml:2, maxWidth: 350 }}>
        <CardMedia
        component="img"
        sx={{ width: 150, height:225 }}
        image={BASE_IMAGE_URL + movie.poster_path}
        alt="{movie.title}"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {new Date(movie.release_date).getFullYear()}
          </Typography>
          <Button onClick={handleOpen}>Desc</Button>
          <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
            <Card sx={{ position: 'absolute',  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', maxWidth: 345 }}>
            <CardMedia
        component="img"
        sx={{ maxWidth: 345, height:225 }}
        image={BASE_IMAGE_URL + movie.poster_path}
        alt="{movie.title}"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>
      </CardContent>
      <CardActions>
      <Link style={{color:'inherit', textDecoration: 'inherit'}} to={`/desc/${movie.id}`}>Detail Film</Link>
    </CardActions>
    </Card>
        
      </Modal>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <Rating name="read-only" precision={0.1} value={movie.vote_average / 2} max={5} readOnly />
            <Box sx={{ ml: 2 }}>{movie.vote_average.toFixed(1)}</Box>
        </Box>
        </CardContent>
      
      </Box>
      
    </Card>
  );
}

export default MovieCard;

