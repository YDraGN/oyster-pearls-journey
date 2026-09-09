import logo from "@/assets/toeicspace-logo.png";
import logoInk from "@/assets/toeicspace-logo-ink.png";
import mark from "@/assets/oysteic-mark.png";
import { cn } from "@/lib/utils";

/** Logo thương hiệu: wordmark calligraphy + motif vỏ sò. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {/* Light mode: bản mực xanh đêm/tím để nổi trên nền pastel. */}
      <img
        src={logoInk}
        alt="ToeicSpace"
        width={1536}
        height={512}
        className="h-11 w-auto drop-shadow-[0_1px_2px_rgba(255,255,255,0.55)] sm:h-13 dark:hidden"
      />
      {/* Dark mode: bản pastel sáng trên nền đêm. */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        width={1536}
        height={512}
        className="hidden h-11 w-auto brightness-150 contrast-125 drop-shadow-md sm:h-13 dark:block"
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
