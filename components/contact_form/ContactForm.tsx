"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import CustomIcons from "./CustomIcons";
import DetailsCard from "./DetailsCard";

const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(500),
});

const contactForm = [
  {
    Icon: EnvelopeIcon,
    title: "Email",
    description: "Our friendly team is here to help.",
    info: "testemail.com",
  },
  // {
  //   Icon: MapPinIcon,
  //   title: "Live Chat",
  //   description: "Our friendly team is here to help.",
  //   info: "Start new chat",
  // },
  {
    Icon: MapPinIcon,
    title: "Office",
    description: "    Come say hello at our office HQ.",
    info: " 100 Smith Street Collingwood VIC 3066 AU",
  },
  {
    Icon: PhoneIcon,
    title: "Phone",
    description: "  Mon-Fri from 8am to 5pm.",
    info: "9273084324",
  },
];

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Message sent successfully");
    form.reset();
  }

  return (
    <section className="bg-white lg:px-40 px-5 dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-blue-500 dark:text-blue-400">
            Contact us
          </p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Chat to our friendly team
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {contactForm.map((item, index) => (
              <DetailsCard
                Icon={item.Icon}
                info={item.info}
                description={item.description}
                title={item.title}
                key={index}
              />
            ))}
          </div>

          <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John "
                    className="input_style"
                    {...form.register("firstname")}
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="input_style"
                    {...form.register("lastname")}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="input_style"
                  {...form.register("email")}
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  className="input_style h-32"
                  placeholder="Message"
                  {...form.register("message")}
                />
              </div>

              <button
                className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                disabled={isValid && isSubmitting}
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
