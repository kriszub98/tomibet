import { Element, Button } from "react-scroll";

export default function BentoGallery({
  images = [
    { src: "images/OfferItem.jpg", alt: "Gallery Image 1" },
    { src: "images/OfferItem.jpg", alt: "Gallery Image 2" },
    { src: "images/OfferItem.jpg", alt: "Gallery Image 3" },
    { src: "images/OfferItem.jpg", alt: "Gallery Image 4" },
    { src: "images/OfferItem.jpg", alt: "Gallery Image 5" },
  ],
  title = "TOMIBET - Ogrodzenia i wyroby betonowe",
  paragraph = "Zajmujemy się wytwarzaniem ogrodzeń i wyrobów z betonu. Nasze produkty są wytwarzane z certyfikowanego betonu, dodatkowo ogrodzenia są wzmacniane zbrojeniem. Zaletą ogrodzeń betonowych jest to, iż są trwałe i solidne oraz odporne na działanie czynników atmosferycznych. Ich dodatkowym atutem jest wyciszanie odgłosów z zewnątrz.",
}) {
  const [i1, i2, i3, i4, i5] = [0, 1, 2, 3, 4].map(
    (idx) => images[idx] ?? { src: "", alt: "" }
  );

  return (
    <section className="bg-p2">
      <Element name="hero">
        <div className="container mx-auto pt-32 max-xl:px-10 max-lg:px-6 max-sm:px-4">
          {/* GRID:
             - base: 1 kolumna
             - md: 6 kolumn (2 zdjęcia)
             - lg: 12 kolumn (4 zdjęcia)
             - xl: 4 kolumny 5 zdjęć
          */}
          <div
            className="
              grid items-start gap-5
              grid-cols-1
              md:grid-cols-6
              lg:grid-cols-12
              xl:grid-cols-[1fr_1fr_1.2fr_0.8fr] xl:grid-rows-[200px_55px_185px_145px_auto]
            "
          >
            {/* TEKST */}
            <div
              className="
                order-1 col-span-1
                md:col-span-6
                lg:col-span-8
                xl:order-none xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-4
                flex flex-col items-start justify-center px-2 py-16 max-w-3xl

              "
            >
              <h1 className="text-p4 font-medium mb-6 text-[clamp(28px,4vw,44px)]">
                {title}
              </h1>
              <p className="text-[clamp(16px,2.2vw,20px)] leading-8 mb-10 lg:mb-6">
                {paragraph}
              </p>
              <Button
                to="ourOffer"
                smooth
                className="bg-blue-950 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-lg cursor-pointer transition-[background-color] duration-200"
              >
                Sprawdź naszą ofertę
              </Button>
            </div>

            {/* i1 */}
            <figure
              className="
                order-2 col-span-1 aspect-[4/3] overflow-hidden rounded-lg w-full h-full
                md:col-span-3
                lg:col-start-1 lg:col-end-5
                xl:order-none xl:aspect-auto xl:rounded-none xl:rounded-bl-lg
                xl:col-start-1 xl:col-end-2 xl:row-start-4 xl:row-end-6
                bg-gray-500
              "
            >
              <img
                src={i1.src || "images/OfferItem.jpg"}
                alt={i1.alt || ""}
                className="w-full h-full object-cover"
              />
            </figure>

            {/* i2 (pokazuj od md) */}
            <figure
              className="
                hidden md:block w-full h-full
                order-3 md:col-span-3 aspect-[4/3] overflow-hidden rounded-lg
                lg:col-start-5 lg:col-end-9
                xl:order-none xl:aspect-auto xl:rounded-none
                xl:col-start-2 xl:col-end-3 xl:row-start-4 xl:row-end-6
                bg-gray-500
              "
            >
              <img
                src={i2.src || "images/OfferItem.jpg"}
                alt={i2.alt || ""}
                className="w-full h-full object-cover"
              />
            </figure>

            {/* i4 (pokazuj od lg jako „duży” prawy) */}
            <figure
              className="
                hidden lg:block
                order-4 aspect-[16/13] overflow-hidden rounded-lg
                lg:col-start-9 lg:col-end-13 lg:row-start-1
                xl:order-none xl:aspect-auto xl:rounded-none xl:rounded-br-lg
                xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-6
                bg-gray-500 w-full h-full
              "
            >
              <img
                src={i4.src || "images/OfferItem.jpg"}
                alt={i4.alt || ""}
                className="w-full h-full object-cover"
              />
            </figure>

            {/* i3 (tylko XL – mały kafel u góry) */}
            <figure
              className="
                hidden
                xl:block xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-2
                lg:block lg:col-start-9 lg:col-end-13 lg:row-start-2
                bg-gray-500 overflow-hidden w-full h-full rounded-tl-lg
              "
            >
              <img
                src={i3.src || "images/OfferItem.jpg"}
                alt={i3.alt || ""}
                className="w-full h-full object-cover"
              />
            </figure>

            {/* i5 (tylko XL – skrajny prawy) */}
            <figure
              className="
                hidden
                xl:block xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-4
                bg-gray-500 overflow-hidden w-full h-full rounded-r-lg
              "
            >
              <img
                src={i5.src || "images/OfferItem.jpg"}
                alt={i5.alt || ""}
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>

        {/* FALA */}
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
}
