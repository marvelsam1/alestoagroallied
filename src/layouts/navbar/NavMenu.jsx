import React from "react";

const NavMenu = ({ menu, handleMenu, clicked }) => {
  return (
    <div
      className={`${
        clicked === menu
          ? "md:text-lightGreen text-deepGreen md:border-b-[1px]  border-l-[3px] pl-1 md:pl-0  border-l-deepGreen md:border-l-0 border-b-lightGreen text-sm md:text-[0.7rem] lg:text-sm"
          : " text-base md:text-[0.7rem] lg:text-sm"
      } cursor-pointer`}
      onClick={() => handleMenu(menu)}
    >
      {menu.text}
    </div>
  );
};

export default NavMenu;
