import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Azetworks",
    default: "Azetworks | AI-Powered Cloud Consulting & Delivery",
  },
  description: "Azetworks partners with leading cloud providers to deliver cloud migration, AI transformation, and infrastructure modernization.",
  keywords: ["Cloud Migration", "AI Consulting", "AWS", "Azure", "GCP", "Infrastructure Modernization", "Tech Consulting"],
  openGraph: {
    title: "Azetworks | AI-Powered Cloud Consulting",
    description: "Cloud migration, AI transformation, and infrastructure modernization.",
    url: "https://www.azetworks.com",
    siteName: "Azetworks",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
