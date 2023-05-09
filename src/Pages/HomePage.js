import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero"
import Testmonials from "../components/home/Testmonials"
import Specials from "../components/home/Specials"
import Overview from "../components/home/Overview"
import ThemeComponent from "../components/ThemeComponent";

function HomePage() {

  return (
    <ThemeComponent>
      <Header />
      <main>
        <Hero />
        <Specials />
        <Testmonials />
        <Overview />
      </main>
      <Footer />
    </ThemeComponent>
  );
}

export default HomePage;
