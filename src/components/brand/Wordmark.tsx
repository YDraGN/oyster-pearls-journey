import logo from "@/assets/toeicspace-logo.png";
import mark from "@/assets/oysteic-mark.png";
import { cn } from "@/lib/utils";

/** Logo thương hiệu: wordmark calligraphy + motif vỏ sò. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <img
        src={logo}
        alt="ToeicSpace"
        width={1536}
        height={512}
        className="h-9 w-auto drop-shadow-sm sm:h-11 dark:brightness-125"
      />
    </span>
  );
}

export function ShellMark({ className }: { className?: string }) {
  return (
    <img
      src={mark}
      alt=""
      aria-hidden="true"
      width={816}
      height={816}
      loading="lazy"
      className={cn("h-6 w-6 select-none", className)}
    />
  );
}
