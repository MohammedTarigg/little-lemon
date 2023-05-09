import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMain from "../components/about/aboutMain"
import ThemeComponent from "../components/ThemeComponent";

function AboutPage() {
    return (
        <ThemeComponent>
            <Header />
            <AboutMain />
            <Footer />
        </ThemeComponent>)
}

export default AboutPage;