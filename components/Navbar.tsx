"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/Button";
import { User } from "@clerk/nextjs/server";

export default function NavBar({ user }: { user: User | null }) {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/cauldron-svgrepo-com.svg"
              alt="Precedent logo"
              width="50"
              height="50"
              className="mr-2 rounded-sm filter"
            />
            <p className="text-white">Exemplarium</p>
          </Link>
          <div>
            <div className="flex gap-2 font-display text-white">
              <SignedIn>
                Welcome {user?.firstName} <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>

            <SignedOut>
              <SignInButton>
                <Button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => {}}
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </>
  );
}
