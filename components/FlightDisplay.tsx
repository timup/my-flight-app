// components/FlightDisplay.tsx
import React from "react";
import { Flight } from "../types";

interface FlightDisplayProps {
  flights: Flight[]; // List of flights to display
  onSelect: (flight: Flight) => void; // Callback function when a flight is selected
}

const FlightDisplay = ({ flights, onSelect }: FlightDisplayProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Available Flights</h2>
      <ul className="list-disc pl-6">
        {flights.map((flight, index) => (
          <li
            key={index}
            className="cursor-pointer hover:bg-gray-200 p-2"
            onClick={() => onSelect(flight)}
          >
            {`Flight from ${flight.cityFrom} to ${flight.cityTo} - $${flight.price}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightDisplay;
