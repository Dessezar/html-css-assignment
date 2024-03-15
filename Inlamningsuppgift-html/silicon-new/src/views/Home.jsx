import React from 'react'
import Showcase from './sections/Showcase'
import Brands from './sections/Brands'
import Appfeatures from './sections/Appfeatures'
import Transferfeatures from './sections/Transferfeatures'
import Subscribe from './sections/Subscribe'

const Home = () => {
  return (
    <main>
      <Showcase />
      <Brands />
      <Appfeatures />
      <Transferfeatures />
      <Subscribe />
    </main>
  )
}

export default Home