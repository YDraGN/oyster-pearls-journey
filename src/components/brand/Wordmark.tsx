import logo from "@/assets/toeicspace-logo.png";
import mark from "@/assets/oysteic-mark.png";
import { cn } from "@/lib/utils";

/** Logo thương hiệu: wordmark calligraphy + motif vỏ sò. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        // Light mode: đặt wordmark pastel trên nền đêm để bật tương phản; dark mode ngược lại.
        "inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 shadow-[var(--shadow-pearl)] [background-image:linear-gradient(135deg,oklch(0.26_0.08_282),oklch(0.2_0.07_268))] dark:bg-none dark:px-0 dark:py-0 dark:shadow-none",
        className,
      )}
    >
      <img
        src={logo}
        alt="ToeicSpace"
        width={1536}
        height={512}
        className="h-10 w-auto contrast-125 drop-shadow-md saturate-150 sm:h-12 dark:brightness-150 dark:contrast-125"
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
