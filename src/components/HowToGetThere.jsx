import { Button, Element } from "react-scroll";
export default function HowToGetHere(props) {
  const {
    name = "TOMIBET – Ogrodzenia i wyroby betonowe",
    address = "Jagodnik 21a, 58-125 Jagodnik",
    lat = 50.836788,
    lng = 16.529271,
    phone = "694 102 278",
    email = "biurotomibet@gmail.com",
    hours = ["pon-pt 8:00 - 14:00"],
  } = props;

  const gmapsPlaceQuery = encodeURIComponent(`${name} ${address}`);
  const gmapsLink = `https://www.google.com/maps/search/?api=1&query=${gmapsPlaceQuery}`;
  const gmapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${lat},${lng}`
  )}`;
  const appleMaps = `https://maps.apple.com/?daddr=${lat},${lng}`;
  const osmLink = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}`;
  const gmapsEmbed = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <section id="dojazd" className="relative bg-white">
      <svg
        className="block w-full h-32 fill-s1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path d="M0 0v47.6l5-2c1 0 11 3 12 0 2 3 6-3 6 0 0-4 12 3 12 0 0 3 15-1 17 0 2-2 5-1 6 0 0-2 6 2 6 0s2 4 4 0c5 2 12-3 16 0 2-2 4-3 4 0 0 2 6-1 6 0 1 4 15-2 17 0h7c0 1 3-3 6 0h17c2 2 3 1 6 0h6c1-2 21-1 24 0 2 1 4 2 6 0 0-1 22 4 24 0 0 0 5-3 5 0 2-2 10 2 12 0 2 2 6 1 6 0 2 3 4-2 6 0 1 0 25-2 25 1l10-1c3 1 6 6 7 0 1 5 4-2 6 0 2-2 4 3 5 0h12c6 1 36 2 36 0 0 2 3 0 6 0h6c5-2 7 4 11 0 2 0 15 2 17 0h13c3-4 5 1 7 0h29c0-3 6 0 6 0h5c0 2 16-1 18 0 1 4 9-1 12 0s6-2 6 0c8-2 3 4 13 0h10c3 4 19 1 19 0 2 0 21 1 23-1 1 4 3-1 6 1 1 2 11-1 12-1 3 3 9 0 12 1 3-4 6 1 6 0h6c0-3 5 1 6-1 0 3 2 1 4 1 3 4 10-1 13 0 3-2 6-1 6 0 2 2 2 0 6 0 1-2 6 2 6 0 2 0 4 5 6 0h18c2 3 4 1 6 0l6-1c3 2 12 3 17 1 14 3 18 1 24 0 2-1 3 3 5 0 6 2 10-1 16 0 1 3 6 0 9 0 0-2 3 2 5 0 6-6 8 7 13 0 0-2 5 2 5 0 3 3 10 0 10 0 1 2 5-2 8 0 3-1 8 3 12 0h6c2 1 10 4 12 0h6c1-1 5 2 6 0 1 2 4-1 6 0 0-2 5 3 6-1 2 1 6 5 5 1 1 1 3-2 6 0 2-1 5 3 6 0 0 1 6 2 6 0 2 3 4-4 6 0 0-2 3 2 6 0 3 0 6 3 6 0 5 3 8-1 13 0 3-4 6 1 6 0h5c0-1 9 2 12 0 1-1 9 3 11 0h6c2 2 4 4 7 0 3 2 5-4 5-1 10 4 15-2 18 2 0-1 6 2 6-2 0 0 6-2 6 1 1 6 12 2 12 0 1 3 4-3 7 2 2-2 5 2 5 0 1 5 4-5 6 0 2-1 4 2 6 0 1 3 1 0 5 0V0H0Z"></path>
      </svg>
      <Element name="dojazd" className="container mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-s2 text-3xl font-semibold tracking-tight mb-2">
            Zainteresowany?
          </h2>
          <p className="text-gray-600">Znajdziesz nas tutaj:</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Karta z danymi */}
          <div className="lg:col-span-2 bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <div>
                <h3 className="text-s2 text-xl font-medium">{name}</h3>
                <p className="text-gray-700">{address}</p>
                {phone && (
                  <p className="text-s2 mt-2">
                    Tel.:{" "}
                    <a
                      href={`tel:${phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {phone}
                    </a>
                  </p>
                )}
                {email && (
                  <p className="text-s2 mt-2">
                    Mail:{" "}
                    <a
                      href={`mailto:${email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {email}
                    </a>
                  </p>
                )}
              </div>
            </div>

            {hours.length > 0 && (
              <div className="mt-6">
                <h4 className="text-s2 font-medium mb-2">Godziny otwarcia</h4>
                <ul className="text-gray-700 list-disc pl-5 space-y-1">
                  {hours.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={gmapsDirections}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 font-medium"
              >
                <span className="icon-[ic--baseline-location-on]"></span>
                Nawiguj (Google)
              </a>
              <a
                href={appleMaps}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 font-medium"
              >
                <span className="icon-[ic--baseline-location-on]"></span>
                Nawiguj (Apple)
              </a>
              <a
                href={gmapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white border border-gray-300 hover:border-gray-400 text-gray-800 px-4 py-2 font-medium"
              >
                Otwórz w Google Maps
              </a>
              <a
                href={osmLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white border border-gray-300 hover:border-gray-400 text-gray-800 px-4 py-2 font-medium"
              >
                OpenStreetMap
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <iframe
              title="Mapa dojazdu"
              src={gmapsEmbed}
              loading="lazy"
              className="w-full h-[360px] lg:h-[480px] block"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Element>
    </section>
  );
}
