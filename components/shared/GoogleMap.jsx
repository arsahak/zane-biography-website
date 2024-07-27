import React from "react";

const GoogleMap = () => {
  return (
    <div className="">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28165.427442414046!2d-81.98759941612768!3d28.064841688735978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd40aacfff5f3f%3A0x9c6292c6be609e8b!2s1543%20Lakeland%20Hills%20Blvd%20%2317%2C%20Lakeland%2C%20FL%2033805%2C%20USA!5e0!3m2!1sen!2sbd!4v1709022100498!5m2!1sen!2sbd"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
