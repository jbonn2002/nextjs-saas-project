import MaxWidthWrapper from "./MaxWidthWrapper";
import CountingNumbers from "./CountingNumbers";
import styles from "/styles/features.module.css";
import { GitHubIcon } from "./icons/github";

export default async function OpenSource() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/jbonn2002/nextjs-saas-project",
    {
      // optional – feel free to remove if you don't want to display star count
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      next: {
        revalidate: 3600,
      },
    }
  )
    .then((res) => res.json())
    .catch(() => ({ stargazers_count: 10000 }));

  return <OSSSection stars={stars} />;
}

export function OSSSection({ stars }: { stars: number }) {
  return (
    <div className="mt-20 pt-20 backdrop-blur-none">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-md text-center sm:max-w-xl">
          <h2 className="font-display gradient-heading text-4xl font-extrabold leading-tight sm:text-5xl sm:leading-tight">
            Proudly{" "}
            <span className="green_gradient border-none">open-source </span>
          </h2>
          <p className="mt-5 text-neutral-300 sm:text-lg">
            Our source code is available on GitHub - Go check it out and leave
            star, or use it as inspiration for your next project
          </p>
        </div>
        <div className="flex items-center justify-center py-10">
          <a
            href="https://github.com/jbonn2002/nextjs-saas-project"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center">
              <div className="flex h-10 items-center space-x-2 rounded-md border border-gray-600 bg-black p-4">
                <GitHubIcon className="h-5 w-5 text-white" />
                <p className="font-medium text-white">Star</p>
              </div>
              <div className={styles.label}>
                <CountingNumbers
                  value={stars}
                  className="font-display font-medium text-white"
                />
              </div>
            </div>
          </a>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
