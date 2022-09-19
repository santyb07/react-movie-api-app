import React from 'react'
import { useEffect } from 'react'
import {MovieListing} from "../MovieListing/MovieListing.jsx"
import { fetchAsyncMovies } from '../../features/movies/movieSlice.jsx'
import { useSelector,useDispatch } from 'react-redux'
import { fetchAsyncShows } from '../../features/movies/movieSlice.jsx'
import '../Home/home.scss'
import loadergif from '../../images/spinner.gif'

export const Home = () => {
  const dispatch=useDispatch();
  const loader=useSelector((state)=>state.movies.loader);
  const movieText='Harry';
  const showText='Friends';

  useEffect(()=>{
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  },[dispatch])
  return (
    <div className='banner-img'>
      {loader===true?(
        <div className='loader-container'><h1>...Loading</h1></div>
      ):(<MovieListing/>
      )}
    </div>
  )
}
