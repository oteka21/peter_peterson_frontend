import React from 'react'
import { Container } from './styles'
import { Logo } from '../Logo'
import { Navigation } from '../Navigation'

export const Header = () => (
  <Container>
    <Logo />
    <Navigation />
  </Container>
)