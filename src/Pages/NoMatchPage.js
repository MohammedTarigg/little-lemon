import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeComponent from "../components/ThemeComponent";
import NoMatch from "../components/NoMatch";

function NoMatchPage() {
    return <ThemeComponent>
        <Header />
        <NoMatch />
        <Footer />
    </ThemeComponent>;
}

export default NoMatchPage;