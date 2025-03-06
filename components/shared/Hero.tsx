"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { AnimatedText } from "./AnimatedText";
import { Button } from "./Button";
import { Navbar } from "./NavBar";


export function Hero() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <AnimatedText />
            Spotlight <br /> which is not overused.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            A subtle yet effective spotlight effect, because the previous version
            is used a bit too much these days.
          </p>
            <Button />
        </div>
      </div>
    </>
  );
}