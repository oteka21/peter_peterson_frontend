import React from 'react'
import { Container, Element, Graphic, Title, Text, Link } from './styles'
import graduation_hat from '../../assets/images/graduation_hat.jpg'
import pen from '../../assets/images/pen.png'
import school from '../../assets/images/school.png'
import classRoom from '../../assets/images/classroom.png'

const utilities_list = [
  {
    image: graduation_hat,
    title: 'Libros y materias',
    text: 'Conoce las materias y conoce el plan de estudios, tareas que vienen descritos en nuestros documentos para descargar (ver el area de descarga)',
    href: '#',
    link_text: 'para descargar (ver el area de descarga)'
  },
  {
    image: pen,
    title: 'Libros y materias',
    text: 'Conoce las materias y conoce el plan de estudios, tareas que vienen descritos en nuestros documentos para descargar (ver el area de descarga)',
    href: '#',
    link_text: 'para descargar (ver el area de descarga)'
  },
  {
    image: school,
    title: 'Libros y materias',
    text: 'Conoce las materias y conoce el plan de estudios, tareas que vienen descritos en nuestros documentos para descargar (ver el area de descarga)',
    href: '#',
    link_text: 'para descargar (ver el area de descarga)'
  },
  {
    image: classRoom,
    title: 'Libros y materias',
    text: 'Conoce las materias y conoce el plan de estudios, tareas que vienen descritos en nuestros documentos para descargar (ver el area de descarga)',
    href: '#',
    link_text: 'para descargar (ver el area de descarga)'
  }
]

export const Utilities = () => (
  <Container>
    {
      utilities_list.map((item, key) => (
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
)