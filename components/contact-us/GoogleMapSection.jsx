import React from "react";
import GoogleMap from "../shared/GoogleMap";
import MotionEffect from "../motion/MotionEffect";

const GoogleMapSection = () => {
  return (
    <div className="bg-white">
      <div>
        <MotionEffect effect="fade-up" duration="2000">
          <div className="relative h-[600px] w-full">
            <GoogleMap />
          </div>
        </MotionEffect>
      </div>
    </div>
  );
};

export default GoogleMapSection;
