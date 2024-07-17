"use client";

import Banner from "./Banner/Banner";
import CaseStudies from "./CaseStudies/CaseStudies";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import SideToken from "./SideToken/SideToken";
import Stuff from "./Stuff/Stuff";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="flex flex-col">
        <Hero />
        <Stuff />
        <SideToken />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
