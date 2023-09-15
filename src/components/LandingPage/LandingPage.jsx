import React from 'react';
import './LandingPage.css';
import Hero from './johnwick.png';

function LandingPage(){
    return(
        <div className='landingPage'>
            <div className="landingContainer">
                <div className="info">
                    <h1 className="movieName">John Wick 3: <br />
                    Parabellum
                    </h1>
                    <div className="rating">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <p>8.0</p>
                    </div>
                    <h3 className="about">John Wick is on the run after killing a member <br />
                        of the international assassin's guild and with <br />
                        a $14 million price tag on his head he is the <br />
                        target of hit men and women everywhere
                    </h3>
                    <div className="watchTrailer">
                        <i className="fa-solid fa-circle-play"></i>
                        <p>Watch Trailer</p>
                    </div>
                </div>
            </div>
            <img src={Hero} className='imageContainer' alt="john wick"/>
        </div>
    )
}

export default LandingPage;
