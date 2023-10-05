"use client";

import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavbarItemsProps {
  title: string;
  path: string;
  icon: LucideIcon;
}

const NavbarItems = ({ icon: Icon, path, title }: NavbarItemsProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <li className="list-none">
      <Link
        href={path}
        className={cn(
          "flex items-center lg:gap-2 gap-1 text-[#bdbdcb] hover:text-white hover:bg-[var(--main-color)]  transition-all lg:font-semibold duration-300 rounded-full px-2 py-1 ease-in-out lg:text-base  text-xs",
          isActive && "text-white bg-[var(--main-color)] "
        )}
      >
        {Icon && <Icon className="lg:w-4 lg:h-4 w-3 h-3" />}
        {title}
      </Link>
    </li>
  );
};

export default NavbarItems;
