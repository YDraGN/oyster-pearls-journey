import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/sections";
import { cn } from "@/lib/utils";

/** Dải "chuỗi ngọc trai" bên lề: viên ngọc sáng dần theo section đang xem. */
export function BulletRail() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5], rootMargin: "-30% 0px -40% 0px" },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Mục lục trang"
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="relative flex flex-col items-center gap-6">
        <span
          aria-hidden
          className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,var(--dot),transparent)]"
        />
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id} className="group relative">
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                className="block p-1"
              >
                <span
                  className={cn(
                    "block rounded-full transition-all duration-500",
                    isActive
                      ? "h-3.5 w-3.5 [background-image:var(--gradient-pearl)] shadow-[var(--shadow-pearl)]"
                      : "h-2 w-2 bg-[var(--dot)] group-hover:bg-foreground/40",
                  )}
                />
              </a>
              <span
                className={cn(
                  "pointer-events-none absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-card px-3 py-1 font-heading text-xs font-bold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100",
                )}
              >
                {s.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
