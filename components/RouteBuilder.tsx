// components/RouteBuilder.tsx
import React from 'react';
import { Flight } from "../types";  // Reuse the Flight interface

interface RouteBuilderProps {
  route: Flight[];  // List of selected flights
}

const RouteBuilder = ({ route }: RouteBuilderProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Your Custom Route</h2>
      <ul className="list-disc pl-6">
        {route.map((flight, index) => (
          <li key={index} className="p-2">
            {`Flight from ${flight.cityFrom} to ${flight.cityTo} - $${flight.price}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteBuilder;
