import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 200px;
  position: relative;
  
  @media(min-width: 768px){
    height: 400px;
  }
`

export const Element = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  height: 200px;
  

  @media(min-width: 768px){
    height: 400px;
  }

  &:after{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #93B0C7;
  opacity: .4;
  z-index: 1;
}
`

export const Image = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: all 1s ease-in;
  background-image: url(${props => props.source});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`


export const Message = styled.a`
  display: block;
  width: 100%;
  max-width: 340px;
  position: absolute;
  margin: 0 auto;
  top : 35%;
  left: 0;
  right: 0;
  font-size: 25px;
  z-index: 2;
  color: #fff;
  text-decoration: none;

  & p {
    text-align: center;
    font-size: 14px;
  }

  & h2 {
    font-size: 18px;
    text-align: center;
  }

  @media(min-width: 768px){
    max-width: 640px;

    & h2 {
      font-size: 25px;
    }

    & p {
      font-size: 18px;
    }
  }

  @media(min-width: 1024px){
    max-width: 700px;

    & h2 {
      font-size: 35px;
    }

    & p {
      font-size: 25px;
    }
  }
`

export const DotsControl = styled.div`
  position: absolute;
  bottom: -30px;
  right: 20px;
  height: 20px;
`

export const Dot = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 4px;
  background: ${props => props.active ? '#005497' : '#D7D7D7'};
  cursor: pointer;
   
   
   &:hover {
     border: 1px solid #676767;
   }

`