"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import Loading from "./Loading";

const phoneRegex = new RegExp(
  /(^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$)|()/
);

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  rollNo: z
    .string()
    .min(2, { message: "Roll No must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  faculty: z
    .string()
    .min(2, { message: "Faculty must be at least 2 characters." }),
  semester: z
    .string()
    .min(2, { message: "Semester must be at least 2 characters." }),
  reason: z
    .string()
    .min(2, { message: "Reason must be at least 2 characters." }),
  phone: z.string().regex(phoneRegex, "Invalid Number!").optional(),
});

export function Membership() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      rollNo: "",
      email: "",
      faculty: "",
      semester: "",
      reason: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      await axios.post("/api/hashtagMembership", values);
      toast({
        description: "Form submitted successfully!",
        variant: "default",
      });
    } catch {
      toast({ description: "Something went wrong!", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="membership"
      className="flex justify-center items-center flex-col p-8 md:p-16 space-y-6"
    >
      {loading && <Loading />}
      <h1 className="text-3xl font-bold text-primary text-center">
        Join Vedas Hashtag Today!
      </h1>
      <MaxWidthWrapper>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 grid"
          >
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rollNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Roll No*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your roll number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
              <FormField
                control={form.control}
                name="faculty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Faculty*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your faculty" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="semester"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Semester*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your semester" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your contact number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1">
              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reason for joining Hashtag*</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us your reason for applying to join Hashtag"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="mx-auto" type="submit" disabled={loading}>
              Submit
            </Button>
          </form>
        </Form>
      </MaxWidthWrapper>
    </section>
  );
}
