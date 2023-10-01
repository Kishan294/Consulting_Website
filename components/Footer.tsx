"use client";

import Link from "next/link";

import Social from "@/app/_components/Social";
import NavbarRoutes from "@/app/_components/NavbarRoutes";
import Logo from "@/app/_components/Logo";

const Footer = () => {
  return (
    <div className="bg-[#f9f9f9] py-4 border-t lg:px-40 px-5 flex flex-col items-center space-y-4">
      <Logo />
      <NavbarRoutes />
      <Social />
      <p className=" lg:text-base text-xs lg:w-[40vw] text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
        reprehenderit, eum iusto quaerat facilis officiis iure autem suscipit
        voluptates libero?
      </p>
      <p className=" border-t w-screen text-xs lg:text-sm text-center pt-4">
        &copy; 2023 All Rights Reserved. Design by Aksha{" "}
        <span className="text-[var(--main-color)]">Cloud.</span>
      </p>
    </div>
  );
};

export default Footer;
