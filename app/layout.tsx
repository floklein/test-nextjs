import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dametix",
  description: "Dametis 2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={cn(inter.className, "h-full")}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
