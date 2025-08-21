import React from "react";
import HowToGetHere from "./HowToGetThere";

const SocialItem = ({ icon, text }) => (
  <div className="flex gap-3 transition-text duration-500 text-p5 hover:text-p1 items-center">
    <span className={icon}></span>
    <p className="cursor-pointer font-semibold text-md">{text}</p>
  </div>
);

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-16 px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
        <div className="flex w-full max-md:flex-col gap-32 flex-wrap max-lg:items-center">
          <div>
            <img src="images/tomibet_logo.png" width="160" alt="Logo" />
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100094493719012"
              aria-label="odwiedź naszą stronę na Facebooku"
            >
              <SocialItem icon="icon-[mdi--facebook]" text="Facebook" />
            </a>
            <a href="mailto:biurotomibet@gmail.com" aria-label="Wyślij email">
              <SocialItem
                icon="icon-[mdi--alternate-email]"
                text="biurotomibet@gmail.com"
              />
            </a>
            <a href="tel:694 102 278" aria-label="Zadzwoń do nas">
              <SocialItem
                icon="icon-[mdi--card-account-phone]"
                text="694 102 278"
              />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="icon-[mdi--home-map-marker] size-15"></span>
            <div className="flex flex-col justify-center gap-2">
              <p className="text-lg text-p5 font-bold">Jagodnik 21a</p>
              <p className="text-lg text-p5 font-bold">58-125, Jagodnik</p>
            </div>
          </div>

          <div className="text-[12px] font-semibold leading-[18px] tracking-[0.03em] flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">Copyright, Krzysztof Zubrzycki</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
