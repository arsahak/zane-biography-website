"use client";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <SectionLayout bg="bg-white">
      <div className="">
        <div className="h-800 mt-[-70px]">
          <InlineWidget
            className="inline-widget"
            url="https://calendly.com/arsahak-bayshore/30min"
            styles={{
              height: "750px",
            }}
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "#132841",
              textColor: "#132841",
            }}
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Calendly;
