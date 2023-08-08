import NavBar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import clsx from "clsx";
import { inter, sfPro } from "./fonts";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={clsx(sfPro.variable, inter.variable)}>
          <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
          <NavBar />
          <main className="flex min-h-screen w-full flex-col items-center py-32">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
