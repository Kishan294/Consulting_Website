import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FramerLayout from "@/components/FramerLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aksha Cloud",
  description: "Salesforce Consulting and Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FramerLayout>{children}</FramerLayout>
      </body>
    </html>
  );
}
