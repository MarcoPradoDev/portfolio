import React from 'react'
import styled from 'styled-components'

const Section = styled.footer`
  background: black;
  width: 100vw;
  justify-content: center;
  display: flex;
  padding: 30px 0;
`

const Container = styled.div`
  width: 1400px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  @media only screen and (max-width: 1400px) {
    padding: 0 5%;
  }
  @media only screen and (max-width: 1023px) {
    padding: 0 5%;
  }
  @media only screen and (max-width: 768px) {
      padding: 0 5%;
  }
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: white;
`

const ContainerLink = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Link = styled.a`
  font-size: 16px;
  color: white;
  font-size: 22px;
`

const Footer = () => {
  return (
    <Section>
      <Container>
        <Text>Copyright © 2023. Todos los derechos estan reservados.</Text>
        <ContainerLink>
          <Link href='https://www.linkedin.com/in/marco-de-la-cruz-prado/' target='_blank'>
            <i className='bx bxl-linkedin'></i>
          </Link>
          <Link href='https://github.com/MarcoPradoDev' target='_blank'>
            <i className='bx bxl-github'></i>
          </Link>
        </ContainerLink>
      </Container>
    </Section>
  )
}

export default Footer