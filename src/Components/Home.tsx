import React from 'react'
import styled from 'styled-components'
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1023px) {
    height: 200vh;
  }
  @media only screen and (max-width: 768px) {
      height: 100vh;
  }
`

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1400px) {
    width: 100vw;
    padding: 0 5%;
  }
  @media only screen and (max-width: 1023px) {
    width: 100vw;
    flex-direction: column-reverse;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 20px; */
  @media only screen and (max-width: 1400px) {
    flex: 2;
  }
  @media only screen and (max-width: 1023px) {
    align-items: center;
    justify-content: start;
    padding: 0 10%;
  }
  @media only screen and (max-width: 768px) {
    flex: 1;
    justify-content: center;
    padding: 0 5%;
  }
`

const Title = styled.h1`
  position: relative;
  font-size: 70px;
  flex-wrap: wrap;
  font-weight: 700;
  line-height: 1.2;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 105%;
    background: #081b29;
    animation: showRight 1s ease forwards;
    animation-delay: 1s;
  }
  @media only screen and (max-width: 1023px) {
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`

const Body = styled.p`
  position: relative;
  font-size: 22px;
  margin: 20px 0 20px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #081b29;
    animation: showRight 1s ease forwards;
    animation-delay: 1.6s;
  }
  @media only screen and (max-width: 1023px) {
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const BarButton = styled.div`
  display: flex;
  gap: 20px;
  height: 50px;
`

const Button = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 100%;
  background: var(--black);
  border: 2px solid var(--black);
  border-radius: 8px;
  font-size: 19px;
  color: var(--white);
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  z-index: 1;
  overflow: hidden;
  transition: .5s;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    width: 150px;
  }
  &:nth-child(2){
    background: transparent;
    color: var(--black);
  }
  &:hover {
    color: var(--black)
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--white);
    z-index: -1;
    transition: .5s;
  }
  &:hover::before {
    width: 100%;
  }
  &:nth-child(2)::before{
    background: var(--black);
  }
  &:nth-child(2):hover{
    color: var(--white);
  }
`

const BarIcon = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100px;
  display: flex;
  gap: 10px;
`

const Icon = styled.a`
  position: relative;
  display: inline-flex;
  width: 40px;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: transparent;
  border: 2px solid black;
  border-radius: 50%;
  font-size: 20px;
  color: black;
  text-decoration: none;
  z-index: 1;
  overflow: hidden;
  transition: .3s;
  &:hover {
    color: white;
  }
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: black;
    z-index: -1;
    transition: .5s;
  }
  &:hover::before {
    width: 100%;
  }
`

const Right = styled.div`
  flex: 3;
  position: relative;
  align-items: center;
  @media only screen and (max-width: 1400px) {
    flex:1;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Img = styled.img`
  width: 700px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
  @media only screen and (max-width: 1400px) {
    width: 400px;
    height: 400px;
  }
  @media only screen and (max-width: 1023px) {
    width: 320px;
    height: 320px;
  }
`

const Home = () => {
  return (
    <Section id='home'>
      <Container>
        <Left>
          <Title>FullStack Developer</Title>
          <Body>Hola mi nombre es<strong> Marco De la Cruz Prado</strong>. Me apasiona el desarrollo aplicaciones web y moviles. Resido en Lima, Perú.</Body>
          <BarButton >
            <Button href='docs/CV_Marco_Prado.pdf' target='_blank'>Descargar CV</Button>
            <Button href='#contact'>Contacteme</Button>
          </BarButton>
          <BarIcon>
            <Icon href="https://www.linkedin.com/in/marco-de-la-cruz-prado/" target='_blank'><i className='bx bxl-linkedin'></i></Icon>
            <Icon href="https://github.com/MarcoPradoDev" target='_blank'><i className='bx bxl-github'></i></Icon>
          </BarIcon>
        </Left>
        <Right>
          <Canvas className='canvas-sphere'>
            <OrbitControls enableZoom={false} enableRotate={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.5} >
              <MeshDistortMaterial color="#A5A5A5" attach="material" distort={0.5} speed={2} />
            </Sphere>
          </Canvas>
          <Img src="../../avatar.png" />
        </Right>
      </Container>
    </Section>
  )
}

export default Home