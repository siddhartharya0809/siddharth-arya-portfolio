// "use client";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfinteMovingCard";
import React from "react";

const Client = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        {" "}
        <span className="text-purple"> Kind words from</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Client;
