import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Style.css';

import Home from './Home';
import About from './About';
import WhyChooseUs from "./WhyChooseYummy";
import Div from "./Div";
import OurMenu from "./OurMenu";
import Testimonials from "./Testimonials";
import BookATable from "./BookATable";
import Contact from "./Contact";
import Chefs from "./Chefs";
import Footer from "./Footer";
import Event from "./Event";
import Gallery from "./Gallery";


export default function HomePage() {
    useEffect(() => {
        AOS.init({
            // duration: 2500,
            once: true,
        });
    }, []);

    return (
        <>
            {/* <div data-aos="fade-up"> */}
            <Home />                                                {/* AOS */}

            <About />

            <WhyChooseUs />

            <Div />

            <OurMenu />

            <Testimonials />

            <Event />

            <Chefs />

            <BookATable />

            <Gallery />

            <Contact />

            <Footer />
            {/* </div> */}
        </>
    )
}