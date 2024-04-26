// app/flights/page.tsx
"use client"; // This is a client component

import React, { useState } from "react";
import { useFlightContext } from "../../components/FlightContext";
import AirportSelector from "../../components/AirportSelector";
import FlightDisplay from "../../components/FlightDisplay";
import RouteBuilder from "../../components/RouteBuilder";
import axios from "axios";

const FlightsPage = () => {
  const { flights, setFlights, addFlightToRoute, route } = useFlightContext(); // Access the context
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const handleAirportSelect = async (airport: string) => {
    setIsLoading(true); // Set loading to true before fetching data
    try {
      const response = await axios.get("/api/flights", {
        params: { origin: airport },
      });

      console.log(response.data.data)

      setFlights(response.data.data); // Update the state with the fetched flights
    } catch (error) {
      console.error("Error fetching flights:", error);
    } finally {
      setIsLoading(false); // Reset loading state after fetching
    }
  };

  const handleFlightSelect = (flight: any) => {
    addFlightToRoute(flight); // Add the selected flight to the custom route
  };

  const generateDeepLink = async () => {
    try {
      const response = await axios.post("/api/deeplink", { route });
      const deepLink = response.data.link; // Retrieve the generated deep link
      console.log("Deep Link:", deepLink); // Display or use the deep link
    } catch (error) {
      console.error("Error generating deep link:", error);
    }
  };

  return (
    <div>
      {/* <AirportSelector onSelect={handleAirportSelect} /> */}
      {/* {isLoading ? (
        <p>Loading flights...</p> // Display loading message
      ) : (
        <FlightDisplay flights={flights} onSelect={handleFlightSelect} />
      )}
      <RouteBuilder route={route} />
      <button
        onClick={generateDeepLink}
        className="bg-green-500 text-white p-2 rounded mt-4"
      >
        Generate Deep Link
      </button> */}
    </div>
  );
};

export default FlightsPage;
