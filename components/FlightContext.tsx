// components/FlightContext.tsx

"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import { Flight } from '../types';

interface FlightContextType {
  currentTime: Date;
  flights: Flight[];
  route: Flight[];
  setFlights: (flights: Flight[]) => void;
  addFlightToRoute: (flight: Flight) => void;
}

const FlightContext = createContext<FlightContextType | undefined>(undefined);

export const FlightProvider = ({ children }: { children: React.ReactNode }) => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [route, setRoute] = useState<Flight[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addFlightToRoute = (flight: Flight) => {
    setRoute((prevRoute) => [...prevRoute, flight]);
  };

  return (
    <FlightContext.Provider value={{ currentTime, flights, route, setFlights, addFlightToRoute }}>
      {children}
    </FlightContext.Provider>
  );
};

export const useFlightContext = () => {
  const context = useContext(FlightContext);
  if (!context) {
    throw new Error("useFlightContext must be used within a FlightProvider");
  }
  return context;
};
