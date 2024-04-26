"use client";

import React, { useEffect, useState } from "react";
import { useFlightContext } from "../components/FlightContext";

const Clock = ({ timeZone = "GMT" }) => {
  const { currentTime } = useFlightContext();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // if (!isClient) {
  //   return null; // Do not render on the server
  // }

  return (
    <p
      className={`tabular-nums transition-opacity duration-300 ease-in ${
        isClient ? "opacity-100" : "opacity-0"
      }`}
    >
      {isClient &&
        currentTime.toLocaleString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          hour12: false,
          minute: "2-digit",
          second: "2-digit",
          timeZone: timeZone,
          timeZoneName: "shortGeneric",
        })}
    </p>
  );
};

export default Clock;
