import React from 'react'
import { Container, Element, Graphic, Title, Text, Link } from './styles'
import { PageSizer } from '../../assets/theme'


export const Utilities = ({list}) => (
  <section>
    <PageSizer>
      <Container>
        {
          list.map((item, key) => (
            <Element key={key}>
              <Graphic>
                <img src={item.image} alt="Util image"/>
              </Graphic>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
              <Link href={item.href}>{item.link_text}</Link>
            </Element>
          ))
        }
      </Container>
    </PageSizer>
  </section>
)