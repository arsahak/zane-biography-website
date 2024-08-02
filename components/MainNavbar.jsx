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
import { SITECONFIG } from "@/config/siteData";
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
      maxWidth="2xl"
      className="flex !justify-center bg-slate-300 bg-cover py-1 fixed top-0 shadow-md"
    >
      <NavbarContent className="md:hidden ml-0" justify="start">
        <NavbarMenuToggle className="text-slate-900 ml-0" />
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
        {SITECONFIG?.mainNavbar?.map((nav, index) => {
          return (
            <NavbarItem key={index}>
              <Link
                href={nav.slug === "blog" ? `/blog` : `#${nav.slug}`}
                onClick={() => handleNavItemClick(nav.slug)}
                className={`nav-item ${pathname === nav.slug ? "active" : ""}`}
              >
                {nav.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent className="justify-center hidden gap-10 md:flex"></NavbarContent>

      <NavbarMenu className="ml-0">
        {SITECONFIG?.mainNavbar?.map((nav, index) => (
          <NavbarMenuItem key={`${nav}-${index}`} className="list-none mt-4">
            <Link
              href={`#${nav.slug}`}
              onClick={() => handleNavItemClick(nav.slug)}
              className={`nav-item list-none ${
                pathname === nav.slug
                  ? "border-b-2 border-solid border-black"
                  : ""
              }`}
              size="lg"
            >
              {nav.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MainNavbar;
