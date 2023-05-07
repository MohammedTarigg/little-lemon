import React,{ useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuMain from "../components/menu/MenuMain";

function MenuPage() {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return <>
        <Header />
        <MenuMain />
        <Footer />
    </>
}

export default MenuPage;