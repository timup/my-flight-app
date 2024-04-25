// components/AirportSelector.tsx
import React, { useState } from 'react';

interface AirportSelectorProps {
  onSelect: (airport: string) => void;  // Callback function when an airport is selected
}

const AirportSelector = ({ onSelect }: AirportSelectorProps) => {
  const [airport, setAirport] = useState('');  // State for the input value

  const handleSelect = () => {
    if (airport) {
      onSelect(airport);  // Trigger the callback with the selected airport
      setAirport('');  // Clear the input field
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={airport}
        onChange={(e) => setAirport(e.target.value)}  // Update the state on input change
        placeholder="Enter airport code"
        className="border p-2 rounded"  // Tailwind styles for input
      />
      <button onClick={handleSelect} className="bg-blue-500 text-white p-2 rounded">
        Select
      </button>
    </div>
  );
};

export default AirportSelector;
