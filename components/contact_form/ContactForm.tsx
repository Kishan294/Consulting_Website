"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactForm } from "@/constants";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { ContactFormCard } from "./ContactFormCard";
import toast from "react-hot-toast";

const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().email(),
  mobile: z.string().min(10).max(10),
  message: z.string().min(2).max(500),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
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
    <div className="flex flex-col items-center justify-between mx-auto w-2/3 py-20 lg:px-40 px-5">
      <h1 className="text-4xl text-center font-semibold mb-4 border-b-2 pb-4 text-[var(--heading-color)]">
        Contact Our friendly Team
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" space-y-4 w-full lg:w-[50vw]"
        >
          {contactForm.map((item) => (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name as "firstname" | "lastname" | "email" | "mobile"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={item.placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder={"Write your message"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={!isValid}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
