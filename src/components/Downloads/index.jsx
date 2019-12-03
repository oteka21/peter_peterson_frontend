import React from 'react'
import { Container, Title, CardContainer } from './styles'
import { Card } from '../Card'

const list_Downloads = [
  {
    source: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Inscripcion',
    text: 'Mira los documentos que puedes descargar e inscribirte en nuestro instituto',
    path: '#'
  },
  {
    source: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Inscripcion',
    text: 'Mira los documentos que puedes descargar e inscribirte en nuestro instituto',
    path: '#'
  },
  {
    source: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    title: 'Inscripcion',
    text: 'Mira los documentos que puedes descargar e inscribirte en nuestro instituto',
    path: '#'
  }
]

export const Downloads = () => (
  <Container>
    <Title>Descargar archivos PDF</Title>
    <CardContainer>
      {
        list_Downloads.map((item, key) => <Card key={key} source={item.source} title={item.title} text={item.text} href={item.path}/>)
      }
    </CardContainer>
  </Container>
)