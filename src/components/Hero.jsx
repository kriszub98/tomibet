import React from "react";
import { Button, Element } from "react-scroll";

const Hero = () => {
  return (
    <section className="bg-p2">
      <Element name="hero">
        <div className="container flex flex-wrap mx-auto pt-32 max-xl:px-10 max-lg:px-6 max-sm:px-4 pb-32">
          <div className="flex flex-col items-start justify-center max-w-3xl px-2 py-16">
            <h1 className="text-p4 text-5xl font-medium mb-6 max-lg:text-4xl">
              TOMIBET - Ogrodzenia i wyroby betonowe
            </h1>
            <p className="text-2xl leading-8 mb-12 sm:mb-8 max-lg:text-xl">
              Zajmujemy się wytwarzaniem ogrodzeń i wyrobów z betonu. Nasze
              produkty są wytwarzane z certyfikowanego betonu, dodatkowo
              ogrodzenia są wzmacniane zbrojeniem. Zaletą ogrodzeń betonowych
              jest to, iż są trwałe i solidne oraz odporne na działanie
              czynników atmosferycznych. Ich dodatkowym atutem jest wyciszanie
              odgłosów z zewnątrz.
            </p>
            <Button
              to="ourOffer"
              smooth
              className="bg-blue-900 hover:bg-blue-500 text-white font-semibold p-4 rounded-lg cursor-pointer max-md:mx-auto transition-bg duration-200"
            >
              Sprawdź naszą ofertę
            </Button>
          </div>

          <div className="flex flex-1 p-2 items-center justify-center min-w-64 max-lg:py-16">
            <img src="images/OfferItem.jpg" alt="hero" />
          </div>
        </div>

        <svg
          className="block w-full h-32 fill-s1 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M0 0v47.6l5-2c1 0 11 3 12 0 2 3 6-3 6 0 0-4 12 3 12 0 0 3 15-1 17 0 2-2 5-1 6 0 0-2 6 2 6 0s2 4 4 0c5 2 12-3 16 0 2-2 4-3 4 0 0 2 6-1 6 0 1 4 15-2 17 0h7c0 1 3-3 6 0h17c2 2 3 1 6 0h6c1-2 21-1 24 0 2 1 4 2 6 0 0-1 22 4 24 0 0 0 5-3 5 0 2-2 10 2 12 0 2 2 6 1 6 0 2 3 4-2 6 0 1 0 25-2 25 1l10-1c3 1 6 6 7 0 1 5 4-2 6 0 2-2 4 3 5 0h12c6 1 36 2 36 0 0 2 3 0 6 0h6c5-2 7 4 11 0 2 0 15 2 17 0h13c3-4 5 1 7 0h29c0-3 6 0 6 0h5c0 2 16-1 18 0 1 4 9-1 12 0s6-2 6 0c8-2 3 4 13 0h10c3 4 19 1 19 0 2 0 21 1 23-1 1 4 3-1 6 1 1 2 11-1 12-1 3 3 9 0 12 1 3-4 6 1 6 0h6c0-3 5 1 6-1 0 3 2 1 4 1 3 4 10-1 13 0 3-2 6-1 6 0 2 2 2 0 6 0 1-2 6 2 6 0 2 0 4 5 6 0h18c2 3 4 1 6 0l6-1c3 2 12 3 17 1 14 3 18 1 24 0 2-1 3 3 5 0 6 2 10-1 16 0 1 3 6 0 9 0 0-2 3 2 5 0 6-6 8 7 13 0 0-2 5 2 5 0 3 3 10 0 10 0 1 2 5-2 8 0 3-1 8 3 12 0h6c2 1 10 4 12 0h6c1-1 5 2 6 0 1 2 4-1 6 0 0-2 5 3 6-1 2 1 6 5 5 1 1 1 3-2 6 0 2-1 5 3 6 0 0 1 6 2 6 0 2 3 4-4 6 0 0-2 3 2 6 0 3 0 6 3 6 0 5 3 8-1 13 0 3-4 6 1 6 0h5c0-1 9 2 12 0 1-1 9 3 11 0h6c2 2 4 4 7 0 3 2 5-4 5-1 10 4 15-2 18 2 0-1 6 2 6-2 0 0 6-2 6 1 1 6 12 2 12 0 1 3 4-3 7 2 2-2 5 2 5 0 1 5 4-5 6 0 2-1 4 2 6 0 1 3 1 0 5 0V0H0Z"></path>
        </svg>
      </Element>
    </section>
  );
};

export default Hero;
