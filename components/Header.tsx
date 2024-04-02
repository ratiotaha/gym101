"use client";

import Nav from "./Nav"; // Import the Nav component
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed left-0 right-0 w-full bg-primary-200 transition-all z-50 max-w-[1920px] top-0`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <img src="/assets/images/logo.png" alt="Logo" width={117} height={55} />
        <MobileNav
          containerStyles={`${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          } xl:hidden text-white flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 top-[124px] text-base uppercase font-medium`}
        />
        <Nav containerStyles="flex gap-4 hidden xl:flex text-white" />
        <div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-white xl:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
