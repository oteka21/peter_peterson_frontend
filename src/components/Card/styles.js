import styled from 'styled-components'

export const Container = styled.a`
  width: 100%;
  min-width: 200px;
  text-decoration: none;
  flex-wrap: wrap;
  margin: 0 10px;

  @media (min-width: 768px){
    width: calc(100% / 3 - 10px);
  }
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