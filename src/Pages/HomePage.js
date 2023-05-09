import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero"
import Testmonials from "../components/home/Testmonials"
import Specials from "../components/home/Specials"
import Overview from "../components/home/Overview"

function HomePage() {
  // useEffect(() => {
  //   window.scrollTo(0,0)
  // },[])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specials />
        <Testmonials />
        <Overview />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
