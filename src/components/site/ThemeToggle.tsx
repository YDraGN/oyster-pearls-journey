import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

/** Nút đổi sáng/tối dạng viên ngọc trai đổi ánh sáng. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle, mounted } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
      aria-pressed={dark}
      className={cn(
        "group relative h-11 w-11 shrink-0 rounded-full border border-border bg-card backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <span
        className={cn(
          "animate-pearl-glow absolute inset-1.5 rounded-full transition-all duration-700",
          dark
            ? "[background-image:radial-gradient(circle_at_32%_28%,oklch(1_0_0/0.95),oklch(0.86_0.11_90)_45%,oklch(0.55_0.12_300))]"
            : "[background-image:radial-gradient(circle_at_32%_28%,oklch(1_0_0/0.95),oklch(0.95_0.03_230)_45%,oklch(0.82_0.08_15))]",
        )}
      />
      <span
        aria-hidden
        className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-white/70 opacity-0 transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-100"
      />
      <span className="sr-only">{mounted ? theme : "light"}</span>
    </button>
  );
}
