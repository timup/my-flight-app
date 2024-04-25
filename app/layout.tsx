import type { Metadata } from "next";
import Link from "next/link"; // Navigation
import "./globals.css"; // Global styles
import { Inter } from "next/font/google"; // Google font

import { FlightProvider } from "../components/FlightContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Flight App",
  description: "An app to create custom flight routes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlightProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-50`}>
          <header className="bg-gray-800 text-white p-4">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/flights">Flights</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="p-6">{children}</main>

          {/* <footer className="bg-gray-800 text-white text-center p-4">
            <p>
              &copy; {new Date().getFullYear()} My Flight App. All rights
              reserved.
            </p>
          </footer> */}
        </body>
      </html>
    </FlightProvider>
  );
}
