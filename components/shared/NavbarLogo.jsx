import { Image } from "@nextui-org/react";
import React from "react";

const NavbarLogo = () => {
  return (
    <Image
      width={120}
      height={30}
      src={"/assets/site-logo/10x-pro.svg"}
      alt="10x-Pro-Tax"
      // layout="fill"
      // objectFit="contain"
      className="object-cover cursor-pointer"
    />
  );
};

export default NavbarLogo;
