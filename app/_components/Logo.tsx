import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image src="/logo.svg" alt="Aksha Cloud" width={20} height={20} />
      <p className="font-semibold text-lg">
        Aksha <span className="text-[var(--main-color)]">Cloud</span>
      </p>
    </Link>
  );
};

export default Logo;
