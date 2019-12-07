import React from 'react'
import { InfoContainer,InfoContent, InfoItem, List, SocialContainer, Credits, CreditsContent } from './styles'
import { User } from '../User'
import { PageSizer } from '../../assets/theme'
import { FaMapMarkerAlt, FaPhone, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

export const Footer = () => (
  <footer>
    <InfoContainer>
      <PageSizer>
        <InfoContent>
          <InfoItem>
          <h3>Informacion de peterson</h3>
            <List>
              <li><a href="#">Quienes somos</a></li>
              <li><a href="#">Inscripcion en linea</a></li>
              <li><a href="#">Escribenos</a></li>
              <li><a href="#">Presentacion en (video)</a></li>
            </List>
          </InfoItem>
          <InfoItem>
          <h3>Documentos</h3>
            <List>
              <li><a href="#">Formato de inscripcion</a></li>
              <li><a href="#">Triptico de informacion</a></li>
              <li><a href="#">Plan de estudios nivel 1</a></li>
              <li><a href="#">Plan de estudios nivel 3</a></li>
            </List>
          </InfoItem>
          <InfoItem>
          <h3> +Informacion</h3>
            <List>
              <li><a href="#">Quien es Peterson?</a></li>
              <li><a href="#">Respuestas a tus dudas</a></li>
            </List>
          </InfoItem>
          <InfoItem>
          <h3>Contacto</h3>
            <List>
              <li>Nuestras oficinas de atención estan  tu disposicion en la siguiente en dias y horarios de oficina.</li>
              <li><FaMapMarkerAlt /><a href="#"> 109 D # 600 H x 66 C y 66 B Colonia Obrera, Medida, Yucatan</a></li>
              <li><FaPhone /><a href="#"> +52 99 91 64 28 52 whatsapp</a></li>
              <li><IoIosMail className='mail-icon'/><a href="mailto:estudiantes@ibppeterson.org">estudiantes@ibppeterson.org</a></li>
            </List>
          </InfoItem>
        </InfoContent>
        <SocialContainer>
          <a href='#'><FaTwitter className='social-icon' /></a>
          <a href='#'><FaFacebookF className='social-icon' /></a>
          <User />
        </SocialContainer>
      </PageSizer>
    </InfoContainer>
    <Credits>
      <PageSizer>
      <CreditsContent>
        <div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Somos</a></li>
            <li><a href="#">Inscripción</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Peterson</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
          <User />
        </div>
        <p>Copyright © 2013-2019.</p>
        </CreditsContent>
      </PageSizer>
    </Credits>
  </footer>
)