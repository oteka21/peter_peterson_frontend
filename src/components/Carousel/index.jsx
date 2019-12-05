import React, { useState } from 'react'
import { Container, Element, Image, Message } from './styles'
import { useInterval } from '../../hooks/useInterval' 


//TODO: create dots to view what image is current

export const Carousel = ({images}) => {
  const [ current, setCurrent ] = useState(0)

  const  changeCurrent = () => {
    if (current < images.length - 1){
      setCurrent(current => current + 1)
    }else{
      setCurrent(0)
    }
  }

  useInterval(changeCurrent, 3000);

  return (
    <Container>
      <Element>
        <Image source={images[current]} alt='image banner' />
        <Message href='#'>
          <h2>Empieza Hoy tu preparación tecnológica</h2>
          <p>Instituto Bíblico PETER PETERSON a Distancia.</p>
        </Message>
      </Element>
    </Container>
  )
}