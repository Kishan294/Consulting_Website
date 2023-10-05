import WhatWeDo from "@/components/what_we_do/WhatWeDo";
import Hero from "./_components/Hero";
import WhyChooseUs from "@/components/why_choose_us/WhyChooseUs";

import ContactForm from "@/components/contact_form/ContactForm";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className=" ">
      <Hero />
      <div className="w-full">
        <WhatWeDo />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </div>
    </main>
  );
}
