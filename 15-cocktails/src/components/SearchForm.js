import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

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
