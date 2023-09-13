import './LandingPage.css'

function LandingPage(props){
    return(
        <div className='landingPage'>
            <div className="landingContainer">
                {props.array?'':<p className='loader'>Loading..</p> }
                <div className="info">
                    <h1 className="movieName">{props.original_title} </h1>
                    <div className="rating">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <p>{props.vote_average}</p>
                    </div>
                    <h3 className="about">{props.overview} </h3>
                    <div className="watchTrailer">
                        <i className="fa-solid fa-circle-play"></i>
                        <p>Watch Trailer</p>
                    </div>
                </div>
            </div>
            <img src={"https://www.themoviedb.org/t/p/original/"+props.poster_path} className='imageContainer' alt=""/>
        </div>
    )
}

export default LandingPage;