import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Scss/_app.scss';

import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Footer from './Components/Footer';

import AboutMe from './Pages/AboutMe';


function Home() {
    return (
        <>
            <div className="Hero">
                <Hero />
            </div>
            <div className="Contact">
                <Contact />
            </div>
        </>
    );
}

function App() {
    return (
        <div>
            <Router>
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/AboutMe" element={<AboutMe />} />
                        <Route path="/Contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;

