import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar.js'
import Poster from '../../components/Home components/Poster.js'
import Skills from '../../components/Home components/Skills'

const Home = () => {
  return (
    <>
    <Poster />
    <Skills />
    </>
  )
}

export default Home