import React from 'react'
import { Container, Title, CardContainer } from './styles'
import { Card } from '../Card'
import { PageSizer } from '../../assets/theme'

export const Downloads = ({list}) => (
  <section>
    <PageSizer>
      <Container>
        <Title>Descargar archivos PDF</Title>
        <CardContainer>
          {
            list.map((item, key) => <Card key={key} source={item.source} title={item.title} text={item.text} href={item.path}/>)
          }
        </CardContainer>
      </Container>
    </PageSizer>
  </section>
)