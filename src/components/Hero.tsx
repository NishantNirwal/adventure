import React from 'react'
import './styles/Hero.css'
import LogoImg from '../assets/logo-white.png'
import {NavLink } from 'react-router-dom'

function Hero() {
  return (
    <section className="heroimg">
    <div className="hero">
        <header className="header-class">
            <img src={LogoImg} alt="logo" height="40" />
            <nav className="nav-class">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/services'}>Services</NavLink>
                <NavLink to={'/projects'}>Projects</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <button className="main-btn">TAKE ACTION</button>
            </nav>
        </header>
        <div className="hero-div">
            <h3>Explore the Colourful World</h3>
            <span className="color-line"></span>
            <h1>A Wonderful Gift</h1>
            <button className="main-btn" style={{marginTop:"50px"}}>LEARN MORE</button>
        </div>
    </div>
</section>
  )
}

export default Hero