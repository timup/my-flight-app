"use client";

import React, { useState, useEffect } from "react";

import { useFlightContext } from "../components/FlightContext";

const Clock = ({timeZone = "GMT"}) => {
  const { currentTime: time } = useFlightContext();

  return (
    <p className="tabular-nums">
      {time.toLocaleString("en-us", {
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
