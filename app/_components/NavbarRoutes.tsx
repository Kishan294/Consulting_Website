"use client";

import { Navlinks } from "@/constants";
import NavbarItems from "./NavbarItems";

const NavbarRoutes = () => {
  return (
    <ul className="flex items-center lg:gap-8 gap-2">
      {Navlinks.map((item, index) => (
        <NavbarItems
          key={index}
          title={item.title}
          path={item.path}
          icon={item.icon}
        />
      ))}
    </ul>
  );
};

export default NavbarRoutes;
