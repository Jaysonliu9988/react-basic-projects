import React from 'react'
import { Link } from 'react-router-dom'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <div>
      <h2 className='section'>Home page</h2>
      <Link to='/about' className='btn'>
        About
      </Link>
    </div>
  )
}

export default Home
