import Image from "next/image";
import Card from "./Card";
import { ChooseUs } from "@/constants";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="w-full lg:px-40 px-5 bg-white flex gap-10 flex-col lg:flex-row justify-between py-10">
        <div className="lg:w-[25vw] flex flex-col gap-5">
          <div className="space-y-4">
            <h1 className="lg:text-5xl text-2xl   text-[var(--heading-color)] font-bold">
              Why Choose Aksha Cloud:
            </h1>
            <p className="text-gray-800 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              dolorum!
            </p>
          </div>
          <div className="relative w-full lg:h-[40vh] h-[25vh] overflow-hidden shadow-lg border-2 p-5 border-white  rounded-xl">
            <Image
              src={
                "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              }
              fill
              alt="Why choose us"
              className="rounded-lg hover:scale-110 transition-all duration-500 ease-in-out object-cover"
            />
          </div>
        </div>
        <div className="lg:w-[40vw] w-full lg:flex  lg:gap-4 space-y-4 lg:p-5 h-full  items-center">
          <Card title={ChooseUs[0].title} content={ChooseUs[0].content} />
          <div className="flex gap-4 flex-col">
            <Card title={ChooseUs[1].title} content={ChooseUs[1].content} />
            <Card title={ChooseUs[2].title} content={ChooseUs[2].content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
