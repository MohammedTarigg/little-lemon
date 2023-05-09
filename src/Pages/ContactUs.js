import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactUsMain from '../components/contact-us/ContactUsMain';
import ThemeComponent from '../components/ThemeComponent';

function ContactUs() {
    return (
        <ThemeComponent>
            <Header />
            <ContactUsMain />
            <Footer />
        </ThemeComponent>
    )
}

export default ContactUs
