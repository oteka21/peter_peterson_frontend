import React, { useState } from 'react'
import { Container, Element, Image, Message, DotsControl, Dot } from './styles'
import { useInterval } from '../../hooks/useInterval' 

export const Carousel = ({images}) => {
  const [ current, setCurrent ] = useState(0)

  const  changeCurrent = () => {
    if (current < images.length - 1){
      setCurrent(current => current + 1)
    }else{
      setCurrent(0)
    }
  }

  useInterval(changeCurrent, 5000);

  return (
    <Container>
      <Element>
        <Image source={images[current]} alt='image banner' />
        <Message href='#'>
          <h2>Empieza Hoy tu preparación tecnológica</h2>
          <p>Instituto Bíblico PETER PETERSON a Distancia.</p>
        </Message>
      </Element>
      <DotsControl>
        {
          images.map((item, key) => <Dot key={key} active={key === current ? true : false } onClick={()=> setCurrent(key)}/>)
        }
      </DotsControl>
    </Container>
  )
}