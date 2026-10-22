import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "CRIICO | Nepal Sports-Technology & Digital Cricket Platform",
    template: "%s | CRIICO Nepal",
  },
  description:
    "CRIICO is a Nepal-based sports-technology startup dedicated to connecting grassroots cricket, tournament organizers, players, and communities through modern digital technology.",
  keywords: [
    "CRIICO",
    "Nepal cricket technology",
    "sports tech Nepal",
    "grassroots cricket",
    "Nepal cricket tournament management",
    "digital cricket scoring",
    "cricket startup Nepal",
  ],
  authors: [{ name: "CRIICO Sports Technology" }],
  openGraph: {
    title: "CRIICO | Building the Future of Cricket Through Technology",
    description:
      "Connecting Nepal's cricket ecosystem through digital match infrastructure, grassroots player visibility, and sports innovation.",
    url: "http://localhost:3001",
    siteName: "CRIICO Corporate",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-white text-slate-800 antialiased selection:bg-[#0647B9] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
