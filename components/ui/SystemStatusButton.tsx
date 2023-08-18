import { FC } from "react";
import clsx from "clsx";

type SystemStatus = "operational" | "downtime" | "degraded";

type SystemStatusButtonProps = {
  status: SystemStatus;
};

export const SystemStatusButton: FC<SystemStatusButtonProps> = ({ status }) => {
  return (
    <div className="flex w-min flex-row items-center gap-2 rounded-md border border-neutral-900 px-2 py-1 transition hover:bg-neutral-900">
      <div
        className={clsx("h-1.5 w-1.5 rounded-full", {
          "bg-green-500": status === "operational",
          "bg-orange-500": status === "degraded",
          "bg-rose-500": status === "downtime",
        })}
      />
      <a
        className="whitespace-nowrap text-xs font-normal text-white"
        href="https://status.markprompt.com"
        target="_blank"
        rel="noreferrer"
      >
        {(() => {
          switch (status) {
            case "degraded":
              return "Partial degradation";
            case "downtime":
              return "Services temporarily unavailable";
            default:
              return "All systems normal";
          }
        })()}
      </a>
    </div>
  );
};
