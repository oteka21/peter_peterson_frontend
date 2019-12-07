import React from 'react'
import { Portal } from '../Portal'
import { Container, Styles, Item } from './styles'
import { menuList } from '../../assets/resources'

export const Menu = ({}) => {
  return <Portal>
    <Styles />
    <Container>
      {
        menuList.map(({path, title}, key) => <Item href={path} key={key} >{title}</Item>)
      }
    </Container>
    </Portal>
}