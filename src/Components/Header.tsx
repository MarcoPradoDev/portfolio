import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Background = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* width: 1400px; */
  padding: 20px 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

const Container = styled.div`
  display:flex; 
  flex-direction: row; 
  justify-content:space-between; 
  width: 1400px;
  @media only screen and (max-width: 1400px) {
    padding: 0 5%;
  }
`

const Logo = styled.a`
  position: relative;
  font-size: 25px;
  color: black;
  text-decoration: none;
  font-weight: 600;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #595959;
    animation: showRight 1s ease forwards;
    animation-delay: .4s;
  }
`

const Navbar = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Option = styled.a`
  font-size: 18px;
  color: #A5A5A5;
  text-decoration: none;
  font-weight: 500;
  margin-left: 35px;
  transition: .3s;
  &:hover, &.active{
    color: black;
  }
`


// MENU RESPONSIVE

const Hamburger = styled.div`
  cursor: pointer;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`

const Line = styled.span`
  width: 40px;
  height: 3px;
  background-color: black;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  &.isActive:nth-child(2) {
    opacity: 0;
  }
  &.isActive:nth-child(1){
    -webkit-transform: translateY(11px) rotate(45deg);
    -ms-transform: translateY(11px) rotate(45deg);
    -o-transform: translateY(11px) rotate(45deg);
    transform: translateY(11px) rotate(45deg);
  }
  &.isActive:nth-child(3){
    -webkit-transform: translateY(-11px) rotate(-45deg);
    -ms-transform: translateY(-11px) rotate(-45deg);
    -o-transform: translateY(-11px) rotate(-45deg);
    transform: translateY(-11px) rotate(-45deg);
  }
`

const ContainerMenu = styled.div`
  background-color: white; 
  position: absolute; 
  height: 100vh; 
  width: 100vw; 
  z-index: 2;
  top: -100vh;
  justify-content: center;
  display: none;
  align-items: center;
  &.isActive{
    display: flex;
    animation: showBottom 1s ease forwards;
  }
  &.hidden {
    display: flex;
    animation: hiddenTop 1s ease forwards;
  }
  @keyframes showBottom {
    to {
      top: 0;
    }
  }
  @keyframes hiddenTop {
    from {
      top: 0
    }
    to {
      top: -100vh;
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const ListItems = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Item = styled.li`
  &>a{
    font-size: 25px;
    font-weight: 500;
    color: #A5A5A5;
    text-decoration: none;
  }
  &>a.active{
    color: black
  }
`

const Header = () => {

  const [change, setChange] = useState<any>(null)
  const [section, setSection] = useState('#home')

  useEffect(() => {
    const hash = window.location.hash;
    console.log(hash)
    setSection(hash)
  }, [change]);

  const changeView = (view: string) => {
    setSection(view)
    setChange(false)
  }

  return (
    <>
      <Background>
        <Container>
          <Logo>Marco.dev</Logo>
          <Hamburger onClick={() => setChange(change == null ? true : !change)}>
            <Line className={change ? 'isActive' : ''}></Line>
            <Line className={change ? 'isActive' : ''}></Line>
            <Line className={change ? 'isActive' : ''}></Line>
          </Hamburger>
          <Navbar>
            <Option onClick={() => changeView('#home')} href="#home" className={section == '#home' || section == '#' || section == '' ? "active" : ''}>Inicio</Option>
            <Option onClick={() => changeView('#about')} className={section == '#about' ? "active" : ''} href="#about">Sobre mi</Option>
            <Option onClick={() => changeView('#projects')} className={section == '#projects' ? "active" : ''} href="#projects">Proyectos</Option>
            <Option onClick={() => changeView('#contact')} className={section == '#contact' ? "active" : ''} href="#contact">Contacto</Option>
          </Navbar>
        </Container>
      </Background>
      <ContainerMenu className={change == null ? '' : change ? 'isActive' : 'hidden'}>
        <ListItems>
          <Item><a onClick={() => changeView('#home')} className={section == '#home' || section == '#' || section == '' ? "active" : ''} href="#home">Inicio</a></Item>
          <Item><a onClick={() => changeView('#about')} className={section == '#about' ? "active" : ''} href="#about">Sobre mi</a></Item>
          <Item><a onClick={() => changeView('#projects')} className={section == '#projects' ? "active" : ''} href="#projects">Proyectos</a></Item>
          <Item><a onClick={() => changeView('#contact')} className={section == '#contact' ? "active" : ''} href="#contact">Contacto</a></Item>
        </ListItems>
      </ContainerMenu>
    </>
  )
}

export default Header