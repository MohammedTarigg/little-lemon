import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuMain from "../components/menu/MenuMain";
import ThemeComponent from "../components/ThemeComponent";

function MenuPage() {

    return <ThemeComponent>
        <Header />
        <MenuMain />
        <Footer />
    </ThemeComponent>
}

export default MenuPage;