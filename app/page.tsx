"use client";

import GlobeClient from "@/components/Globe";
import OpenSource from "@/components/OpenSource";
import StepsSection from "@/components/Steps";
import { Suspense } from "react";
import { Balancer } from "react-wrap-balancer";

export default function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-r from-rose-100 to-teal-100 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Saas NextJs Building Blocks</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-white opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            An opinionated collection of components, hooks, and utilities for
            your next project.
          </Balancer>
        </p>
        <Suspense fallback="...loading">
          <GlobeClient />
        </Suspense>
      </div>
      <Suspense fallback="...loading">
        <StepsSection />
      </Suspense>
      <Suspense fallback="...loading">
        <OpenSource />
      </Suspense>
    </>
  );
}
