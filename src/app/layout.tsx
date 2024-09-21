import { ShiftingDropDown } from "@/components/elements/ShiftingDropDown";
import { LinkIcon } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "../styles/app.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TODO: Megamenu design",
  description: "https://v0.dev/chat/0zPycNAg0-Z",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-bg`}>
        <ShiftingDropDown />
        <main className="-z-10 w-screen relative grid place-items-center h-screen bg-zinc-700">
          <Link
            className="flex items-center gap-2  text-gray-300 mx-auto text-center text-2xl text-white underline"
            href="https://v0.dev/chat/0zPycNAg0-Z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <LinkIcon />
            </span>
            Megamenu design - rewrite AI v0 modularized
          </Link>
        </main>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
