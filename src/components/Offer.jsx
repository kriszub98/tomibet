import React, { useState } from "react";
import clsx from "clsx";
import { Element, Link as LinkScroll } from "react-scroll";
import { sampleOffer } from "../static/sampleOffer";

const Card = ({ name, src, text, className, onClick }) => {
  return (
    <LinkScroll
      className={`max-w-sm rounded-lg overflow-hidden shadow-lg ${className}`}
      onClick={onClick}
      to="category"
      smooth
      offset={-150}
    >
      <img className="w-full" loading="lazy" src={src} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </LinkScroll>
  );
};

const Offer = () => {
  const [activeCategory, setActiveCategory] = useState(sampleOffer[0].name);

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
            <Card
              className={clsx(
                "hover:bg-indigo-700 transition-all duration-200 cursor-pointer",
                item.name === activeCategory ? "bg-indigo-800" : "bg-indigo-950"
              )}
              onClick={() => setActiveCategory(item.name)}
              key={item.id}
              {...item}
            />
          ))}
        </div>

        {/* Active Markers */}
        <div className="pt-16 max-lg:hidden max-lg:pointer-events-none">
          <ul className="flex gap-5">
            {sampleOffer.map((category) => {
              return (
                <li
                  key={category.id}
                  onClick={() => setActiveCategory(category.name)}
                  className={clsx(
                    "border-1 p-2 rounded-xl cursor-pointer transition-all duration-200",
                    category.name === activeCategory ? "text-p2" : ""
                  )}
                >
                  {category.name}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Categories */}
        {sampleOffer
          .filter((category) => category.name === activeCategory)
          .map((category) => {
            return (
              <Element name="category" className="pt-8" key={category.id}>
                <h2 className="text-p4 text-3xl font-medium mb-8">
                  {category.name}
                </h2>
                <div className="grid justify-center gap-8 sm:grid-cols-3 lg:grid-cols-4">
                  {category.offer.map((item) => (
                    <Card key={item.id} className="bg-indigo-950" {...item} />
                  ))}
                </div>
              </Element>
            );
          })}
      </Element>
    </section>
  );
};

export default Offer;
