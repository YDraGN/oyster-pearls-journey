import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode, ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

/* ── Button (tái sử dụng toàn trang) ───────────────────── */
export const pearlButton = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "text-primary-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-pearl)] [background-image:var(--gradient-cta)]",
        pearl:
          "bg-card text-foreground border border-border backdrop-blur-md hover:-translate-y-0.5 hover:shadow-[var(--shadow-pearl)]",
        ghost: "text-foreground/80 hover:text-foreground hover:bg-muted/70",
        accent:
          "bg-accent text-accent-foreground hover:-translate-y-0.5 hover:shadow-[var(--shadow-pearl)]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[0.95rem]",
        lg: "h-13 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function PearlButton({
  className,
  variant,
  size,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof pearlButton>) {
  return <button className={cn(pearlButton({ variant, size }), className)} {...props} />;
}

/* ── Card giấy sổ tay ──────────────────────────────────── */
export function JournalCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("paper-card canvas-texture p-5", className)} {...props}>
      {children}
    </div>
  );
}

/* ── Washi tape trang trí ──────────────────────────────── */
export function WashiTape({ className }: { className?: string }) {
  return <span aria-hidden className={cn("washi w-24 rotate-[-6deg]", className)} />;
}

/* ── Tiêu đề section (calligraphy + số thứ tự bullet) ──── */
export function SectionHeading({
  index,
  kicker,
  title,
  description,
  className,
}: {
  index: string;
  kicker: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <header className={cn("max-w-2xl", className)}>
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-card font-heading text-sm font-bold text-foreground">
          {index}
        </span>
        <span className="font-heading text-xs font-bold tracking-[0.24em] text-muted-foreground uppercase">
          {kicker}
        </span>
      </div>
      <h2 className="font-script mt-3 text-4xl leading-tight text-gradient-sea sm:text-5xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
    </header>
  );
}

/* ── Wrapper reveal-on-scroll ──────────────────────────── */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

/* ── Hàng cuộn ngang trên mobile, lưới trên desktop ────── */
export function SwipeRow({
  children,
  className,
  desktopClassName = "md:grid md:grid-cols-3 md:gap-6 md:overflow-visible",
}: {
  children: ReactNode;
  className?: string;
  desktopClassName?: string;
}) {
  return (
    <div
      className={cn(
        "no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0",
        desktopClassName,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SwipeHint({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "mt-3 flex items-center gap-2 text-xs text-muted-foreground md:hidden",
        className,
      )}
    >
      <span className="inline-flex gap-1">
        <span className="h-1.5 w-6 rounded-full bg-primary/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
      </span>
      Vuốt ngang để xem tiếp
    </p>
  );
}

/* ── Bong bóng nền ─────────────────────────────────────── */
export function Bubbles({ count = 8 }: { count?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="animate-bubble absolute rounded-full border border-white/40 bg-white/20 backdrop-blur-[1px]"
          style={{
            left: `${(i * 97) % 96}%`,
            bottom: `${(i * 37) % 60}%`,
            width: `${6 + ((i * 5) % 16)}px`,
            height: `${6 + ((i * 5) % 16)}px`,
            animationDelay: `${(i * 0.9) % 6}s`,
            animationDuration: `${6 + (i % 4)}s`,
          }}
        />
      ))}
    </div>
  );
}
