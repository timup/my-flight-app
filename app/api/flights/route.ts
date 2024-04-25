// app/api/flights/route.ts
import { NextResponse } from "next/server";
import axios from "axios"; // Use Axios to fetch data from an external API

export async function GET(request: Request) {
  const url = new URL(request.url);
  const origin = url.searchParams.get("origin"); // Get the origin airport from query parameters

  if (!origin) {
    return NextResponse.json(
      { error: "Origin airport is required" },
      { status: 400 }
    );
  }

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://tequila-api.kiwi.com/v2/search?fly_from=${origin}&curr=USD`,
    headers: {
      apikey: process.env.KIWI_TEQUILA_API_KEY, // Use the API key from environment variables
    },
  };

  // Call the flight API to get available flights for the given origin
  try {
    const response = await axios.request(config);

    return NextResponse.json(response.data); // Return the list of flights
  } catch (error) {
    console.error("Error fetching flights:", error);
    return NextResponse.json(
      { error: "Failed to fetch flights" },
      { status: 500 }
    );
  }
}
