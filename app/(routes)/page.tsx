import React from "react";

import AboutUs from "@/components/layouts/AboutUs";
import Gallery from "@/components/layouts/Gallery";
import Footer from "@/components/layouts/Footer";
import { TeamSection } from "@/components/layouts/TeamSection";
import Services from "@/components/layouts/Services";

function Page() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <video
          className="mt-16 absolute top-0 left-0 w-full h-screen object-cover -z-10"
          src="/Showreel.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <AboutUs />
      <Services />
      <Gallery />
      <TeamSection />
      <Footer />
    </>
  );
}

export default Page;
