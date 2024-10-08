import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body className={`${inter.className}`}>
    <section className="flex flex-col lg:flex-row ">
    <Sidebar/>
   <section className="flex-grow">
   {children}
   </section>
    </section>

    </body>;
}