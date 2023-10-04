import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-[100vw] relative text-center bg-black overflow-hidden">
      <div className="w-full relative h-[90vh] opacity-40 ">
        <Image src={"/hero.jpg"} fill className="object-cover" alt="hero " />
      </div>
      <div className="absolute text-white top-0 flex-col justify-center gap-4 h-full flex items-center w-full">
        <h1 className="text-5xl leading-[1.2] text-center font-medium ">
          End-to-End Salesforce Consultation <br /> that Helps Your Business
          Grow Faster
        </h1>
        <p className="w-[40vw]  mx-auto uppercase text-sm">
          Elevate your team and business goals with a Salesforce consulting
          partner aligned to your evolving needs.
        </p>

        <button
          type="button"
          className="border rounded-md bg-transparent text-white px-4 py-2 "
        >
          Talk to Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
