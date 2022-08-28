import React from 'react'
import { Link } from 'react-router-dom'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import SingleCocktail from './SingleCocktail'

const Home = () => {
  return (
    <main>
      <SearchForm />
      <SingleCocktail />
    </main>
  )
}

export default Home
