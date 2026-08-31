import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Headphones, BookOpen, Route as RouteIcon, Sparkles } from "lucide-react";
import { MASCOT, SCENE } from "@/lib/media";
import nightSea from "@/assets/night-sea.jpg";
import { PearlButton, Bubbles } from "./primitives";
import { cn } from "@/lib/utils";

const FEATURES = [
  { icon: Headphones, title: "Luyện Listening", desc: "Part 1–4 theo từng dạng" },
  { icon: BookOpen, title: "Luyện Reading", desc: "Part 5–7 có giải thích" },
  { icon: RouteIcon, title: "Lộ trình riêng", desc: "Đặt mục tiêu, có kế hoạch" },
  { icon: Sparkles, title: "Từ vựng cùng AI", desc: "Flashcard & trắc nghiệm" },
];

export function HeroSlider({ onAuth }: { onAuth: (mode: "login" | "register") => void }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, duration: 32 });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  useEffect(() => {
    if (!embla || paused) return;
    const id = window.setInterval(() => embla.scrollNext(), 6500);
    return () => window.clearInterval(id);
  }, [embla, paused]);

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Bối cảnh: bầu trời → biển, ngày và đêm */}
      <img
        src={SCENE.day}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover dark:opacity-0"
      />
      <img
        src={nightSea}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 dark:opacity-100"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,var(--background))]" />
      <Bubbles count={10} />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pt-28 pb-24 sm:px-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {/* Slide 1 */}
            <Slide>
              <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="font-heading text-xs font-bold tracking-[0.3em] text-foreground/70 uppercase">
                    Nền tảng luyện thi TOEIC
                  </p>
                  <h1 className="font-script mt-3 text-5xl leading-[1.05] text-gradient-sea sm:text-7xl">
                    ToeicSpace
                  </h1>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/80 sm:text-lg">
                    Ngoài kia sóng vẫn ồn ào. Trong này chỉ có bạn, một viên ngọc đang lớn dần
                    sau mỗi buổi học.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <PearlButton size="lg" onClick={() => onAuth("register")}>
                      Bắt đầu học miễn phí
                    </PearlButton>
                  </div>
                </div>
                <img
                  src={MASCOT.wave}
                  alt="Oysteic — linh vật của ToeicSpace vẫy tay chào"
                  width={1024}
                  height={1024}
                  className="animate-float-soft mx-auto w-56 drop-shadow-2xl sm:w-72 md:w-full md:max-w-sm"
                />
              </div>
            </Slide>

            {/* Slide 2 */}
            <Slide>
              <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
                <img
                  src={MASCOT.celebrate}
                  alt="Oysteic ngồi yên trong vỏ sò"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="animate-float-soft mx-auto w-52 drop-shadow-2xl sm:w-64 md:w-full md:max-w-xs"
                />
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-heading text-xs font-bold">
                    Làm quen với Oysteic
                  </span>
                  <h2 className="font-script mt-3 text-4xl leading-tight text-gradient-sea sm:text-6xl">
                    Người bạn trong vỏ sò
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/80">
                    Oysteic sống giữa vùng biển ồn ào — nơi mọi xao nhãng đều là tiếng sóng. Bên
                    trong vỏ là một khoảng lặng, nơi viên ngọc trai lớn thêm một lớp xà cừ sau mỗi
                    buổi học. Và khi bạn sẵn sàng, cậu ấy khép vỏ lại: “Ồn ào ở ngoài kia, còn giờ
                    là lúc tập trung.”
                  </p>
                </div>
              </div>
            </Slide>

            {/* Slide 3 */}
            <Slide>
              <div>
                <h2 className="font-script text-4xl leading-tight text-gradient-sea sm:text-6xl">
                  Bốn nhóm tính năng chính
                </h2>
                <p className="mt-3 max-w-xl text-foreground/80">
                  Mọi thứ bạn cần cho hành trình TOEIC, gói gọn trong một không gian yên tĩnh.
                </p>
                <div className="no-scrollbar mt-7 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-4">
                  {FEATURES.map(({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="glass-card min-w-[15rem] shrink-0 snap-center p-5 sm:min-w-0"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-2xl [background-image:var(--gradient-pearl)]">
                        <Icon className="h-5 w-5 text-foreground/80" />
                      </span>
                      <h3 className="mt-3 font-heading text-lg">{title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Slide>
          </div>
        </div>

        {/* Điều hướng */}
        <div className="mt-10 flex items-center gap-4">
          <div className="flex gap-2">
            <PearlButton
              variant="pearl"
              size="icon"
              aria-label="Slide trước"
              onClick={() => embla?.scrollPrev()}
            >
              <ChevronLeft className="h-5 w-5" />
            </PearlButton>
            <PearlButton
              variant="pearl"
              size="icon"
              aria-label="Slide sau"
              onClick={() => embla?.scrollNext()}
            >
              <ChevronRight className="h-5 w-5" />
            </PearlButton>
          </div>
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                aria-label={`Chuyển tới slide ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={cn(
                  "rounded-full transition-all duration-500",
                  selected === i
                    ? "h-3 w-8 [background-image:var(--gradient-cta)]"
                    : "h-3 w-3 bg-foreground/25 hover:bg-foreground/40",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Slide({ children }: { children: React.ReactNode }) {
  return <div className="min-w-0 flex-[0_0_100%] px-0.5">{children}</div>;
}
