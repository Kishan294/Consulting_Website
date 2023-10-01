import Logo from "@/app/_components/Logo";
import MobileNavbar from "@/app/_components/MobileNavbar";
import NavbarRoutes from "@/app/_components/NavbarRoutes";
import Social from "@/app/_components/Social";

const Navbar = () => {
  return (
    <nav>
      <div className=" hidden md:flex items-center py-4 border-b justify-between px-40 ">
        <Logo />
        <NavbarRoutes />
        <Social />
      </div>
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
