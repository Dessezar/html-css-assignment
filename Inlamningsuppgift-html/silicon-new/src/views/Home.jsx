import React from 'react'
import Showcase from './sections/Showcase'
import Brands from './sections/Brands'
import Appfeatures from './sections/Appfeatures'
import Transferfeatures from './sections/Transferfeatures'
import Subscribe from './sections/Subscribe'
import FAQ from './sections/FAQ'

const Home = () => {
  return (
    <main>
      <Showcase />
      <Brands />
      <Appfeatures />
      <Transferfeatures />
      <Subscribe />
      <FAQ />
    </main>
  )
}

export default Home