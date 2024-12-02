import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "Portfolio ",
  description: "a simple portfolio website in Css format",
};

export default function RootLayout({children}: any)
 {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
