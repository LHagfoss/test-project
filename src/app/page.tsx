"use client"

import React, { useEffect } from "react";

import Joke from "@/components/joke";
import Navbar from "@/components/navbar";
import OmAvdelingen from "@/components/omAvdelingen";
import ScrollProgress from "@/components/scrollProgress";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import ContentTwo from "@/components/contentTwo";
import { CarouselSpacing } from "@/components/carouselSpacing";
import ImageContent from "@/components/imageContent";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-[100vw] flex flex-col justify-center">
      <Navbar />
      <ScrollProgress />
      <Intro />
      <OmAvdelingen />
      <ImageContent />
      <ContentTwo />
      <CarouselSpacing />
      <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[--background]">
        <Joke />
      </div>
      <Footer />
    </div>
  );
};

export default Home;