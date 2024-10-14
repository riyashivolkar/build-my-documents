import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ConditionalWrapper from "./utils/ConditionalWrapper";
import { PageProvider, usePageContext } from "./utils/context/PageContext";
import ConditionalBackButton from "./utils/ConditionalBackButton";
import ScrollToTop from "./utils/ScrollToTop";

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
  openGraph: {
    title: "Build My Documents",
    description:
      "Leave the paperwork to us hassle-free documentation made simple!",
    url: "https://www.buildmydocuments.com/",
    siteName: "Build My Documents",
    images: [
      {
        url: "/logo1.png",
        width: 800,
        height: 600,
        alt: "Build My Documents Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://sdk.cashfree.com/js/v3/cashfree.js" async></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16735233208"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16735233208');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased bg-white`}
      >
        <PageProvider>
          <Header />
          <ConditionalWrapper>
            <Hero />
          </ConditionalWrapper>
          <ConditionalBackButton />
          <ScrollToTop />
          <main>{children}</main>

          <Footer />
        </PageProvider>
      </body>
    </html>
  );
}
