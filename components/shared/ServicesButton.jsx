"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const ServicesButton = ({ title, radius, style, link }) => {
  const router = useRouter();

  return (
    <Button
      radius={radius}
      size="lg"
      className={`${style} shadow-lg font-medium text-lg px-10 py-4 mb-2`}
      onClick={() => router.push(`/services/${link}`)}
    >
      {title}
    </Button>
  );
};

export default ServicesButton;
