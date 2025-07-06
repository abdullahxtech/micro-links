import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopLoader from "@/components/TopLoader";
import {ClerkProvider} from '@clerk/nextjs'
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MicroLinks",
  description: "MicroLinks create your url into short urls",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <TopLoader />
          <Navbar />
          <div className="min-h-screen w-full [background:radial-gradient(circle_at_center,_rgba(0,0,255,0.7)_0%,_rgba(0,0,0,1)_30%)]">
            {children}
          </div>
          <Footer/>
        </body>
      </html>
    </ClerkProvider>


  );
}
