import React from 'react'
import Showcase from './sections/Showcase'
import Brands from './sections/Brands'
import Appfeatures from './sections/Appfeatures'
import Transferfeatures from './sections/Transferfeatures'
import Subscribe from './sections/Subscribe'
import FAQ from './sections/FAQ'
import HowDoesItWork from './sections/HowDoesItWork'
import Testemonials from './sections/Testemonials'

const Home = () => {
  return (
    <main>
      <Showcase />
      <Brands />
      <Appfeatures />
      <HowDoesItWork />
      <Transferfeatures />
      <Testemonials />
      <FAQ />
      <Subscribe />
    </main>
  )
}

export default Home