import styled from 'styled-components'

export const Container = styled.a`
  text-decoration: none;
  color: #0A0A0A;
  display: flex;
  justify-content: space-evenly;
  max-width: 280px;
`

export const Figure = styled.img`
  width: 60px;
  height: 100%;
  line-height: 0;
  display: block;
  /* margin-top: 5px; */
`

export const Title = styled.span`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: space-between;
  font-size: 21px;
  height: 100%;
`

export const Light = styled.span`
  font-weight: 300;
  width: 100%;
  font-size: 15px;
`