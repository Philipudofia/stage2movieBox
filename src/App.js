import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.jsx'
import LandingPage from './components/LandingPage/LandingPage'
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie"
import MovieDetails from './Page/MovieDetailsPage/MovieDetails';
import Footer from './components/Footer/Footer'
import ErrorPage from './ErrorPage'
import {Routes, Route, BrowserRouter} from "react-router-dom"

function App() {
  const [movieData,setMovieData]= React.useState()
  const [countlandingpage, setCountlandingpage] = React.useState(0)
  const [errorData, setErrorData] = React.useState('')
  const [loading, setLoading] = React.useState(false);
  //fetching the trending movies from my tmdb api and slicing it to give only the top 10 
    React.useEffect(() => {
          setLoading(true)
          fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
          .then(res => res.json())
          .then(data =>  {
            setMovieData(data.results.slice(0,10))
            setLoading(false)
          })
          .catch(err => {
            setErrorData(err.message)
            setLoading(false)
          });
      }, [])
          
      const options = {
          method: 'GET',
          headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTk5YmQwMDM0NmVkNTQwOWJkMTFiOTA3MjNkODAyNiIsInN1YiI6IjY0ZmVlNTkxZWZlYTdhMDBjMzk1ZjkxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Zxb48OwxQyNPnbYizbneorc1O70B26aDgOBZ6aRSic'
          }
      }
  return(
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<React.Fragment><Nav />
              <LandingPage/>
              <FeaturedMovie 
                array={movieData}
                error={errorData}
              />
              <Footer /></React.Fragment>}/>
              <Route path='movies/:id' element={<MovieDetails/>} />
              {/* <Route path='/:id' element={<MovieDetails/>} /> */}
              <Route path='*' element={<ErrorPage/>}/>
            </Routes>
          </BrowserRouter>
  )
}

export default App;
