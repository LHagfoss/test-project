"use client"

import React, { useEffect } from "react"
import Lenis from "lenis";
import Navbar from "@/components/navbar";
import ContentOne from "@/components/contentOne";
import Footer from "@/components/footer";

export default function Home() {
  useEffect( () => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-[100vw] flex flex-col justify-center">
      <Navbar />
      <ContentOne />
      <Footer />
    </div>
  );
}
