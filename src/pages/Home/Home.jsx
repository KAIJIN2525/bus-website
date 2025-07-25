import React from 'react'
import Search from '../Search/Search'
import Hero from './Hero/Hero'
import Category from './Category/Category'
import Offer from './Offer/Offer'

const Home = () => {
  return (
    <div>
        <Hero />
        <Search />
        <Category />
        <Offer />
    </div>
  )
}

export default Home