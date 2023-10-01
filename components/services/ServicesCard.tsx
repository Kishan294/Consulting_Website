import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

interface ServicesCardProps {
  title: string;
  content: string;
  icon: LucideIcon;
}

const ServicesCard = ({ title, content, icon: Icon }: ServicesCardProps) => {
  return (
    <div
      className="
     w-fit  flex flex-col gap-3 items-start p-5 rounded-xl border justify-center shadow-xl bg-white shadow-[var(--secondary-color)]"
    >
      <div className="bg-[#e6edf5] w-12 flex items-center justify-center h-12 rounded-full  ">
        <Icon className="text-[var(--main-color)]" />
      </div>
      <div className="text-start">
        <h1 className="text-base text-[var(--heading-color)] font-semibold">
          {title}
        </h1>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
      <Button variant={"custom"}>Explore</Button>
    </div>
  );
};

export default ServicesCard;
