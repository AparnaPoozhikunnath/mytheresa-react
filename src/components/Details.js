import React, { useState ,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "./Header";
import fetchData from './FetchData';
import "./styles/Details.scss";


function Details() {
  const { id, category } = useParams();
  // localStorage.clear();
  const [active, setActive] = useState(false);
  const [buttonText, setButtonText] = useState("Add to Wishlist");
  const movieDetails = fetchData(`https://api.themoviedb.org/3/movie/${id}?api_key=47bcd2dcfb7818c8fbf6a8cd655bbaa4&language=en-US`);
  const existingArray = JSON.parse(localStorage.getItem('allEntries')) === null ? [] : JSON.parse(localStorage.getItem('allEntries'));

  useEffect(() => {
    if (existingArray.includes(id)) {
      setButtonText("Remove from Wishlist")
    }
  }, []);

  function addToFavorites(favId) {
    if (existingArray != undefined) {
      if (existingArray.includes(favId)) {
        const index = existingArray.indexOf(favId);
        existingArray.splice(index, 1);
        setActive(false);
        setButtonText("Add to Wishlist")
      }
      else {
        existingArray.push(favId);
        setActive(true);
        setButtonText("Remove from Wishlist");
      }
    }
    else {
      if (existingArray === null || existingArray === "") {
        existingArray = [];
      }
      existingArray.push(favId);
      setActive(true);
      setButtonText("Remove from Wishlist");
    }
    localStorage.setItem("allEntries", JSON.stringify(existingArray));
  }

  return (
    <div>
      {movieDetails != null && (
        <section>
          <Header title={movieDetails.title} />
          <div className="grid-container">
            <div className="grid-item">
              <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} />
              </div>
            <div className="grid-item">
              <p className="movie-des"> {movieDetails.overview}</p>
              <button onClick={() => addToFavorites(id)} className={existingArray.includes(id) === true && category ? "fav-btn-active" : "fav-btn-inactive"}>
               {buttonText}
              </button>
             
            </div>
           
          </div>
        </section>
      )}
    </div>
  );
}


export default Details;
