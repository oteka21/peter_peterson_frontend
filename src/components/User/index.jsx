import React from 'react'
import { Container, Logo } from './styles'
import userLogo from '../../assets/images/user_white.png'
export const User = () => (
  <Container>
    <Logo src={userLogo} alt='user logo'/>
  </Container>
)