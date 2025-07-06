// src/app/layout.tsx
import type { Metadata } from "next";
// Remove Geist, Geist_Mono
// import { Geist, Geist_Mono } from "next/font/google";

// Import your custom fonts
import { Holtwood_One_SC, DM_Sans } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Configure Holtwood One SC
const holtwoodOneSC = Holtwood_One_SC({
  subsets: ["latin"],
  weight: "400", // "Regular" typically maps to 400
  variable: "--font-holtwood-one-sc",
  display: 'swap', // Ensures font loads optimally
});

// Configure DM Sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"], // "Medium" typically maps to 500, include 400 for regular
  variable: "--font-dm-sans",
  display: 'swap', // Ensures font loads optimally
});

export const metadata: Metadata = {
  title: "Puggle IT - Digital Solutions & Mentorship", // Updated title
  description: "Transforming Ideas into Digital Excellence with innovative digital solutions and strategic digital services.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply the font variables to the html element
    <html lang="en" className={`${holtwoodOneSC.variable} ${dmSans.variable}`}>
      <body
        // Set DM Sans as the default 'sans' font. This body class will apply globally unless overridden.
        // `font-sans` will now correctly pull from `--font-dm-sans`
        className={`font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}