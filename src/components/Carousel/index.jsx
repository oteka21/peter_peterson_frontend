import React, { useState } from 'react'
import { Container, Element, Image, Message } from './styles'
import { useInterval } from '../../hooks/useInterval' 


const images = [
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
]
export const Carousel = () => {
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