import axios from "./axios";
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './rows.css'

function Rows({title, fetchURL, isLargeRow}) {
const [movies, setMovies] = useState([])
const baseURL = "https://image.tmdb.org/t/p/original/";

useEffect( () => {
  async function fetchData() {
    const request = await axios.get(fetchURL);
    setMovies(request.data.results);
    return request;
  } 
  fetchData();
},[fetchURL])

  return( 
  <div className='rows'>
    <h2>{title}</h2>
    <div className="rows_posters">
    {movies.map( movie => 
       (
      <img className={` rows_poster ${isLargeRow && 'rows_posterLarge'}`}
      key={movie.id}
      src={`${baseURL}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.title} />
  ))}
    </div>
  </div>
  );
}

export default Rows;
