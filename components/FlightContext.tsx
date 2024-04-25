// components/FlightContext.tsx

"use client";

import React, { createContext, useState, useContext } from 'react';

export interface Flight {
  cityFrom: string; 
  cityTo: string; 
  price: number; 
}

interface FlightContextType {
  flights: Flight[];
  route: Flight[];
  setFlights: (flights: Flight[]) => void;
  addFlightToRoute: (flight: Flight) => void;
}

const FlightContext = createContext<FlightContextType | undefined>(undefined);

export const FlightProvider = ({ children }: { children: React.ReactNode }) => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [route, setRoute] = useState<Flight[]>([]);

  const addFlightToRoute = (flight: Flight) => {
    setRoute((prevRoute) => [...prevRoute, flight]);
  };

  return (
    <FlightContext.Provider value={{ flights, route, setFlights, addFlightToRoute }}>
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
