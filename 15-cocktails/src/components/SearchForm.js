import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label>search your favorite cocktail</label>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
