import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import user from '../../images/user.png'
import { useDispatch } from 'react-redux'
import '../Header/header.scss'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

export const Header = () => {
  const [term,setTerm] = useState('');
  const dispatch=useDispatch();

  const submitHandler=(e)=>{
    e.preventDefault();
    if(term==='') return alert('please enter valid movie name');
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  }

  return (
    <div className='header'>
      <div className='logo'><Link to='/'>Movie App</Link></div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type='text' value={term} placeholder='Search Movies or Shows' onChange={(e)=>setTerm(e.target.value)}></input>
          <button type='submit'><i className='fa fa-search'></i></button>
        </form>
      </div>
      <div className='user-image'>
        <img src={user} alt='user'></img>
      </div>
    </div>
  )
}
