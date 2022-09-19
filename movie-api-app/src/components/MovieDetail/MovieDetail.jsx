import React from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import "../MovieDetail/movieDetail.scss"
import { useEffect } from 'react';
import {
  fetchAsyncMovieOrShowDetail, 
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow
} from '../../features/movies/movieSlice'


export const MovieDetail = () => {
  const {imdbID} = useParams();
  const dispatch= useDispatch();
  const data= useSelector(getSelectedMovieOrShow);
  // console.log(data); 

  useEffect(()=>{
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))
    return ()=>{
      dispatch(removeSelectedMovieOrShow());
    };
  },[dispatch,imdbID])
  return (
    <div className='movie-section'>
      {Object.keys(data).length===0 ? 
      (<div>...Loading</div>):
      (<>
      <div className='section-left'>
        <div className="movie-title">
          {data.Title}
        </div>
        <div className='movie-rating'>
          <span>IMDB Rating <i className='fa fa-star' /> : {data.imdbRating}</span>
          <span>IMDB Votes <i className='fa fa-thumbs-up'/> : {data.imdbVotes}</span>
          <span>Runtime <i className='fa fa-film'/> : {data.Runtime}</span>
          <span>Year <i className='fa fa-calender'/> : {data.Year}</span>
          </div>
        <div className="movie-plot">
          {data.Plot}
        </div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className='section-right'>
        <img src={data.Poster} alt={data.Title}></img>
      </div>
      </>)}
    </div>
   
  )
}
