import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Whatbytes - Your Tech Store",
  description: "Find the best tech products at Whatbytes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white"> 
        <Header />
        <main className="flex-1">{children}</main> 
        <Footer />
      </body>
    </html>
  );
}
