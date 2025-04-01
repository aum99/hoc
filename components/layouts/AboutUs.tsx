import React from "react";
import Container from "./Container";
import StatsSection from "../Stats";

function AboutUs() {
  return (
    <div className="bg-black text-white flex-col items-center justify-center ">
      <Container>
        <div className="flex-col justify-center py-10">
          <h1 className="text-3xl text-center lg:text-6xl">
            You can always{" "}
            <span className="bg-gradient-to-r from-purple-600 to-red-500 text-transparent bg-clip-text font-bold">
              count on
            </span>
          </h1>
          <h1 className="text-3xl text-center lg:text-6xl">
            <span className="bg-gradient-to-r from-purple-600 to-red-500 text-transparent bg-clip-text font-bold">
              us
            </span>{" "}
            during your journey
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="col-span-1">
            <div className="animate-gradient-border p-4">
              <img
                src="/of1.jpg"
                alt="Group meeting"
                className="w-full h-[420px] rounded-lg object-cover animate-gradient-border"
              />
            </div>
          </div>
          <div className="col-span-1 grid gap-4">
            <div className="animate-gradient-border p-2">
              <img
                src="/of2.jpg"
                alt="Man working on laptop"
                className="w-full h-[200px] rounded-lg object-cover"
              />
            </div>
            <div className="animate-gradient-border p-2">
              <img
                src="of3.jpg"
                alt="Office desk setup"
                className="w-full h-[200px] rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex-col justify-center pb-10 mt-5">
          <h1 className="text-3xl text-center lg:text-6xl">
            We craft stunning{" "}
            <span className="bg-gradient-to-r from-purple-600 to-red-500 text-transparent bg-clip-text font-bold">
              visuals
            </span>{" "}
            for
          </h1>
          <h1 className="text-3xl text-center lg:text-6xl">
            immersive experiences.
          </h1>
          <StatsSection />
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;
