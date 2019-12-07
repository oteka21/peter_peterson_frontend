import styled, { createGlobalStyle, keyframes } from 'styled-components'


const easiIn = keyframes`
  from{
    transform: translateX(100vw)
  }
  to{
    transform: translateX(0)
  }
`
export const Container = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  background: #93B0C7;
  opacity: .94;
  z-index: 1000;
  padding-top: 87px;
  display: flex;
  flex-wrap: wrap;
  /* animation-name: ${easiIn};
  animation-duration: .5s;
  animation-fill-mode: forwards;
  animation-direction: ${props => props.toggleanim ? 'reverse' : 'normal'}; */
`

export const Styles = createGlobalStyle`
  html{
    overflow: hidden;
  }
  body{
    position: relative;
  }
`

export const Item = styled.a`
  display: flex;
  align-items: center;
justify-content: center;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  padding: 0px 5px;
  border-top: 2px solid #fff;
  font-weight: bold;
  text-align: center;
  font-size: 20px;

  &:last-child{
    border-bottom: 4px solid #fff;
  }
`