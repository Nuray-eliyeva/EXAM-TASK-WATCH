import React from 'react'
import { Banner } from '../Companents/banner'
import Arrivals from '../Companents/arrivals'
import Galery from '../Companents/galery'
import Popular from '../Companents/Popular'
import Choice from '../Companents/choice'
function Home() {
  return (
   <>
    <Banner/>
    <Arrivals/>
    <Galery/>
    <Popular/>
    <Choice/>
   </>
  )
}

export default Home