import React, { useState, useEffect } from 'react';
import Header from "./Header";
import fetchData from './FetchData';
import "./styles/Details.scss";


function Wishlist() {
    const movieArray = [];
    const wishlistArray = JSON.parse(localStorage.getItem('allEntries'));
    wishlistArray.map(function (element, index) {
        const movieDetails = fetchData(`https://api.themoviedb.org/3/movie/${element}?api_key=47bcd2dcfb7818c8fbf6a8cd655bbaa4&language=en-US`);
        if (movieDetails != null) {
            movieArray.push(<div className="grid-container" key={movieDetails.id}>
                <div className="grid-item">
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} /></div>
                <div className="grid-item">
                    <h5>{movieDetails.title}</h5>
                    <p className="movie-des"> {movieDetails.overview}</p>
                </div>
            </div>);
        }
    });

    return (
            <section>
                <Header title="Wishlist" />
                {movieArray}
            </section>
    );
}


export default Wishlist;
