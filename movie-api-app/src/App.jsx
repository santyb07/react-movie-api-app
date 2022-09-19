import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './app.scss'
import {Header} from './components/Header/Header.jsx'
import {Footer} from './components/Footer/Footer.jsx'
import {Home} from './components/Home/Home.jsx'
import {MovieDetail} from './components/MovieDetail/MovieDetail'
import {PageNotFound} from './components/PageNotFound/PageNotFound'

function App() {

  return (
    <div className='app'>
      <Router>
      <Header/>
      <div className="container">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie/:imdbID' element={<MovieDetail/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      </div>
      <Footer/>
      </Router>
    </div>
      

  )
}

export default App
