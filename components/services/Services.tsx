import { OurServices } from "@/constants";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="text-center lg:px-40 px-5 py-20 space-y-4 ">
      <div>
        <h1 className="text-3xl font-semibold">Our Services</h1>
        <p className="text-gray-600 text-lg">
          Grow your business with great technology
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-4 flex flex-col lg:gap-8 gap-4">
        {OurServices.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            content={service.content}
            icon={service.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
