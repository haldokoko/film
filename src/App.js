
import { Box, ThemeProvider } from '@mui/material';
import './App.css';
import Navbar from './components/navbar';
import theme from './themes/theme';
import MovieList from './containers/MovieList';
import { Route, Routes, Link} from 'react-router-dom';
import Pricing from './containers/Pricing';
import Subsribed from './containers/Subscribed';
import About from './containers/About';
import Indonesia from './containers/Indonesia';
import Desc from './containers/Desc';
import Login from './containers/Login';
import Register from './containers/Register';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
   <ThemeProvider theme={theme}>
<div className='App'>
  <Navbar>
  </Navbar>
  <Routes>
  <Route path='/' element={<MovieList />} />
  <Route path="about" element={<About />}>
            <Route path="description" element={<Box sx={{ mt: 10 }}>Provides movies in your hand</Box>} />
            <Route path="services" element={<Box sx={{ mt: 10 }}>Streaming movies, Indonesian film, and film review.</Box>} />
          </Route>
  <Route path='indonesian' element={ <Indonesia />}/>
  <Route path='pricing' element={ <Pricing />}/>
  <Route path='subscribed/:plan' element={ <Subsribed/>}/>
  <Route path='desc/:id' element={ <ProtectedRoute loginOnly={true}><Desc/></ProtectedRoute>}/>
  <Route path='login' element={<Login/>}/>
  <Route path='register' element={<Register/>}/>
  <Route
            path="*"
            element={
              <Box sx={{
                display: 'flex', 
                margin: 10, 
                justifyContent: 'center',
                alignItems: 'center', 
                flexDirection: 'column',
              }}>
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-4461124-3696774.png"
                  alt="404"
                />
                <p>You have reach the edge of universe</p>
                <Link to="/">Take me home!</Link>
              </Box>
            }
          />
  </Routes>
</div>

   </ThemeProvider>
  );
}

export default App;
