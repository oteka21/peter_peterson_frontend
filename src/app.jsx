
import React from "react"
import { Header } from './components/Header'
import { GlobalSyles } from './assets/GlobalStyles'
import { Carousel } from './components/Carousel'
import { Utilities } from './components/Utilities'
import { Downloads } from './components/Downloads'
import { Footer } from './components/Footer'

function App (){
  return <>
    <GlobalSyles />
    <Header />
    <Carousel />
    <Utilities />
    <Downloads />
    <Footer />
  </>
}

export default App;
