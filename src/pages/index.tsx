import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Components/Header"
import styled from "styled-components"
import Home from "../Components/Home"
import About from "../Components/About"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: black;
  &::-webkit-scrollbar{
    display: none;
  }
  @media only screen and (max-width: 767px) {
    scroll-snap-type: none;
  }
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
      <Container>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Container>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () =>
  <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
    <title>Marco Prado Dev</title>
  </>
