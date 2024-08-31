 import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/app.scss";
import { ShiftingDropDown } from "@/components/elements/ShiftingDropDown";

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
  return (
    <html lang="en">
      <body className={inter.className}>
     <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black -z-10" />
        <ShiftingDropDown />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
