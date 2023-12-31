import React from "react";
import './MovieDetails.css'
import {Link, useParams} from "react-router-dom"
import Logo from './tv.png'

function MovieDetails() {
    const [clickedMovie, setClickedMovie] =  React.useState()
    const [errorData, setErrorData] = React.useState('')
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
        .catch(err => setErrorData(err.message));
    },[id]);
    return(
        <React.Fragment>
            {errorData?<p className='error'>{errorData}</p>:<div>
            <div className="movieDetailsContainer">
                <div className="sideBar">
                    <div className="logo">
                    <img src={Logo} alt="logo" className="logoo" />
                    <h2>
                        MovieBox
                    </h2>
                    </div>
                    <p><i className="fa-solid fa-house"></i>Home</p>
                    <p className="movies"><i className="fa-solid fa-clapperboard"></i>Movies</p>
                    <p><i className="fa-solid fa-tv"></i>Tv Series</p>
                    <p><i className="fa fa-calendar"></i>Upcoming</p>
                </div>
                <div className="moviePage">
                    <div className="trailer">
                        <img src={"https://www.themoviedb.org/t/p/original/"+clickedMovie?.poster_path} alt="movie poster" />
                        <div className="watchTrailer">
                            <i className="fa-solid fa-circle-play"></i>
                            <p>Watch Trailer</p>
                        </div>
                    </div>
                    <div className="title">
                        <div className="movieTitle">
                            <h1 data-tesid="movie-title">
                                {clickedMovie?.title}
                            </h1>
                        </div>
                        <p className="releaseDate" data-tesid="movie-release-date">
                            {clickedMovie?.release_date}
                        </p>
                        <p className="runtime" data-tesid="movie-runtime">
                            {clickedMovie?.runtime}
                        </p>
                    </div>
                    <div className="overview"  data-tesid="movie-overview">
                        {clickedMovie?.overview}
                    </div>
                </div>
            </div>
        </div>}
        </React.Fragment>
    )
}

export default MovieDetails;
