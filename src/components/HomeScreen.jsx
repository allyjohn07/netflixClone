import React from 'react';
import Banner from './Banner';
import Nav from './Nav';
import Rows from './Rows';
import "./homeScreen.css";
import requests from './Request';


function HomeScreen() {
  return <div>
      {/* Navbar */}
      <Nav/>

      {/* Banner */}
      <Banner/>

      {/* Rows */}
      <Rows title='Trending' fetchURL={requests.fetchTrending} isLargeRow/>
      <Rows title='Upcoming' fetchURL={requests.fetchUpcoming} />
      <Rows title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals}/>
      <Rows title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
      <Rows title='Action Movies' fetchURL={requests.fetchActionMovies} />
      <Rows title='Horrow Movies' fetchURL={requests.fetchHorrowMovies} />
      <Rows title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
  </div>;
}

export default HomeScreen;
