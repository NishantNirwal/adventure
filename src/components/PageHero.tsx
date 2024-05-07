import React from 'react'
import './styles/PageHero.css'
import LogoImg from '../assets/logo-white.png'
import {NavLink } from 'react-router-dom'

function PageHero({title}:any) {
  return (
    <section className="heroimg">
    <div className="pagehero">
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
            <h1>{title}</h1>
        </div>
    </div>
</section>
  )
}

export default PageHero