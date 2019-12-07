import React, { useContext } from 'react'
import { Container, Menu, Link } from './styles'
import { User } from '../User'
import PropTypes from 'prop-types';

export const Navigation = ({list}) => {
  return (
  <Container>
    <Menu>
      {
        list.map((item, key) => <li key={key}>
          <Link href={item.path}>
            {item.title}
          </Link>
        </li> )
      }
    </Menu>
    <User />
  </Container>
)}

Navigation.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    }
  )).isRequired
}