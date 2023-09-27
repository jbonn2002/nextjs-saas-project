import "/styles/globals.css";
import type { Metadata } from "next";
import clsx from "clsx";
import { inter, sfPro } from "./fonts";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/Nav";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Exemplarium",
  description: "Saas nextjs building blocks",
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
          <div className="fixed h-screen w-full bg-gradient-to-b from-black to-gray-600 main" />

          <Nav />

          <main className="flex w-full flex-col items-center py-32">
            {children}
          </main>

          <div className="relative mx-auto max-w-screen-xl px-6 sm:px-8">
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
