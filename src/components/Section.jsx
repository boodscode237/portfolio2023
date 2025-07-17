import React from "react";

export const Section = ({ title, children, id }) => (
  <section id={id} className="mb-12 fade-in">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
      {title}
    </h2>
    {children}
  </section>
);
