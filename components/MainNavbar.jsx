"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { SITECONFIG } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

const MainNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleNavItemClick = (slug) => {
    setIsMenuOpen(false);
    router.push(slug)?.then(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      maxWidth="2xl"
      className="flex !justify-center bg-transparent bg-cover py-1 fixed top-0 shadow-md"
    >
      <NavbarContent className="md:hidden ml-0" justify="start">
        <NavbarMenuToggle className="text-slate-50 ml-0" />
      </NavbarContent>

      <NavbarContent className=" md:hidden" justify="end">
        <Link href="/" passHref>
          <Image
            width={250}
            height={130}
            src={"/assets/site-logo/trip-law-logo.svg"}
            alt="Trip Law"
            className="object-cover cursor-pointer !max-w-[170px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 170px"
          />
        </Link>
      </NavbarContent>

      <NavbarContent className="justify-center hidden gap-10 md:flex"></NavbarContent>
      <NavbarContent className="justify-center hidden gap-14 md:flex">
        {SITECONFIG?.mainNav?.left?.map((nav, index) => {
          return (
            <NavbarItem key={index}>
              <span
                onClick={() => handleNavItemClick(nav.slug)}
                className={`nav-item ${pathname === nav.slug ? "active" : ""}`}
              >
                {nav.title}
              </span>
            </NavbarItem>
          );
        })}

        {SITECONFIG?.mainNav?.right?.map((nav, index) => {
          return (
            <NavbarItem key={index}>
              {nav.title === "Blog" ? (
                <div
                  className="relative inline-block"
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                >
                  <div className="group">
                    <div className="flex items-center gap-1">
                      <span
                        onClick={() => handleNavItemClick(nav.slug)}
                        className={`nav-item ${
                          pathname === nav.slug
                            ? "border-b-2 border-solid border-black"
                            : ""
                        }`}
                      >
                        Blog
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={`size-4 font-extrabold transform transition-transform duration-200 ${
                            isDropdownVisible ? "rotate-0" : "rotate-180"
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded p-4 w-48">
                      <ul className="py-2 ">
                        <li>
                          <Link
                            href={`https://podcasters.spotify.com/pod/show/theimmigrationzone`}
                            className={`nav-item`}
                          >
                            Podcast
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <span
                  onClick={() => handleNavItemClick(nav.slug)}
                  className={`nav-item ${pathname === nav.slug ? "active" : ""}`}
                >
                  {nav.title}
                </span>
              )}
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent className="justify-center hidden gap-10 md:flex"></NavbarContent>

      <NavbarMenu className="ml-0">
        {SITECONFIG?.mobileNav?.map((nav, index) => (
          <NavbarMenuItem key={`${nav}-${index}`} className="list-none mt-4">
            {nav.title === "Blog" ? (
              <div
                className="relative inline-block"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <div className="group">
                  <div className="flex items-center gap-1">
                    <span
                      onClick={() => handleNavItemClick(nav.slug)}
                      className={`nav-item list-none ${
                        pathname === nav.slug
                          ? "border-b-2 border-solid border-black"
                          : ""
                      }`}
                      size="lg"
                      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                      Blog
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`size-4 font-extrabold transform transition-transform duration-200 ${
                          isDropdownVisible ? "rotate-0" : "rotate-180"
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg rounded p-2 z-50 w-[300px]">
                    <ul className="py-2 ">
                      <li key={index}>
                        <Link
                          onClick={() => {
                            setIsMenuOpen(false);
                          }}
                          href={`https://podcasters.spotify.com/pod/show/theimmigrationzone`}
                          className={`py-2 flex nav-item`}
                        >
                          Podcast
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <span
                onClick={() => handleNavItemClick(nav.slug)}
                className={`nav-item list-none ${
                  pathname === nav.slug
                    ? "border-b-2 border-solid border-black"
                    : ""
                }`}
                size="lg"
              >
                {nav.title}
              </span>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MainNavbar;
