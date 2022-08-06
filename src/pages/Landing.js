import React from "react";
import Navbar from "../components/Navbar";
import AlertAccordion from "../components/AlertAccordion";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import GrafikSection from "../components/GrafikSection";
import ToTopButton from "../components/ToTopButton";
const Landing = () => {
  return (
    <div className="bg-gray-200 relative">
      <header className="top-0 z-10 w-full sticky">
        <Navbar></Navbar>
        <AlertAccordion>
          <p>
            bantu kami untuk lebih baik dalam melayani melalui Survei Kebutuhan
            Data (SKD 2022) Melalui link
            <a href="https://s.bps.go.id/oskd22">s.bps.go.id/oskd22</a>
          </p>
        </AlertAccordion>
      </header>
      <main className="flex flex-col gap-y-24">
        <Hero></Hero>
        <Carousel></Carousel>
        <GrafikSection></GrafikSection>
      </main>
      <ToTopButton></ToTopButton>
    </div>
  );
};

export default Landing;
