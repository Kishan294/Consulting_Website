import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
const SocialIcons = [
  {
    link: "https://x.com/akshacloud?t=g4wOg1vAuMvCTreXGeDSIg&s=08",
    icon: BsTwitter,
  },
  {
    link: "https://instagram.com/aksha_vlogs?igshid=MzRlODBiNWFlZA==",
    icon: AiFillInstagram,
  },
  {
    link: "https://www.linkedin.com/in/ashishkumarsharma09",
    icon: FaLinkedinIn,
  },
];

const Social = () => {
  return (
    <div className="flex items-center gap-4">
      {SocialIcons.map((item, index) => (
        <Link
          className="bg-[var(--secondary-color)] hover:bg-[var(--main-color)] p-2 rounded-full text-[var(--main-color)] hover:text-white transition-all ease-in-out duration-300"
          key={index}
          href={item.link}
          target="_blank"
        >
          <item.icon className=" w-4 h-4" />
        </Link>
      ))}
    </div>
  );
};

export default Social;
