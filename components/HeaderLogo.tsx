"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// Function to generate a random delay within a range
const getRandomDelay = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const HeaderLogo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 300); // Small delay for animation
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Set an interval with random delays to trigger animation
    const triggerAnimation = () => {
      setIsAnimated(true);

      // Reset animation state after a brief period to allow re-animation
      const resetTimeout = setTimeout(() => {
        setIsAnimated(false);
      }, 2000); // Duration of the animation effect

      // Clear the reset timeout when component is unmounted
      return () => clearTimeout(resetTimeout);
    };

    // Set a random delay to trigger the animation
    const randomDelay = getRandomDelay(2000, 12000); // Random delay between 2 and 5 seconds
    const interval = setTimeout(triggerAnimation, randomDelay);

    // Cleanup on component unmount
    return () => clearTimeout(interval);
  }, [isAnimated]); // Dependency ensures re-triggering after reset


  return (
    <Link href="/flights">
      <h1 className="text-2xl font-extrabold uppercase tracking-tight whitespace-pre my-1">
        FLIGHTLINES{" "}
        <span
          // className={`text-3xl font-black transition-all duration-1000 ease-in-out inline-block ${
          //   isLoaded ? "translate-x-64 opacity-100" : "-translate-x-40 opacity-0"
          // }`}
          className={`text-3xl font-black inline-block ${
            isAnimated ? "animate-takeoff" : "" // Apply animation class conditionally
          }`}
        >
          ✈︎
        </span>
      </h1>
    </Link>
  );
};

export default HeaderLogo;
