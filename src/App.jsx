import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import HowToGetHere from "./components/HowToGetThere";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Offer />
      <HowToGetHere />
      <Footer />
    </main>
  );
};

export default App;
