import React from "react";
import { sampleOffer } from "../static/sampleOffer";

const Card = ({ name, src, text }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-indigo-950">
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
    <section className="container mx-auto pt-16 px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
      <h1 className="text-p4 text-5xl font-medium mb-4">Nasza oferta</h1>
      <p className="text-xl leading-8 mb-12 sm:mb-8">
        Produkujemy płyty betonowe o wzorach: piaskowiec, cegła, kamień,
        imitacja drewna. Na indywidualne zamówienie wytworzymy płyty z innej
        klasy betonu. Wszystkie nasze płytki są produkowane z wysokiej klasy
        certyfikowanego betonu, który nadaje im unikalny wygląd i zapewnia dużą
        wytrzymałość na nacisk i warunki atmosferyczne.
      </p>
      <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sampleOffer.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>

      {/* Tutaj Powinienem zrobić sekcja */}
      <div className="py-16">
        <h2 className="text-p4 text-3xl font-medium mb-8">
          Ogrodzenia Betonowe
        </h2>
        <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sampleOffer.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
      <div className="py-16">
        <h2 className="text-p4 text-3xl font-medium mb-8">
          Ogrodzenia Betonowe
        </h2>
        <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sampleOffer.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
