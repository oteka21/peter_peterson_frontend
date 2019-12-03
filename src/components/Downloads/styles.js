import styled from 'styled-components'
import { sizes } from '../../assets/theme'

export const Container = styled.section`
  margin: ${sizes.padding_mobile};
  margin-top: 50px;
  margin-bottom: 50px;
  
  @media(min-width: 768px){
    margin: ${sizes.padding};
    margin-bottom: 0px;
  }
`
export const Title = styled.h2`
  margin: 20px 0;
  color: #676767;
`

export const CardContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  overflow-x: scroll;

  @media(min-width: 768px){
    justify-content: space-between;
  }
`