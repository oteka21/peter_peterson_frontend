import styled from 'styled-components'
import media from '../../assets/media'

export const Container = styled.div`
  margin: 20px 0;
  
  ${media.large`
    margin: 40px 0;
  `}
`
export const Title = styled.h2`
  margin: 20px 0;
  color: #676767;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap:wrap;

  ${media.large`
    justify-content: space-between;
  `}
`