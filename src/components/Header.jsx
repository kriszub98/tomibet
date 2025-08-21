import { useState, useEffect } from "react";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const NavLink = ({ title, to = title }) => {
    return (
      <LinkScroll
        onClick={() => setIsOpen(false)}
        to={to}
        offset={-100}
        spy
        smooth
        className="text-[16px] font-bold leading-[24px] text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:text-[32px] max-lg:font-semibold max-lg:leading-[40px]"
        activeClass="!text-p3"
      >
        {title}
      </LinkScroll>
    );
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "pt-2 pb-2 bg-blue-950 backdrop-blur-[8px]"
      )}
    >
      <div className="container mx-auto px-16 max-xl:px-10 max-lg:px-5 max-sm:px-4 flex h-14 items-center">
        {/* Logo for smaller screens */}
        <a className="lg:hidden flex-1 pointer-cursor z-2 text-[16px] pl-4 tracking-wide font-bold leading-[24px] uppercase transition-colors duration-500 cursor-pointer max-lg:my-4 max-lg:text-[32px] max-lg:font-semibold max-lg:leading-[40px]">
          <span className="text-[#f0f0f0] hover:text-">TO</span>
          <span className="text-[#C7C6C6] hover:text-">MI</span>
          <span className="text-[#25BADD] hover:text-">BET</span>
        </a>

        {/* Menu */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:bg-s2 max-lg:opacity-0 duration-100",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:overflow-hidden max-lg:p-6 max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="relative flex flex-1 items-center justify-between max-lg:flex-col gap-5">
                  <LinkScroll
                    onClick={() => setIsOpen(false)}
                    to={"hero"}
                    offset={-100}
                    spy
                    smooth
                    className="text-[16px] tracking-wide font-bold leading-[24px] uppercase transition-colors duration-500 cursor-pointer max-lg:my-4 max-lg:text-[32px] max-lg:font-semibold max-lg:leading-[40px] max-lg:hidden"
                    activeClass="text-p3"
                  >
                    <span className="text-[#f0f0f0] hover:text-">TO</span>
                    <span className="text-[#C7C6C6] hover:text-">MI</span>
                    <span className="text-[#25BADD] hover:text-">BET</span>
                  </LinkScroll>
                  <NavLink title="Strona Główna" to="hero" />
                  <NavLink title="Nasza Oferta" to="ourOffer" />
                  <NavLink title="Kontakt" to="dojazd" />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Burger */}
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={handleClick}
        >
          {isOpen ? (
            <span className="icon-[solar--alt-arrow-left-line-duotone]"></span>
          ) : (
            <span className="icon-[solar--hamburger-menu-broken]"></span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
