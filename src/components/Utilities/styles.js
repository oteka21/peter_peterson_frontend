import styled from 'styled-components'
import { sizes } from '../../assets/theme'
import media  from '../../assets/media'


export const Container = styled.section`
  padding: ${sizes.padding_mobile};
  margin-top: 50px;
  /* width: 100px; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  
  
  @media(min-width: 1024px){
    padding: ${sizes.padding};
    justify-content: space-between;
  }
`

export const Element = styled.article`
  background: #F6F6F6;
  width: 220px;
  height: 280px;
  margin-top: 70px;
  text-align: center;
  padding: 70px 10px;
  position: relative;
  margin: 70px 20px 0px 20px;
`

export const Graphic = styled.a`
  width: 120px;
  height: 120px;
  background: #A3CACA;
  top: -60px;
  left: 54px;
  border-radius: 50%;
  position: absolute;
  
  & img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
` 
export const Title = styled.h3`
  color: #676767;
  margin-bottom: 10px;
  font-weight: 600;
`

export const Text = styled.p`
  color: #676767;
  margin-bottom: 10px;
  font-weight: 200;
`

export const Link = styled.a`
  text-decoration: none;
  color: #93B0C7;
  font-style: italic;
`