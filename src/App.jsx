import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offer from "./components/Offer";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Offer />
    </main>
  );
};

export default App;
