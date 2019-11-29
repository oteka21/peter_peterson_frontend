import {createGlobalStyle} from 'styled-components'

export const GlobalSyles = createGlobalStyle`
  html{
    box-sizing: border-box;
  }
  *, *:before, *:after{
    box-sizing: border-box;
    outline: none;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button { 
    background : transparent;
    border: 0;
    outline: 0
  }

  body{
    margin: 0;
    font-size: 12px;
    overflow-x: hidden;
  }
`