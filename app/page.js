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
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <WhoWeAre />
        <WhyChooseUs />
      </section>
      <TechStackSection />
      <section id="services">
        <Services />
      </section>
      {/* <Blogs /> */}
      <section id="portfolio">
        <Blogsmy />
      </section>
      <Testimonials />
      <section id="contact">
        <ContactUs />
      </section>
      <TextPressureComp />
      <Footer />
    </>
  );
}
