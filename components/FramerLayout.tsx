"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import "@/app/globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const FramerLayout = ({ children }: { children: React.ReactNode }) => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    document.addEventListener("mousemove", function (e) {
      const x = Number(e.clientX);
      const y = Number(e.clientY);
      setCoordinates({ x, y });
    });

    return () => {
      document.removeEventListener("mousemove", function (e) {
        const x = e.clientX;
        const y = e.clientY;
      });
    };
  }, [coordinates]);

  console.log(coordinates);
  return (
    <>
      <motion.div className="relative">
        <div
          className="cursor hidden lg:block"
          style={{
            top: coordinates.y,
            left: coordinates.x,
          }}
        />
        <div
          className="cursor2 hidden lg:block"
          style={{
            top: coordinates.y,
            left: coordinates.x + 15,
          }}
        />

        <Navbar />
        {children}
        <Footer />
      </motion.div>
      <Toaster />
    </>
  );
};

export default FramerLayout;
