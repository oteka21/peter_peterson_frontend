import styled from 'styled-components'
import media from '../../assets/media'

export const InfoContainer = styled.div`
  background: #D7D7D7;
`

export const InfoContent = styled.div`
  /* justify-content: space-between; */
  padding: 30px 0;
  color: #676767;
  flex-wrap: wrap;
  display:flex;

  ${media.large`
    flex-wrap: nowrap;
  `}
`

export const InfoItem = styled.div`
  width: 100%;
  text-align: center;

  ${media.large`
    width: 300px;
    text-align: initial;
  `}
`

export const List = styled.ul`
  & li{
    padding: 5px 0;
  }

  & li:last-child{
    display:flex;
    align-items: center;
    justify-content: center;
  }

  & li a {
    text-decoration: none;
    color: #676767;
  }

  & li a:hover{
    text-decoration: underline;
  }

  ${media.large`
    & li:last-child{
      justify-content: initial;
    }
  `}
`

export const SocialContainer = styled.div`
  background: #D7D7D7;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;

  & .social-icon{
    fill: #676767;
    font-size: 30px;
  }
  & .social-icon:hover{
    fill: #a3a3a3;
  }
`

export const Credits = styled.div`
  background: #000;
`

export const CreditsContent = styled.div`
  padding-top: 2px;
  padding-bottom: 2px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  font-size: 12px;

  ${media.large`
    justify-content: space-between;
  `}

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

  & ul li a:hover{
    text-decoration: underline;
  }

  & ul li:last-child a {
    border: 0;
  }

  & div{
    display: flex;
    align-items: center;
  }

  & p{
    color: #D7D7D7;
  }
`