import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Project from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/projects" element={<Project/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App