"use client";
import React from "react";
import Section from "./Section";
import sections from "./data";

const Description = () => {
  return (
    <section className="flex flex-col w-full overflow-hidden">
      {sections.map((section, idx) => (
        <Section key={idx} {...section} reverse={idx % 2 === 1} />
      ))}
    </section>
  );
};

export default Description;
