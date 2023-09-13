import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.jsx'
import LandingPage from './components/LandingPage/LandingPage'
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie"
import MovieDetails from './Page/MovieDetailsPage/MovieDetails';
import Footer from './components/Footer/Footer'
import {Routes, Route, BrowserRouter} from "react-router-dom"

function App() {
  const [movieData,setMovieData]= React.useState()
  const [countlandingpage, setCountlandingpage] = React.useState(0)
  const [clickedMovie, setClickedMovie] = React.useState()
  const [errorData, setErrorData] = React.useState('')
  //fetching the trending movies from my tmdb api and slicing it to give only the top 10 
    React.useEffect(() => {
          fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
          .then(res => res.json())
          .then(data =>  {setMovieData(data.results.slice(0,10));})
          .catch(err => {console.error(err); setErrorData(e=> "Sorry couldn't get data, check your network connection")});
      }, [])
          
      const options = {
          method: 'GET',
          headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTk5YmQwMDM0NmVkNTQwOWJkMTFiOTA3MjNkODAyNiIsInN1YiI6IjY0ZmVlNTkxZWZlYTdhMDBjMzk1ZjkxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Zxb48OwxQyNPnbYizbneorc1O70B26aDgOBZ6aRSic'
          }
      }
  return(
      <div>
        <Routes>
              <Route path='stage2movieBox/:id' element={<MovieDetails/>} />
              <Route path='stage2movieBox' element={<div>
              <Nav />
              <LandingPage 
                array={movieData}
                original_title={movieData?.[countlandingpage].original_title}
                vote_average={movieData?.[countlandingpage].vote_average}
                overview={movieData?.[countlandingpage].overview}
                poster_path={movieData?.[countlandingpage].poster_path}
                error={errorData}
              />
              <FeaturedMovie 
                array={movieData}
                error={errorData}
                clickedMovieDetails={e => setClickedMovie(e)}
              />
              <Footer />
                  </div>}/>
            </Routes>
        {/* <BrowserRouter>
          
        </BrowserRouter> */}
      </div>
  )
}

export default App;
