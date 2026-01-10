import NavBar from "../MainLayout/NavBar";
import MainIcon from "../images/icon-gray.png";

import { useEffect, useState } from "react";

import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  
  return (
    <header className={`w-full fixed z-100 bg-backGroundColor pt-3 pb-3 transition-all duration-300 ease-in-out ${isScrolled ? "shadow-md translate-y-0 rounded-b-2xl" : "shadow-none -translate-y-1"}`}>
    
        <div className="py-1 px-3 flex flex-row-reverse md:flex-row justify-between items-center border border-primary rounded-2xl ">
          <Link to="/">
            <img
            src={MainIcon}
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] cursor-pointer"
          />
          </Link>
          <button
            onClick={handleClick}
            className="block text-2xl cursor-pointer md:hidden"
          >
            {isOpen ? <IoCloseOutline /> : <HiOutlineBars3 />}
          </button>
          <NavBar isOpen={isOpen} onClick={handleClick} />
        </div>
     
    </header>
  );
}
