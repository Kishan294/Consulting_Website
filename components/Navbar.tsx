import Logo from "@/app/_components/Logo";
import MobileNavbar from "@/app/_components/MobileNavbar";
import NavbarRoutes from "@/app/_components/NavbarRoutes";
import Social from "@/app/_components/Social";

const Navbar = () => {
  return (
    <nav>
      <div className="fixed bg-white border rounded-full z-10 top-5 left-0 right-0 w-[80vw] mx-auto backdrop-blur-lg hidden md:flex items-center py-2 justify-between px-5 ">
        <Logo />
        <NavbarRoutes />
        <Social />
      </div>
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
