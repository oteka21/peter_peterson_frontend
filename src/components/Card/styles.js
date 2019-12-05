import styled from 'styled-components'
import media from '../../assets/media'

export const Container = styled.div`
  width: 100%;
  min-width: 200px;
  text-decoration: none;
  flex-wrap: wrap;

  ${media.large`
    max-width: 320px;
  `}
`

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`

export const Content = styled.div`
  width: 100%;
  object-fit: cover;
  color: #676767;
`

export const Text = styled.p`
  font-weight: 200;
  margin: 8px 0;
`