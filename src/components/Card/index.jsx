import React from 'react'
import { Container, Text, Image, Content } from './styles'
import PropTypes from 'prop-types' 

export const Card = ({ source, title, text, href }) => (
  <Container>
    <Image src={source} />
    <Content>
      <h3>
        {title}
      </h3>
      <Text>
        {text}
      </Text>
    </Content>
  </Container>
)

Card.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}