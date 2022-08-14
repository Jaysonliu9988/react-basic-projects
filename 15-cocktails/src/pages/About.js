import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="section">
      <h2>About page</h2>
      <Link to='/' className='btn'>
        Home
      </Link>
    </section>
  )
}

export default About