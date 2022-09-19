import React from 'react'
import {useSelector} from 'react-redux'
import {getAllMovies} from '../../features/movies/movieSlice'
import {MovieCard} from '../MovieCard/MovieCard.jsx'
import { getAllShows } from '../../features/movies/movieSlice'
import "../MovieListing/movieListing.scss"
import Slider from 'react-slick'
import { Settings } from '../../common/settings'


export const MovieListing = () => {
  
  const movies= useSelector(getAllMovies);
  const shows= useSelector(getAllShows);
  // console.log(movies);
  let renderMovies= "";

  renderMovies=movies.Response === "True" ? (
    movies.Search.map((movies,index)=>{
      return(
        <MovieCard key={index} data={movies}></MovieCard>
      )
    })
  ):(
  <div className='movies-error'>
    <h3>{movies.error}</h3>
    </div>
    );

    let renderShows=shows.Response === "True" ? (
      shows.Search.map((show,index)=>{
        return(
          <MovieCard key={index} data={show}></MovieCard>
        )
      })
    ):(
    <div className='shows-error'>
      <h3>{shows.error}</h3>
      </div>
      );
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <Slider {...Settings}>{renderMovies}</Slider>
        </div> 
      </div>
      <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'>
        <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  )
}
