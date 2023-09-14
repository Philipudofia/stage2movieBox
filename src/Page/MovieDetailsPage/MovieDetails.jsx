import React from "react";
import './MovieDetails.css'
import {Link, useParams} from "react-router-dom"


function MovieDetails() {
    const [clickedMovie, setClickedMovie] =  React.useState()
    const {id} = useParams();
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTk5YmQwMDM0NmVkNTQwOWJkMTFiOTA3MjNkODAyNiIsInN1YiI6IjY0ZmVlNTkxZWZlYTdhMDBjMzk1ZjkxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Zxb48OwxQyNPnbYizbneorc1O70B26aDgOBZ6aRSic'
        }
      };
      
      React.useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
        .then(res => res.json())
        .then(data=> {setClickedMovie(data)})
    },[id]);
    return(
        <React.Fragment>
            {clickedMovie?<div>
            <div className="movieDetailsContainer">
                <div className="sideBar">
                    <div className="logo">
                        <i className="fa-solid fa-tv"></i>
                        <h2>
                            MovieBox
                        </h2>
                    </div>
                    <p><a path='/stage2movieBox'>Home</a></p>
                    <p className="movies">Movies</p>
                </div>
                <div className="moviePage">
                    <div className="trailer">
                        <img src={"https://www.themoviedb.org/t/p/original/"+clickedMovie?.poster_path} alt="" />
                        <div className="watchTrailer">
                            <i className="fa-solid fa-circle-play"></i>
                            <p>Watch Trailer</p>
                        </div>
                    </div>
                    <div className="title">
                        <div className="movieTitle">
                            <h1 data-tesid="movieTitle">
                                {clickedMovie?.title}
                            </h1>
                        </div>
                        <p className="releaseDate" data-tesid="movie-release-date">
                            {clickedMovie?.release_date}
                        </p>
                        <p className="runtime" data-tesid="movie-runtime">
                            {clickedMovie?.runtime}m
                        </p>
                    </div>
                    <div className="overview"  data-tesid="movie-overview">
                        {clickedMovie?.overview}
                    </div>
                </div>
            </div>
        </div>:<p className='error'>"Sorry we couldn't get data, check your network connection"</p>}
        </React.Fragment>
    )
}

export default MovieDetails;