import React from 'react';
import Preloader from './Preloader';
import Header from './Header';
import Home from './Home';
import About from './About';
import AboutHow from './AboutHow';
import Features from './Feature';
import Pricing from './Pricing';
import Download from './Download';
import Footer from './Footer';

const Top = () => {
    return (
        <body id="top">
        <Preloader />
        <Header />
        <Home />
        <About />
        <AboutHow />
        <Features />
        <Pricing />
        <Download />
        <Footer />
        </body>
    )
}
export default Top;