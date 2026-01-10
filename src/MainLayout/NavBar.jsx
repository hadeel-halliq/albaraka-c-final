import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";

export default function NavBar({ isOpen, onClick }) {
  const NavContent = [
    { icon: <AiOutlineHome />, text: "الصفحة الرئيسية", to: "/" },
    { icon: <CiLocationOn />, text: "موقع الشركة", to: "/location" },
    { icon: <BsTelephone />, text: "تواصل معنا", to: "/contact" },
    { icon: <AiOutlineHome />, text: "منتجاتنا", to: "/products" },
  ];

  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setVisibleItems(0);
      NavContent.forEach((_, i) => {
        setTimeout(() => {
          setVisibleItems(prev => prev + 1);
        }, i * 300); 
      });
    } else {
      setVisibleItems(0);
    }
  }, [isOpen]);

  return (
    <>
     
      <div className="md:hidden fixed top-5 right-5 z-50 flex flex-col items-end">
        {NavContent.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            onClick={onClick}
            className="block mb-4"
          >
            <div
              className={`w-60 flex items-center justify-end gap-2 p-4 bg-primary text-white rounded-xl shadow-md transition-all duration-500 transform ${
                visibleItems > index
                  ? "translate-x-0 rotate-0 opacity-100"
                  : "translate-x-full rotate-3 opacity-0"
              }`}
            >
              <p className="text-lg font-bold">{item.text}</p>
              {item.icon}
            </div>
          </NavLink>
        ))}
      </div>

    
      <nav className="hidden md:flex flex-row-reverse gap-5">
        {NavContent.map((item, index) => (
          <NavLink key={index} to={item.to}>
            <div className="flex items-center gap-1.5 text-lg font-bold">
              <p>{item.text}</p>
              {item.icon}
            </div>
          </NavLink>
        ))}
      </nav>
    </>
  );
}

