import axios from './axios';
import React, { useEffect, useState } from 'react';
import './banner.css'
import requests from './Request';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const request = await axios.get(requests.fetchRomanceMovies);
            
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1 )
                ]
            );
            return request;
        }
        fetchData();
    },[]);
console.log(movie);
    
    function truncate (str,n) {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }
  return (
  <header className='banner' style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundSize: "cover",
      backgroundPosition: "center center"
  }}>
      <div className="banner_content">
          <h1 className="banner_title">{movie?.name || movie?.title || movie?.original_name}</h1>
          <div className="banner_buttons">
              <button className='banner_btn'>Play</button>
              <button className='banner_btn'>My List</button>
          </div>
          <div className="banner_description">
             { truncate( 
                movie.overview,150
             )}
          </div>
      </div>
      <div className="banner_fadeBottom"/>
  </header>);
}

export default Banner;
