import { useState } from "react";
import { Check, Download, Layers3 } from "lucide-react";
import { pearlButton, Reveal } from "@/components/site/primitives";
import studyForeground from "@/assets/app-icons/study-pearl-foreground.png.asset.json";
import studyBackground from "@/assets/app-icons/study-pearl-background.png.asset.json";
import studyPreview from "@/assets/app-icons/study-pearl-preview.png.asset.json";
import focusForeground from "@/assets/app-icons/990-focus-foreground.png.asset.json";
import focusBackground from "@/assets/app-icons/990-focus-background.png.asset.json";
import focusPreview from "@/assets/app-icons/990-focus-preview.png.asset.json";
import togetherForeground from "@/assets/app-icons/together-foreground.png.asset.json";
import togetherBackground from "@/assets/app-icons/together-background.png.asset.json";
import togetherPreview from "@/assets/app-icons/together-preview.png.asset.json";
import { cn } from "@/lib/utils";

const ICONS = [
  {
    id: "study",
    name: "Study Pearl",
    note: "Học tập thân thiện",
    preview: studyPreview.url,
    foreground: studyForeground.url,
    background: studyBackground.url,
    foregroundName: "toeicspace-study-pearl-foreground.png",
    backgroundName: "toeicspace-study-pearl-background.png",
  },
  {
    id: "focus",
    name: "990 Focus",
    note: "Quyết tâm chạm 990",
    preview: focusPreview.url,
    foreground: focusForeground.url,
    background: focusBackground.url,
    foregroundName: "toeicspace-990-focus-foreground.png",
    backgroundName: "toeicspace-990-focus-background.png",
  },
  {
    id: "together",
    name: "Together",
    note: "Học cùng cộng đồng",
    preview: togetherPreview.url,
    foreground: togetherForeground.url,
    background: togetherBackground.url,
    foregroundName: "toeicspace-together-foreground.png",
    backgroundName: "toeicspace-together-background.png",
  },
] as const;

export function AppIconShowcase() {
  const [selected, setSelected] = useState<string>(ICONS[0].id);

  return (
    <section aria-labelledby="app-icon-title" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <div className="mx-auto flex w-fit items-center gap-2 text-muted-foreground">
            <Layers3 className="h-4 w-4" aria-hidden="true" />
            <span className="font-heading text-xs font-bold tracking-[0.22em] uppercase">
              Bộ nhận diện mobile
            </span>
          </div>
          <h2 id="app-icon-title" className="font-script mt-3 text-4xl text-gradient-sea sm:text-5xl">
            Chọn biểu tượng ToeicSpace
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ba hướng Oysteic được căn trong vùng an toàn ứng dụng. Mỗi mẫu gồm foreground trong suốt và background 1024 × 1024 px.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ICONS.map((icon, index) => {
            const active = selected === icon.id;
            return (
              <Reveal key={icon.id} delay={index * 90}>
                <article
                  className={cn(
                    "group overflow-hidden rounded-[var(--radius-xl)] border bg-card p-3 shadow-[var(--shadow-soft)] transition duration-300",
                    active ? "border-primary ring-2 ring-primary/30" : "border-border",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelected(icon.id)}
                    aria-pressed={active}
                    className="relative block aspect-square w-full overflow-hidden rounded-[var(--radius-lg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <img
                      src={icon.preview}
                      alt={`Biểu tượng ứng dụng ${icon.name} của ToeicSpace`}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                    />
                    {active && (
                      <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
                        <Check className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">Đã chọn</span>
                      </span>
                    )}
                  </button>

                  <div className="px-1 pb-1 pt-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-heading text-lg font-bold text-foreground">{icon.name}</h3>
                      <span className="text-xs text-muted-foreground">1024 px</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{icon.note}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <a
                        href={icon.foreground}
                        download={icon.foregroundName}
                        className={cn(pearlButton({ variant: "pearl", size: "sm" }), "px-2")}
                      >
                        <Download className="h-4 w-4" aria-hidden="true" /> Foreground
                      </a>
                      <a
                        href={icon.background}
                        download={icon.backgroundName}
                        className={cn(pearlButton({ variant: "pearl", size: "sm" }), "px-2")}
                      >
                        <Download className="h-4 w-4" aria-hidden="true" /> Background
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
