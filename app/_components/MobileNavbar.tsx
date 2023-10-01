"use client";

import { HiMenuAlt1 } from "react-icons/hi";
import Logo from "./Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Navlinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="md:hidden flex items-center justify-between p-2">
      <Logo />
      <Sheet>
        <SheetTrigger>
          <HiMenuAlt1 className="w-6 h-6 text-black" />
        </SheetTrigger>
        <SheetContent side={"right"} className="p-0 bg-white">
          <ul className="flex flex-col items-start gap-2 p-6 mt-4">
            {Navlinks.map((item, index) => (
              <li
                key={index}
                className={cn(
                  "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 w-full p-2 rounded-sm hover:bg-slate-300/20",
                  pathname === item.path &&
                    "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
                )}
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
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNavbar;
