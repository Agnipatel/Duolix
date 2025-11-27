"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface ContactForm {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Message sent!");
    setForm({ name: "", company: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-[#f9f9f9] py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <h1 className="text-center text-3xl font-bold mb-10">Connected</h1>

      {/* FULL RESPONSIVE GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[70vh]">

        {/* LEFT SIDE — FORM (equal flex size) */}
        <div className="flex flex-col justify-center h-full w-full flex-1">
          <Card className="w-full h-full shadow-lg hover:shadow-xl transition">
            <CardHeader>
              <CardTitle className="text-orange-600 text-2xl sm:text-3xl font-bold">
                Let&apos;s get Connected
              </CardTitle>
              <p className="text-sm sm:text-base text-gray-500">For a no-cost Quote</p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Your name*</Label>
                  <Input id="name" name="name" value={form.name} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input id="email" type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="phone">Mobile number</Label>
                  <Input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  SEND A MESSAGE
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE — IMAGE (equal flex size) */}
        <div className="flex items-center justify-center h-full w-full flex-1">
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src="/gif.gif"
              alt="Contact illustration"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full h-full max-h-[500px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
