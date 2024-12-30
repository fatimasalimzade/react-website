import React from 'react'
import Hero from './sections/Hero'
import Favs from './sections/Favs'
import Hero2 from './sections/Hero2'
import Three from './sections/Three'
import Stores from './sections/Stores'
import Hero3 from  './sections/Hero3'
import Divider  from './sections/Divider'
import Hero4 from './sections/Hero4'

const Home = () => {
  return <main>
    <Hero/>
    <Favs/>
    <Hero2/>
    <Three/>
    <Hero3/>
    <Hero4/>
    <Divider/>
    <Three/>
    <Stores/>
    <Divider/>
  </main>
}

export default Home