import {createGlobalStyle} from 'styled-components'

export const GlobalSyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');
  html {
    box-sizing: border-box;
    font-family: 'Roboto';
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    outline: none;
  }

  ul,
  li,
  h1,
  h2,
  h3,
  p,
  button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
    color: #0A0A0A;
  }

  body {
    margin: 0;
    font-size: 14px;
    overflow-x: hidden;
  }
`