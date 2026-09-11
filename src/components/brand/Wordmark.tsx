import mark from "@/assets/oysteic-mark.png";
import { cn } from "@/lib/utils";

/** Logo thương hiệu: Oysteic, wordmark thanh lịch và ánh ngọc chuyển sắc. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "brand-lockup group relative inline-flex h-14 items-center gap-1.5 sm:h-16 sm:gap-2",
        className,
      )}
      aria-label="ToeicSpace"
    >
      <span className="brand-mark relative grid h-12 w-12 shrink-0 place-items-center sm:h-14 sm:w-14">
        <span className="brand-orbit absolute inset-1 rounded-full" aria-hidden="true" />
        <img
          src={mark}
          alt=""
          aria-hidden="true"
          width={816}
          height={816}
          className="relative z-10 h-full w-full select-none object-contain drop-shadow-[var(--shadow-brand-mark)]"
        />
      </span>

      <span className="relative flex min-w-0 flex-col pb-0.5">
        <span className="flex items-baseline whitespace-nowrap leading-none" aria-hidden="true">
          <span className="brand-wordmark brand-wordmark-primary">Toeic</span>
          <span className="brand-wordmark brand-wordmark-secondary">Space</span>
        </span>
        <span className="brand-signature-line mt-1 h-px w-full" aria-hidden="true" />
        <span className="brand-tagline mt-1 pl-0.5 text-[7px] font-bold uppercase sm:text-[8px]">
          Practice. Shine. 990.
        </span>
        <span className="brand-pearl absolute -right-1 top-0 h-1.5 w-1.5 rounded-full sm:-right-2 sm:h-2 sm:w-2" aria-hidden="true" />
      </span>
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
