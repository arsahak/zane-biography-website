"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import SectionLayout from "./shared/SectionLayout";
import { SITECONFIG } from "@/config/siteData";
import CardMotion from "./motion/CardMotion";
import { Mulish, Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const ContactSection = () => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.message) {
      errors.message = "Question is required!";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Validate the form and set errors
    const errors = validate(emailForm);
    setFormErrors(errors);

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      send(
        "service_gzkvhcq",
        "template_48bzfm6",
        emailForm,
        "lV8GXzHudtzTEZK1s"
      )
        .then((response) => {
          setLoading(false); // Stop loading
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. Your information has been successfully submitted. Our team will respond to your inquiry shortly.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setEmailForm({
              name: "",
              phone: "",
              email: "",
              message: "",
            });
          });
        })
        .catch((err) => {
          console.log("err", err);
          Swal.fire({
            icon: "error",
            text: "Something went wrong!",
          }).then(() => {
            setEmailForm({
              name: "",
              phone: "",
              email: "",
              message: "",
            });
            setLoading(false); // Stop loading
          });
        });
    } else {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section id="contact-me" className="pt-16">
      <SectionLayout bg="bg-white">
        <h2
          className={`text-stone-950 font-bold text-4xl mb-4 text-center md:text-left ${bitter.className}`}
        >
          Get in touch.
        </h2>
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-x-12 gap-y-10">
            <div className="flex flex-col col-span-1 lg:col-span-2 mt-12 md:mt-0">
              <form className="w-full" onSubmit={handleSubmit}>
                <div class="mb-6 w-full">
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5"
                    placeholder="Your name"
                    required
                    type="text"
                    name="name"
                    value={emailForm.name}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        name: event.target.value,
                      });
                    }}
                  />
                  <span className="text-orange-600">{formErrors.name}</span>
                </div>

                <div class="mb-6">
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5"
                    placeholder="What's your email"
                    required
                    type="email"
                    name="email"
                    value={emailForm.email}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        email: event.target.value,
                      });
                    }}
                  />
                  <span className="text-orange-600">{formErrors.email}</span>
                </div>

                <div class="mb-6">
                  <input
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5"
                    placeholder="What's your phone"
                    required
                    type="tel"
                    name="phone"
                    value={emailForm.phone}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        phone: event.target.value,
                      });
                    }}
                  />
                  <span className="text-orange-600">{formErrors.phone}</span>
                </div>

                <div class="mb-6">
                  <textarea
                    rows={4}
                    id="message"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5"
                    placeholder="Your question....."
                    required
                    name="message"
                    value={emailForm.message}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        message: event.target.value,
                      });
                    }}
                  />
                  <span className="text-orange-600">{formErrors.message}</span>
                </div>

                {loading ? (
                  <Button
                    isLoading
                    className="text-white bg-[#1B2639] text-xl w-full px-5 py-3 text-center"
                    radius="sm"
                    size="lg"
                  >
                    Sending
                  </Button>
                ) : (
                  <Button
                    className="text-white bg-[#1B2639] text-xl w-full px-5 py-3 text-center"
                    radius="sm"
                    size="lg"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                )}
              </form>
            </div>
            <div className="space-y-4">
              <div className="p-3 shadow-md border rounded-md">
                <div className="flex justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-[#1B2639] mt-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h1 className="mt-5 mb-2 text-2xl font-semibold tracking-normal text-center md:text-left text-black">
                  {SITECONFIG?.contactDataInfo?.address}
                </h1>
                <p className="text-base text-stone-950 text-center md:text-left">
                  My Location
                </p>
              </div>

              <div className="p-3 shadow-md border">
                <div className="flex justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-[#1B2639] mt-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h1 className="mt-5 mb-2 text-2xl font-semibold tracking-normal text-center md:text-left text-black">
                  {SITECONFIG?.contactDataInfo?.phone}
                </h1>
                <p className="text-lg text-stone-950 text-center md:text-left">
                  Let’s Talk
                </p>
              </div>

              <div className="p-3 shadow-md border">
                <div className="flex justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-[#1B2639] mt-3"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </div>
                <h1 className="mt-5 mb-2 text-2xl font-semibold tracking-normal text-center md:text-left text-black">
                  {SITECONFIG?.contactDataInfo?.email}
                </h1>
                <p className="text-base text-stone-950 text-center md:text-left">
                  Drop a Line
                </p>
              </div>
            </div>
          </div>
        </CardMotion>
      </SectionLayout>
    </section>
  );
};

export default ContactSection;
