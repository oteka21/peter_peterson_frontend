import styled from 'styled-components'
import { MdMenu } from 'react-icons/md'
import media from '../../assets/media'

export const BurguerButton = styled(MdMenu)`
  width: 50px;
  height: auto;
  cursor: pointer;

  z-index: ${props => props.superim === 'true' ? '1200' : 'initial'};
  color: ${props => props.superim === 'true' ? '#fff' : 'initial'};

  ${media.medium`
    display: none;
  `}
`

export const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`