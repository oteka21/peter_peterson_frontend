import React from 'react'
import { Container } from './styles'
import { Logo } from '../Logo'
import { Navigation } from '../Navigation'
import { PageSizer } from '../../assets/theme'

//TODO: create a burguer menu

export const Header = () => (
  <header>
    <PageSizer>
      <Container>
        <Logo />
        <Navigation />
      </Container>
    </PageSizer>
  </header>
)