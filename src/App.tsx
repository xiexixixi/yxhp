import React from 'react';
import Header from './components/header/Header';
import './App.css';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Services from './components/Services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App___">
      <ThemeContextProvider>
        <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Skills/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        </>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
