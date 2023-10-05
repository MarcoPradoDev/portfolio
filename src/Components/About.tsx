import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1400px) {
    display: flex;
  }
  @media only screen and (max-width: 1023px) {
    height: 100vh;
    display: flex;
  }
  @media only screen and (max-width: 767px) {
    height: 100vh;
    display: block;
  }
  @media only screen and (max-height: 667px) {
    min-height: 1100px;
    display: block;
  }
`

const Container = styled.div`
  height: 100%;
  width: 1400px;
  display: flex;
  justify-content: center;
  gap: 30px;
  min-height: 1090px;
  @media only screen and (max-width: 1400px) {
    width: 100vw;
    padding: 0 5%;
  }
  @media only screen and (max-width: 1023px) {
    flex-direction: row;
    padding: 0 5%;
    width: 100vw;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column-reverse;
    display: inline-flex;
    width: 100%;
    margin-top: 80px;
    gap: 10px;
  }
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media only screen and (max-width: 1400px) {
    align-items: center;
  }
  @media only screen and (max-width: 767px) {
    align-items: center;
    justify-content: start;
  }
`

const Image = styled.img`
  width: 500px;
  height: 400px;
  border-radius: 5%;
  @media only screen and (max-width: 1400px) {
    width: 100%;
    height: 330px;
  }
  @media only screen and (max-width: 1023px) {
    width: 100%;
    height: 350px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    height: 250px;
  }
`

const Right = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: start;
  justify-content: center;
  gap: 5px;
  @media only screen and (max-width: 1023px) {
   flex: 2;
  }
`

const Title = styled.h4`
  font-size: 20px;
  color: #023047;
  font-weight: 700;
`

const SubTitle = styled.h3`
  font-size: 24px;
  color: black;
  font-weight: 700;
  text-align: justify;
`

const Text = styled.p`
  color: black;
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
`

const About = () => {
  return (
    <Section id='about'>
      <Container>
        <Left>
          <Image src='../../dev-and-coffee.jpg' />
        </Left>
        <Right>
          <Title>SOBRE MI</Title>
          <SubTitle>Desarrollador de apliciones</SubTitle>
          <Text>Como desarrollador FullStack Junior, he trabajado con varias tecnologías JavaScript, TypeScript, React, React Naive, Net Core y NodeJs. Me centro en la creación de aplicaciones móviles híbridas, como también en el diseño de páginas web, construyendo sus respectivos API REST usando Net Core o Express. Mi experiencia me ha llevado a realizar proyectos con código limpio y eficiente. También trabajo en equipo aportando soluciones y apoyando en el desarrollo de múltiples funciones para desarrollar aplicaciones funcionales.</Text>
        </Right>
      </Container>
    </Section>
  )
}

export default About