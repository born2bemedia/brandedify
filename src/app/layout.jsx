import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const helvetica = localFont({
  src: [
    {
      path: "./fonts/Helvetica.woff",
      weight: "700",
      style: "normal",
      variable: "--font-helvetica",
    },
    {
      path: "./fonts/Helvetica-light.woff",
      weight: "400",
      style: "normal",
      variable: "--font-helvetica-light",
    },
  ],
});

export const metadata = {
  title: "Brandedify",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={helvetica.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
