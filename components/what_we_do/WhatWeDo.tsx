"use client";

import Link from "next/link";
import Card from "./Card";
import { Cog } from "lucide-react";

const array = [
  { icon: Cog, title: "CRM Implementation & Support" },
  { icon: Cog, title: "Sales Cloud" },
  { icon: Cog, title: "Service Cloud" },
  { icon: Cog, title: "Marketing Cloud" },
  { icon: Cog, title: "CPQ Cloud" },
  { icon: Cog, title: "Custom Development" },
  { icon: Cog, title: "Data Management" },
  { icon: Cog, title: "Salesforce Health Check" },
  { icon: Cog, title: "Product Training" },
];

const WhatWeDo = () => {
  return (
    <section className="lg:px-40 px-5 py-10">
      <h1 className="text-center lg:text-3xl text-lg text-[var(--heading-color)] font-semibold">
        Elevating{" "}
        <span className="text-[var(--main-color)] font-bold">
          Your Business
        </span>{" "}
        with Our Services
      </h1>
      <div className="my-10 lg:grid flex-col flex lg:grid-cols-3 md:grid-cols-3 gap-8">
        {array.map((item) => (
          <Link key={item.title} href={"/services"}>
            <Card content={item.title} Icon={item.icon} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
