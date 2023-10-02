"use client";

import { HiMenuAlt1 } from "react-icons/hi";
import Logo from "./Logo";

import Link from "next/link";
import { Navlinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { X } from "lucide-react";

const MobileNavbar = () => {
  const pathname = usePathname();
  const [isToggle, setIsToggle] = useState(false);

  return (
    <nav className="md:hidden flex relative  items-center justify-between p-2">
      <Logo />
      {isToggle ? (
        <div className="flex w-fit h-fit absolute py-10 px-5 justify-between top-2 rounded-lg border  z-10 right-2 gap-10 bg-white">
          <ul className="flex flex-col flex-1 items-center  gap-2 ">
            {Navlinks.map((item, index) => (
              <li
                key={index}
                className={cn(
                  "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 w-full p-2 rounded-sm hover:bg-slate-300/20",
                  pathname === item.path &&
                    "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
                )}
                onClick={() => setIsToggle(false)}
              >
                <Link
                  href={item.path}
                  className="flex text-lg font-medium  gap-2 items-center "
                >
                  <item.icon className="w-6 h-6" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          {/* <X className="w-8 h-8 mt-2 text-black" /> */}
        </div>
      ) : (
        <button onClick={() => setIsToggle((prev) => !prev)}>
          <HiMenuAlt1 className="w-6 h-6 text-black" />
        </button>
      )}
    </nav>
  );
};

export default MobileNavbar;
