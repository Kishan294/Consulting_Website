import { LucideIcon } from "lucide-react";

const Card = ({ content, Icon }: { content: string; Icon: LucideIcon }) => {
  return (
    <div className=" hover:shadow-none  transition-all ease-in-out duration-300 shadow-xl  shadow-[var(--secondary-color)] rounded-lg p-4 text-center border-[3px] border-white hover:bg-[var(--main-color)]  text-[var(--heading-color)] hover:text-white space-y-2 flex flex-col items-center ">
      <Icon className="w-6 h-6 " />
      <h1 className="text-xl font-semibold    ">{content}</h1>
    </div>
  );
};

export default Card;
