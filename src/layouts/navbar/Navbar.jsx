import React, { useEffect, useState } from "react";
import Button from "../../auth/Button";
import NavMenu from "./NavMenu";
import { RiMenu3Fill } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";
import { useLocation, useNavigate } from "react-router-dom";

const navMenu = [
  { id: 1, path: "/", text: "Home" },
  { id: 2, path: "/about", text: "About Us" },
  { id: 3, path: "/products", text: "Products" },
  { id: 4, path: "/", text: "contact" },
];

const NavBar = ({ isScroll }) => {
  const [isClicked, setIsClicked] = useState(navMenu[0]);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate(isClicked.path);
  }, []);

  useEffect(() => {
    // Scroll to the top of the page on each navigation
    window.scrollTo(0, 0);
  }, [location.pathname]); // Triggered every time the path changes

  const handleSignUp = () => {
    setIsSetSignUp(!isSignUp);
    alert("working");
  };

  const handleMenu = (menu) => {
    setIsClicked(menu);
    // route to the clicked page
    navigate(menu.path);
    setIsOpen(false);
  };

  const hanldeMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`flex z-30 items-center justify-between lg:px-24 md:px-16 px-4 py-5 fixed w-[100%] top-0 transition-all ease-in ${
        isScroll ? `bg-middleGreen` : ""
      }`}
    >
      <h1 className="font-bold text-lightGreen lg:text-2xl md:text- text-xl">
        alesto
      </h1>
      <ul className="md:flex text-lightGreen hidden items-center gap-12 md:gap-8 font-semibold md:font-normal lg:font-semibold">
        {navMenu.map((item) => (
          <NavMenu
            menu={item}
            key={item.id}
            handleMenu={handleMenu}
            clicked={isClicked}
          />
        ))}
      </ul>

      {/* Autn button */}

      {/* mobile-menu */}
      <div
        className="block md:hidden text-white text-2xl"
        onClick={hanldeMobileMenu}
      >
        {isOpen ? <LiaTimesSolid /> : <RiMenu3Fill />}
      </div>

      {/* mobile-menu */}
      {isOpen && (
        <section className="bg-lightGreen  px-4 h-[100vh] w-[70%] py-4 flex md:flex flex-col gap-8 lg:hidden fixed left-0 z-20 top-0">
          <div className="lg:text-2xl text-lg font-extrabold md:font-bold flex items-center relative gap-1">
            <h1 className="font-bold text-xl text-deepGreen">alesto</h1>
          </div>

          <ul className="flex flex-col gap-6 text-deepGreen  font-semibold">
            {navMenu.map((item) => (
              <NavMenu
                menu={item}
                key={item.id}
                handleMenu={handleMenu}
                clicked={isClicked}
              />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default NavBar;
