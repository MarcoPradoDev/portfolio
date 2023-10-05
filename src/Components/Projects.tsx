import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Project from './Project'
import Slider from 'react-slick';


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1400px) {
    min-height: 750px;
  }
  @media only screen and (max-width: 1023px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 768px) {
    min-height: 140vh;
  }
  @media only screen and (max-height: 667px) {
    height: 800px;
    padding-top: 20px;
  }
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  text-align: left;
`

const SubTitle = styled.h3`
  font-size: 24px;
  color: black;
  font-weight: 700;
  text-align: justify;
  margin-bottom: 50px;
`

const ContainerSlide = styled.div`
  position: relative;
  
`

const ContainerButton = styled.div`
  position: absolute; 
  height: 100%; 
  justify-content: center; 
  display: flex; 
  align-items: center;
  &.right{
    right: -40px;
    top: 0px;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  &.left{
    left: -40px; 
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`

const Projects = () => {

  const slickRef = useRef<any>(null)
  const [index, setIndex] = useState(0)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const nextSlick = () => {
    if (slickRef.current != null) {
      slickRef.current.slickGoTo(index + 1, false)
      setIndex(index + 1)
    }
  }

  const previousSlick = () => {
    if (slickRef.current != null) {
      slickRef.current.slickGoTo(index - 1, false)
      setIndex(index - 1)
    }
  }

  const onSwipe = (direction: string) => {
    console.log(direction)
    if (direction == 'right') previousSlick();
    else nextSlick();
  }

  return (
    <Section id='projects'>
      <Container>
        <Title>PORTAFOLIO</Title>
        <SubTitle>Cada proyecto ha aportado en mi mayor conocimiento 🤓</SubTitle>
        <ContainerSlide>
          <ContainerButton className='left'>
            <button onClick={previousSlick} disabled={index == 0} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
              <i style={{ fontSize: '30px' }} className='bx bxs-left-arrow-circle'></i></button>
          </ContainerButton>
          <Slider onSwipe={onSwipe} afterChange={(currentSlide) => { setIndex(currentSlide) }} ref={slickRef} {...settings}>
            <Project />
            <Project />
          </Slider>
          <ContainerButton className='right'>
            <button onClick={nextSlick} disabled={index == 1} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
              <i style={{ fontSize: '30px' }} className='bx bxs-right-arrow-circle'></i></button>
          </ContainerButton>
        </ContainerSlide>
      </Container>
    </Section>
  )
}

export default Projects