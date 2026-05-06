import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salary Leak Scanner — Monitor if Your Salary Data is Being Sold",
  description: "Monitor data broker sites and dark web for leaked employee salary information. Get alerts when your data is found."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ecba45d1-7d33-4973-8efc-78d551486f62"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
