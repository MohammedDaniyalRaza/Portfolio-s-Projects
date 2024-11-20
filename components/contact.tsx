"use client";

import { ButtonHTMLAttributes, useState } from "react";
import { motion } from "framer-motion";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "emailjs-com"; // Import EmailJS
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
      resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    try {
        // Type assertion to FormData
        const formData = data as FormData; 
        await emailjs.send(
            "service_f0s2jrd",
            "template_v24v6ib",
            formData,
            "jmmOlFZ3_E1n0JyTt"
        );
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
        console.error("Error sending email:", error);
        alert("There was an error sending your message. Please try again later.");
    } finally {
        setIsSubmitting(false);
    }
};

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" />
                  <span>qadrimohammeddaniyalraza@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" />
                  <span>+92 (334) 7715261 </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" />
                  <span>Karachi, Sindh Pakistan</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <Input
                    placeholder="Your Name"
                    {...register("name")}
                    className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                    </p>
                )}
            </div>

            <div>
                <Input
                    type="email"
                    placeholder="Your Email"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div>
                <Textarea
                    placeholder="Your Message"
                    {...register("message")}
                    className={errors.message ? "border-red-500" : ""}
                    rows={5}
                />
                {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    "Sending..."
                ) : isSuccess ? (
                    "Message Sent!"
                ) : (
                    <>
                        Send Message
                        <Send className="ml-2" size={16} />
                    </>
                )}
            </Button>
        </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
