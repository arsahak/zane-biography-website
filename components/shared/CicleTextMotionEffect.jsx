import "@/style/custom.css";
import React from "react";

export default function CicleTextMotionEffect() {
  const text = "We are creative eventmanagement group";
  // console.log("text", text);

  const Letter = text.split("");
  console.log(Letter);

  return (
    <div className="App">
      <section class="sectionDic">
        {Letter.map((item, index) => {
          return (
            <span
              key={index}
              className="letter"
              style={{
                transform: `rotate(${index * 14.5}deg)`,
              }}
            >
              {item}
            </span>
          );
        })}
      </section>
    </div>
  );
}
