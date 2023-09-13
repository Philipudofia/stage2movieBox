import './Nav.css';
import React from 'react';
import ReactLoading from "react-loading";
function Nav (){

    const [query, setQuery] =  React.useState('')
    const [searching, setSearching]= React.useState(false)
    const [errorData, setErrorData]= React.useState()
    const [searched, setSearched] = React.useState()
   
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTk5YmQwMDM0NmVkNTQwOWJkMTFiOTA3MjNkODAyNiIsInN1YiI6IjY0ZmVlNTkxZWZlYTdhMDBjMzk1ZjkxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Zxb48OwxQyNPnbYizbneorc1O70B26aDgOBZ6aRSic'
        }
      };
      
      React.useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
        .then(res => res.json())
        .then(data=> {
            setSearched(data.results);
        })
        .catch(err =>{
            setErrorData("Sorry couldn't get data, check your network connection")
        } ); 
        },[query])
    
    return(
        <div className='navbar'>
            <div className="navbarContainer">
                <div className="logo">
                    <i className="fa-solid fa-tv"></i>
                    <h2>
                        MovieBox
                    </h2>
                </div>
                <form className="search" action=''>
                    <input type="search" name="" id="search" onChange={e=> {setQuery(e.target.value); e.target.value.length > 0? setSearching(true): setSearching(false)}} placeholder='What do you want to watch?'/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
                <div className="searchContainer" style={searching? {display:'flex'}:{display:'none'}}>
                    {searched?<ReactLoading type="balls" color="#0000FF"
                height={100} width={50} />:'' }
                {errorData?<p className='error'>{errorData}</p>:''}
                    {searched?.map((e)=>{
                        return                     <div className='searchCard'>
                            <div className="poster">
                                <img src={"https://www.themoviedb.org/t/p/original/"+e.poster_path} alt=""/>
                            </div>
                            <div className="info"> 
                                <div className="movieName">{e.title}</div>
                    <p className="releasedate">{e.release_date}</p>
                            </div>
                        </div>
                    })}
                </div>
                <div className="signIn">
                    <h3>Sign in</h3>
                    <i className="fa-solid fa-grip-lines"></i>
                </div>
            </div>
        </div>
    )
}

export default Nav;