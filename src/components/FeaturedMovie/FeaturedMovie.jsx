import React from 'react';
import './FeaturedMovie.css'

function FeaturedMovie (props){
    const [isFavorited,setIsFavorited] = React.useState(false)
    
    function setFavorite(p){
        // const [isFavorited,setIsFavorited] = React.useState(false)
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
                    {props.array?'':<p className='loader'>Loading..</p> }  
                    {   props.array?.map((e)=>{
                    return <div className='cardContainer' data-testid='movie-card' id={e.id} key={e.id}>
                        <div className="poster" >
                            <i className="fa-solid fa-heart notFavorite" key={e.id} onClick={setFavorite} >
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