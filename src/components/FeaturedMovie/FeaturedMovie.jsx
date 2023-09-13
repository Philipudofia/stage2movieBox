import React from 'react';
import './FeaturedMovie.css'
import ReactLoading from "react-loading";

function FeaturedMovie (props){
    const [isFavorited,setIsFavorited] = React.useState(false)


    // onclick favorite button this function is called thereby changing the favorite button color to red and back to grey
    function setFavorite(p){
        setIsFavorited(e => !e)
        const style = isFavorited ? "fa-solid fa-heart notFavorite Favorite":"fa-solid fa-heart notFavorite";
        p.target.className=style
    }
    return(
        <div className="cover">
            <div className='featuredMovies'>
                <div className="header">
                    <h1>
                        Popular Movies
                    </h1>
                    <p>
                        See more <span><i className="fa-solid fa-greater-than"></i></span>
                    </p>
                </div>
                <div className="cards">
                    {/* display the loading indicator when there is no error and data isn't gotten from the api yet */}
                    {props.array ? '':<ReactLoading type="balls" color="#0000FF"
                height={100} width={50} /> }  
                {/* display error on failure to fetch data from api */}
                {props.error?<p className='error'>{props.error}</p>:''}
                {/* mapping out each movie and passing their data into my card container */}
                    {   props.array?.map((e)=>{
                    return <div className='cardContainer' data-testid='movie-card' id={e.id}   key={e.id}>
                        
                        <div className="poster" >
                            <i className="fa-solid fa-heart notFavorite" onClick={setFavorite} >
                            </i>
                            <img src={"https://www.themoviedb.org/t/p/original/"+e.poster_path} alt="" data-testid='movie-poster'/>
                        </div>
                        <div className="information">
                                <h2 className="movieTitle" data-testid='movie-title'>{e.original_title}</h2>
                                <p className="releaseDate" data-testid='movie-release-date'>{e.release_date}</p>
                        </div>
                        </div>        
                        } )}
                </div>
            </div>
        </div>
    )
}

export default FeaturedMovie;