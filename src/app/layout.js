import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


export const metadata = {
  title: "Best Estate JP",
  description: "Andrew Lee",
};



export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
      {children}
      </body>
    </html>
  );
}
