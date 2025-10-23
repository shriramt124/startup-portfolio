"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";
import TechStackSection from "./components/TechStackSection";
 
import Blogs from "./components/Blogs";
import { Services } from "@/components/parallax-scroll-feature-section";
import Blogsmy from "./components/Blogsmy";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import TextPressureComp from "./components/TextPressureComp";
import Footer from "./components/Footer";
 

export default function Home() {
 
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhyChooseUs />
      <TechStackSection />
      <Services />
      {/* <Blogs /> */}
      <Blogsmy />
      <Testimonials />
      <ContactUs />
      <TextPressureComp />
      <Footer />
    </>
  );
}
