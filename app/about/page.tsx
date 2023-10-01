import Image from "next/image";
import { CustomCard } from "./_components/Card";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div>
        <div className="w-[100vw] bg-[url('/about.jpg')] bg-cover bg-center opacity-80 h-[80vh] flex items-center justify-center">
          <div className="flex-col flex items-center bg-gray-900/40 w-full h-full justify-center">
            <h1 className="text-gray-100 text-center lg:text-5xl text-3xl">
              Who we are
            </h1>
            <p className="text-gray-100 lg:text-base text-sm text-center">
              A Full-Service Salesforce Consulting with 11+ Years of Experience
            </p>
          </div>
        </div>
        <div className="lg:px-40 px-5 flex  lg:flex-row flex-col-reverse justify-between gap-4 lg:py-10 py-4">
          <div className="lg:w-[30vw] w-full border-2 shadow-xl border-white overflow-hidden rounded-lg  lg:h-[40vh] h-56 relative">
            <Image
              src={
                "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              }
              fill
              alt="about us"
              className="rounded-md shadow-xl hover:scale-125 transition-all duration-500 ease-in-out object-cover"
            />
          </div>
          <div className="lg:w-[45vw] space-y-2">
            <div>
              <h1 className="font-bold text-3xl text-gray-500">ABOUT US</h1>
              <h2 className="font-semibold text-xl text-gray-900">
                Your Salesforce Partner in Excellence
              </h2>
            </div>
            <p className="text-base text-gray-800">
              At Aksha Cloud, we are passionate about harnessing the power of
              Salesforce to drive innovation, growth, and success for businesses
              of all sizes. With a team of dedicated experts, we specialize in
              Salesforce consulting, implementation, and support, helping our
              clients transform their operations and maximize their Salesforce
              investment.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between my-10 gap-6 lg:px-40 px-5">
        <CustomCard
          title="Vision"
          content=" Our mission is simple - to help you maximize the value of Salesforce. 
We do this through personalized consulƟng and training that aligns with your 
unique goals and challenges. "
        />
        <CustomCard
          title="Mission"
          content=" Our mission is simple - to help you maximize the value of Salesforce. 
We do this through personalized consulƟng and training that aligns with your 
unique goals and challenges. "
        />
      </div>
    </div>
  );
};

export default AboutPage;
