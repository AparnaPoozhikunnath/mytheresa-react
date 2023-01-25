import React, { Component,useState } from 'react';
import { Link} from 'react-router-dom'
import "./styles/Carousel.scss";
import Card from "./Card";

const Carousel = ({ slides, name }) => {
const slidesData = slides.results;
  const [start, setStartPoint] = useState(0);
  const [end, setEndPoint] = useState(3);
  const goToPrevious = () => {
    const isFirstSlide = start === 0;
    const startIndex = isFirstSlide ? slidesData.length - 3 : start - 1;
    const endIndex = isFirstSlide ? slidesData.length : end - 1;
    setStartPoint(startIndex);
    setEndPoint(endIndex);
  };

  const goToNext = () => {
    const isLastSlide = start === slidesData.length - 3;
    const startIndex = isLastSlide ? 0 : (start + 1);
    const endIndex = isLastSlide ? 3 : end + 1;
    setStartPoint(startIndex);
    setEndPoint(endIndex);
  };


  return (
    <div className='sliderStyles'>
      <div>
        <button onClick={goToPrevious} className='leftArrowStyles'>
          ❰
        </button>
        <button onClick={goToNext} className='rightArrowStyles'>
          ❱
        </button>
      </div>
      {slidesData.slice(start, end).map((slide, slideIndex) => (
       <Link to={{pathname:`/details/${name}/${slide.id}`}}  key={slideIndex}>
        <Card imageUrl={`https://image.tmdb.org/t/p/w500${slide.backdrop_path}`} label={slide.title} alt_label={slide.name} />
        </Link> 
      ))}
  
    </div>
  );
};


export default Carousel;