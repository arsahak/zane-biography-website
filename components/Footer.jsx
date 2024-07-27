import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MotionEffect from "./motion/MotionEffect";
import { SITECONFIG } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-[#1B2639] py-5 px-5 lg-px-0">
      <div className="mx-auto w-full max-w-screen-2xl py-6 lg:py-8">
        <div className="md:flex md:justify-center">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-5 justify-center ">
            <div className="mb-6 md:mb-0 col-span-2 mx-auto md:mx-0">
              <Link
                href="https://trip-law.com"
                className="flex items-center cursor-pointer"
              >
                <Image
                  width={320}
                  height={200}
                  src={SITECONFIG?.footer?.footer_logo}
                  alt="Trip Low"
                  className="object-cover"
                />
              </Link>
              <p className="text-gray-300 font-thin text-base py-5 max-w-96 text-center md:text-left">
                {SITECONFIG?.footer?.description}
              </p>
            </div>
            <div className="">
              <h2 className="mb-6 text-lg font-semibold text-white">Company</h2>
              <ul className="text-gray-300 font-thin text-base list-none ml-0">
                {SITECONFIG?.footer?.company?.map((el, index) => (
                  <li className="mb-4" key={index}>
                    <Link href={el.slug} className="hover:underline">
                      {el.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 className="mb-6 text-lg font-semibold text-white">
                Quick Links
              </h2>
              <ul className="text-gray-300 font-thin text-base list-none ml-0">
                {SITECONFIG?.footer?.quick_links?.map((el, index) => (
                  <li className="mb-4" key={index}>
                    <Link href={el.slug} className="hover:underline">
                      {el.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h2 className="mb-6 text-lg font-semibold text-white">Contact</h2>
              <ul className="text-gray-300 font-thin text-base list-none ml-0">
                <li className="mb-4 flex items-center gap-3">
                  <div className="w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <p>1543 Lakeland Hills Blvd, Ste. 17, Lakeland, FL 33805</p>
                </li>
                <li className="mb-4 flex items-center gap-3">
                  <div className="w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                      />
                    </svg>
                  </div>

                  <p>info@trip-law.com</p>
                </li>
                <li className="mb-4 flex items-center gap-3">
                  <div className="w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>

                  <p>(863)-599-6735</p>
                </li>
                <li className="flex items-center justify-center md:justify-start mt-[-20px] md:mt-0 gap-3">
                  <div className="flex mt-10 sm:justify-center sm:mt-4 gap-3">
                    <Link
                      href="https://www.facebook.com/TripLawPA"
                      target="_blank"
                      className="text-[#1B2639] hover:animate-pulse bg-slate-200 rounded-full p-2"
                    >
                      <svg
                        class="h-3.5 w-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 8 19"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </Link>

                    <Link
                      href="https://www.instagram.com/trip_law_/"
                      target="_blank"
                      className="text-[#1B2639] hover:animate-pulse bg-slate-200 rounded-full p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </Link>
                    <Link
                      href="https://www.youtube.com/@triplawpa"
                      target="_blank"
                      className="text-[#1B2639] hover:animate-pulse bg-slate-200 rounded-full p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 576 512"
                        class="h-3.5 w-3.5"
                      >
                        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                      </svg>
                      <span className="sr-only">Youtube</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="md:flex :items-center sm:justify-between">
          <div className="text-gray-300 font-thin text-base text-center">
            © 2024{" "}
            <a href="https://trip-law.com/" className="hover:underline">
              Trip Law™
            </a>
            . All Rights Reserved.
          </div>
          <div className="text-gray-300 font-thin text-base text-center">
            Design & Developed by{" "}
            <a
              href="www.arsahak.online"
              target="_blank"
              className="hover:underline"
            >
              arsahak
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
