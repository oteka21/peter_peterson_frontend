import styled from 'styled-components'
import { sizes } from '../../assets/theme'

export const Info = styled.div`
  justify-content: space-between;
  padding: ${sizes.padding};
  padding-top: 30px;
  padding-bottom: 30px;
  background: #D7D7D7;
  color: #676767;
  display: none;
  
  @media(min-width: 768px){
    display: flex;
  }
`

export const InfoItem = styled.div`

`

export const List = styled.ul`
  & li{
    padding: 5px 0;
  }

  li a{
    text-decoration: none;
    color: #676767;
  }
`

export const SocialContainer = styled.div`
  background: #D7D7D7;
  padding: var(--root-padding);
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;

  & .social-icon{
    fill: #676767;
  }
`

export const Credits = styled.div`
  background: #000;
  padding: var(--root-padding);
  padding-top: 2px;
  padding-bottom: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  & ul li{
    display: inline-block;
  }

  & ul li a{
    color: #D7D7D7;
    text-decoration: none;
    padding: 0 8px;
    display: inline-block;
    border-right: 1px solid #D7D7D7;
  }

  & ul li:last-child a {
    border: 0;
  }
`