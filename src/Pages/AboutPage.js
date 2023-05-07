import React,{ useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMain from "../components/about/aboutMain"

function AboutPage() {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Header />
            <AboutMain />
            <Footer />
        </>)
}

export default AboutPage;