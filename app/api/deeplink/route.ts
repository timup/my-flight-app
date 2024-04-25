// app/api/deeplink/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';  // Use Axios to generate deep links

export async function POST(request: Request) {
  const body = await request.json();
  const route = body.route;  // Get the custom route from the request body

  if (!route || route.length === 0) {
    return NextResponse.json({ error: "Route cannot be empty" }, { status: 400 });
  }

  try {
    const response = await axios.post('YOUR_KIWI_TEQUILA_ENDPOINT', { route });

    return NextResponse.json(response.data);  // Return the deep link
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate deep link" }, { status: 500 });
  }
}
