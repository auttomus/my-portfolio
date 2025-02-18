import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";

import "./globals.css";

const museomoderno = MuseoModerno({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Auttomus Portfolio",
  description: "Auttomus personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${museomoderno.className} overflow-hidden overflow-x-hidden antialiased bg-light`}
      >
        {children}
      </body>
    </html>
  );
}
