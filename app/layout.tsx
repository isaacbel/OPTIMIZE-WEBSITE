import type { Metadata } from "next";
import { Geist, Geist_Mono, Parkinsans, Patua_One, Poppins, Lato } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
});

const patuaOne = Patua_One({
  variable: "--font-patua-one",
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Optimize Website",
  description: "Welcome to our website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${parkinsans.variable} ${patuaOne.variable} ${poppins.variable} ${lato.variable} antialiased`}
        style={{ minHeight: "100vh" }}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
