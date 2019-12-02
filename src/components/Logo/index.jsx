import React from 'react'
import { Container, Figure, Title, Light } from './styles'
import LogoImage from '../../assets/images/logo.png'

export const Logo = () => (
  <h1>
    <Container href='#'>
      <Figure src={LogoImage} alt='Main Logo' />
      <Title>
        <Light>Instituto Bíblico a distancia</Light> <span>PETER PETERSON</span>
      </Title>
    </Container>
  </h1>
)