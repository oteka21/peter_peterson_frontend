import React from 'react'
import { Container, Menu, Link } from './styles'
import { User } from '../User'
import PropTypes from 'prop-types';

const menuList = [
  {
    title: 'Inicio',
    path: '#'
  },
  {
    title: 'Info & Directiva',
    path: '#'
  },
  {
    title: 'Inscripcion',
    path: '#'
  },
  {
    title: 'Respuestas',
    path: '#'
  },
  {
    title: 'Peterson',
    path: '#'
  },
  {
    title: 'Contacto',
    path: '#'
  }
]

export const Navigation = ({list = menuList}) => (
  <Container>
    <Menu>
      {
        list.map((item, key) => <li key={key}>
          <Link href={item.path}>
            {item.title}
          </Link>
        </li> )
      }
      <User />
    </Menu>
  </Container>
)

Navigation.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    }
  )).isRequired
}