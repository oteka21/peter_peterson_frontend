import styled from 'styled-components'

export const Container = styled.nav`
  display: none;

  @media(min-width: 768px){
    display: flex;
    flex-wrap: wrap;
  }
`

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`

export const Link = styled.a`
  display: block;
  padding: 8px 8px;
  text-decoration: none;
  text-transform: uppercase;
  color:#B2B2B2;

  &:hover{
    background: #5982E2;
    color: #fff;
  }

  @media(min-width: 1024px){
    padding: 8px 16px;
  }
`