import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  gap: 5em;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media only screen and (max-width: 1400px) {
    gap: 15px;
  }
  @media only screen and (max-width: 1023px) {
    gap: 10px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1em;
  }
`
const Left = styled.div`
  flex: 2;
  @media only screen and (max-width: 1400px) {
    flex: 1;
  }
  @media only screen and (max-width: 1023px) {
    flex: 1;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`
const Image = styled.img`
  width: 750px;
  height: 550px;
  border-radius: 5%;
  display: none;
  @media only screen and (max-width: 1400px) {
    width: 100%;
    height: 350px;
  }
  @media only screen and (max-width: 1023px) {
    width: 100%;
    height: 300px;
  }
  @media only screen and (max-width: 768px) {
      width: 100%;
      height: 400px;
  }
`

const Right = styled.div`
  flex: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 1400px) {
    flex: 1;
  }
  @media only screen and (max-width: 1023px) {
    flex: 1;
  }
`

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
`

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
`

const ContainerTechs = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-direction: row;
`

const Techs = styled.h4`
  font-size: 20px;
  font-weight: 700;
`

const ContainerLinks = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-direction: row;
`

const Links = styled.a`
  cursor: pointer;
  font-size: 22px;
  font-weight: 500;
`

const Project = () => {
  return (
    <Container>
      <Left>
        <Image src='../../dev-and-coffee.jpg' />
      </Left>
      <Right>
        <Title>Titulo del Proyecto</Title>
        <Description>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</Description>
        <ContainerTechs>
          <Techs>React</Techs>
          <Techs>Material UI</Techs>
        </ContainerTechs>
        <ContainerLinks>
          <Links>Codigo <i className='bx bxl-github'></i></Links>
          <Links>Ver Demo <i className='bx bx-link-external' ></i></Links>
        </ContainerLinks>
      </Right>
    </Container>
  )
}

export default Project