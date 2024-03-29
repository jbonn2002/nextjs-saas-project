import Link from "next/link";
import React from "react";
import { SystemStatusButton } from "./ui/SystemStatusButton";
import { GitHubIcon } from "./icons/github";
import TwitterIcon from "./icons/twitter";
import { DiscordIcon } from "./icons/discord";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-1 items-center gap-8 border-t border-neutral-900/50 px-6 pt-12 pb-20 sm:grid-cols-2 sm:py-12 sm:px-8 lg:grid-cols-3">
      <div className="flex flex-row items-center justify-center gap-6 text-sm text-white md:justify-start">
        <SystemStatusButton status={"operational"} />
        <Link href="/" className="opacity-80 hover:opacity-100">
          Terms
        </Link>
        <Link href="/" className="opacity-80 hover:opacity-100">
          Privacy
        </Link>
      </div>
      <div className="hidden flex-row items-baseline justify-center gap-1 text-center text-sm text-white lg:flex"></div>
      <div className="mr-0 flex flex-row items-center justify-center gap-4 text-white sm:mr-8 sm:justify-end md:mr-12 xl:mr-0">
        <a
          className="transition hover:text-neutral-500"
          href="https://github.com/jbonn2002/nextjs-saas-project"
          aria-label="Exemplarium on GitHub"
          target="_blank"
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
        <a
          className="transition hover:text-neutral-500"
          href="https://twitter.com/jordybdev"
          aria-label="Jordybdev on Twitter"
          target="_blank"
        >
          <TwitterIcon className="h-5 w-5" />
        </a>
        <a
          className="transition hover:text-neutral-500"
          href="https://discord.com/"
          aria-label="Discord"
          target="_blank"
        >
          <DiscordIcon className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
};
