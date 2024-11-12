"use client"

import React, { useEffect } from "react"
import Navbar from "@/components/navbar";
import ScrollProgress from "@/components/scrollProgress";
import ContentTwo from "@/components/contentTwo";
import Footer from "@/components/footer";
import ImageContent from "@/components/imageContent";
import Intro from "@/components/intro";

export default function Home() {
  useEffect( () => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-[100vw] flex flex-col justify-center">
      <Navbar />
      <ScrollProgress />
      <Intro />
      <ImageContent />
      <ContentTwo />
      <Footer />
    </div>
  );
}
