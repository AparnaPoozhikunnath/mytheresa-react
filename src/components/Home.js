import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Carousel from "./Carousel";
import  fetchData  from './FetchData';
import "./styles/Common.scss";


function Home() {
  const trending = fetchData('https://api.themoviedb.org/3/trending/all/day?api_key=47bcd2dcfb7818c8fbf6a8cd655bbaa4');
  const upcoming = fetchData('https://api.themoviedb.org/3/movie/upcoming?api_key=47bcd2dcfb7818c8fbf6a8cd655bbaa4&language=en-US&page=');
  const nowPlaying = fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=47bcd2dcfb7818c8fbf6a8cd655bbaa4&language=en-US&page=1');
    return (
      <div>
        <Header title="Movies"/>
        <Link to={{pathname:`/wishlist`}}>
                <p class="wish-label">View Wishlist</p>
                </Link>
        <section> 
        
        { nowPlaying != null && (
       <section> 
        <h3>Now Playing</h3>
        <Carousel slides={nowPlaying} name="nowPlaying"/>
        </section>
       ) }
        { trending != null &&
        <section>
          <h3>Trending</h3>
        <Carousel slides={trending} name="trending"/>
        </section>
        }
         { upcoming != null &&
         <section>
          <h3>Upcoming</h3>
        <Carousel slides={upcoming} name="upcoming"/>
        </section>
        }
         </section> 
    </div>
    );
  }


export default Home;