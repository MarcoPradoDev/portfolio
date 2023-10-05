import React from 'react'
import styled from 'styled-components'
import ItemContact from './ItemContact'
import Footer from './Footer'

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-height: 667px) {
    min-height: 800px;
  }
`

const Container = styled.div`
  height: 100%;
  width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  @media only screen and (max-width: 1400px) {
    width: 100vw;
    padding: 0 5%;
  }
  /* @media only screen and (max-width: 1023px) {
    width: 100vw;
    padding: 0 5%;
  }
  @media only screen and (max-width: 768px) {
    width: 100vw;
    padding: 0 5%;
  } */
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

const ContainerItems = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
  @media only screen and (max-width: 768px) {
      flex-direction: column;
  }
`

const Contact = () => {
  return (
    <Section id='contact'>
      <Container>
        <Title>CONTACTO</Title>
        <SubTitle>Quieres desarrollar aplicacion geniales, cuenta conmigo. 😉</SubTitle>
        <ContainerItems>
          <ItemContact icon={<i style={{ fontSize: '30px' }} className='bx bxs-city' ></i>} title='Locación' subtitle='Lima, Perú' />
          <ItemContact icon={<i style={{ fontSize: '30px' }} className='bx bxs-envelope' ></i>} title='Email' subtitle='marco.prado.dev@gmail.com' />
        </ContainerItems>
      </Container>
      <Footer />
    </Section>
  )
}

export default Contact