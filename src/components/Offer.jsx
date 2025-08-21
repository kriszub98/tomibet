import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import { sampleOffer } from "../static/sampleOffer";

const Card = ({ name, src, text, className }) => {
  return (
    <div
      className={`max-w-sm rounded-lg overflow-hidden shadow-lg bg-indigo-950 ${className}`}
    >
      <img className="w-full" loading="lazy" src={src} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  );
};

const Offer = () => {
  return (
    <section>
      <Element
        name="ourOffer"
        className="container mx-auto pt-32 max-xl:px-10 max-lg:px-6 max-sm:px-4"
      >
        <h1 className="text-p4 text-5xl font-medium mb-4">Nasza oferta</h1>
        <p className="text-xl leading-8 mb-12 sm:mb-8">
          Produkujemy płyty betonowe o wzorach: piaskowiec, cegła, kamień,
          imitacja drewna. Na indywidualne zamówienie wytworzymy płyty z innej
          klasy betonu. Wszystkie nasze płytki są produkowane z wysokiej klasy
          certyfikowanego betonu, który nadaje im unikalny wygląd i zapewnia
          dużą wytrzymałość na nacisk i warunki atmosferyczne.
        </p>
        <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sampleOffer.map((item) => (
            <LinkScroll key={item.id} to={item.name} smooth>
              <Card
                className={
                  "hover:bg-indigo-900 transition-all duration-200 cursor-pointer"
                }
                {...item}
              />
            </LinkScroll>
          ))}
        </div>
      </Element>

      {/* Categories */}
      {sampleOffer.map((category) => {
        return (
          <Element
            className="container mx-auto pt-16 pb-8 max-xl:px-10 max-lg:px-6 max-sm:px-4"
            name={category.name}
            key={category.id}
          >
            <h2 className="text-p4 text-3xl font-medium mb-8">
              {category.name}
            </h2>
            <div className="grid justify-center gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {category.offer.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </div>
          </Element>
        );
      })}
    </section>
  );
};

export default Offer;
