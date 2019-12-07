
import React from "react"
import { Header } from './components/Header'
import { GlobalSyles } from './assets/GlobalStyles'
import { Carousel } from './components/Carousel'
import { Utilities } from './components/Utilities'
import { Downloads } from './components/Downloads'
import { Footer } from './components/Footer'
import { carouselImages, menuList, utilities_list, list_Downloads } from './assets/resources'

function App (){
  return <>
    <GlobalSyles />
    <Header menulist={menuList}/>
    <Carousel images={carouselImages}/>
    <Utilities list={utilities_list}/>
    <Downloads list={list_Downloads}/>
    <Footer />
  </>
}

export default App;
