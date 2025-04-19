import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Scss/_app.scss';

import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import AboutMe from './Pages/AboutMe';
import Creations from './Components/Creations';

import Contact from './Components/Contact';
import Art from './Pages/Art';
import Footer from './Components/Footer';




function Home() {
    return (
        <>
            <div className="Hero">
                <Hero />
            </div>
            <div className="Contact">
                <Contact />
            </div>
            <div id="aboutMe" className="AboutMe">
                <AboutMe />
            </div>
            <div className="Creations">
                <Creations />
            </div>
        </>
    );
}

function App() {
    return (
        <div className='app'>
            <Router>
                <div className="app-container">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/AboutMe" element={<AboutMe />} /> */}
                        <Route path="/Art" element={<Art />} />
                        <Route path="/Contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;

