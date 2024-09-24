// src/app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ConditionalWrapper from "./utils/ConditionalWrapper";
import BackButton from "./components/BackButton";
import { PageProvider, usePageContext } from "./utils/context/PageContext";
import ConditionalBackButton from "./utils/ConditionalBackButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Build My Documents",
  description:
    "Leave the paperwork to us hassle-free documentation made simple!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased bg-gray-200`}
      >
        <PageProvider>
          <Header />
          <ConditionalWrapper>
            <Hero />
          </ConditionalWrapper>
          <ConditionalBackButton />
          <main>{children}</main>
          <Footer />
        </PageProvider>
      </body>
    </html>
  );
}
