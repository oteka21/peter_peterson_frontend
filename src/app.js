
import React from "react"
import { hot } from 'react-hot-loader/root'
import { Navigation } from './components/Header'
import { GlobalSyles } from './assets/GlobalStyles'

function App (){
  return <>
    <GlobalSyles />
    <Navigation />
  </>
}

export default hot(App);
