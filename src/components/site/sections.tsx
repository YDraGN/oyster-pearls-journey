import { useState } from "react";
import {
  Headphones,
  BookOpen,
  Play,
  Target,
  CalendarCheck,
  Trophy,
  Shell,
  Sparkles,
  RotateCcw,
  Check,
} from "lucide-react";
import { MASCOT } from "@/lib/media";
import {
  JournalCard,
  PearlButton,
  Reveal,
  SectionHeading,
  SwipeHint,
  SwipeRow,
  WashiTape,
} from "./primitives";
import { cn } from "@/lib/utils";

/* ── a1. Listening ─────────────────────────────────────── */
const LISTENING = [
  { part: "Part 1", name: "Mô tả tranh", count: "6 câu", note: "Nghe & chọn tranh đúng" },
  { part: "Part 2", name: "Hỏi – đáp", count: "25 câu", note: "Phản xạ câu hỏi ngắn" },
  { part: "Part 3", name: "Hội thoại", count: "39 câu", note: "Nghe hội thoại 2–3 người" },
  { part: "Part 4", name: "Bài nói ngắn", count: "30 câu", note: "Thông báo, bản tin" },
];

export function ListeningSection() {
  return (
    <Section id="listening">
      <Reveal>
        <div className="grid items-end gap-6 sm:grid-cols-[1fr_auto]">
          <SectionHeading
            index="01"
            kicker="Phòng luyện tập"
            title="Nghe trong tĩnh lặng"
            description="Mỗi Part là một căn phòng nhỏ trong vỏ sò: chọn phòng, đóng cửa lại, và chỉ còn tiếng audio với bạn."
          />
          <img
            src={MASCOT.listen}
            alt="Oysteic đeo tai nghe luyện Listening"
            loading="lazy"
            width={1024}
            height={1024}
            className="animate-float-soft hidden w-36 drop-shadow-xl sm:block"
          />
        </div>
      </Reveal>

      <Reveal delay={120} className="mt-8">
        <SwipeRow desktopClassName="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4 md:overflow-visible">
          {LISTENING.map((p, i) => (
            <article
              key={p.part}
              className="paper-card canvas-texture group relative min-w-[15rem] shrink-0 snap-center p-5 transition-transform duration-500 hover:-translate-y-1.5 md:min-w-0"
            >
              <WashiTape className="-top-2 left-6 w-16" />
              <div className="flex items-center justify-between">
                <span className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                  {p.part}
                </span>
                <Headphones className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="mt-2 font-heading text-xl">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-bold">{p.count}</span>
                <span className="grid h-9 w-9 place-items-center rounded-full [background-image:var(--gradient-pearl)] transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-4 w-4 text-foreground/80" />
                </span>
              </div>
              <span className="pointer-events-none absolute bottom-2 right-4 font-script text-3xl opacity-15">
                {i + 1}
              </span>
            </article>
          ))}
        </SwipeRow>
        <SwipeHint />
      </Reveal>

      {/* mockup trình phát */}
      <Reveal delay={200} className="mt-8">
        <div className="glass-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full [background-image:var(--gradient-cta)]">
            <Play className="h-5 w-5 text-primary-foreground" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-heading font-bold">Part 3 · Conversation 12</p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <span className="block h-full w-2/5 rounded-full [background-image:var(--gradient-cta)]" />
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>00:42</span>
              <span>01:48</span>
            </div>
          </div>
          <div className="flex gap-2">
            <PearlButton variant="pearl" size="sm">
              0.75x
            </PearlButton>
            <PearlButton variant="pearl" size="sm">
              Xem transcript
            </PearlButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ── a2. Reading ───────────────────────────────────────── */
const READING = [
  { part: "Part 5", name: "Hoàn thành câu", count: "30 câu", note: "Ngữ pháp & từ loại" },
  { part: "Part 6", name: "Hoàn thành đoạn", count: "16 câu", note: "Điền câu vào ngữ cảnh" },
  { part: "Part 7", name: "Đọc hiểu", count: "54 câu", note: "Đơn & đa văn bản" },
];

export function ReadingSection() {
  const answers = ["present", "presence", "presenting", "presentation"];
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;

  return (
    <Section id="reading">
      <Reveal>
        <div className="grid items-end gap-6 sm:grid-cols-[1fr_auto]">
          <SectionHeading
            index="02"
            kicker="Phòng luyện tập"
            title="Đọc như lật từng trang sổ"
            description="Part 5 đến Part 7 được dựng như những trang giấy kẻ chấm: câu hỏi bên trái, ghi chú giải thích bên phải."
          />
          <img
            src={MASCOT.read}
            alt="Oysteic đang đọc sách luyện TOEIC"
            loading="lazy"
            width={1024}
            height={1024}
            className="animate-float-soft hidden w-36 drop-shadow-xl sm:block"
          />
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal delay={100}>
          <SwipeRow desktopClassName="md:grid md:grid-cols-1 md:gap-4 md:overflow-visible">
            {READING.map((p) => (
              <article
                key={p.part}
                className="paper-card min-w-[15rem] shrink-0 snap-center p-5 transition-transform duration-500 hover:-translate-y-1 md:min-w-0"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl [background-image:var(--gradient-pearl)]">
                    <BookOpen className="h-4 w-4 text-foreground/80" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-heading text-lg leading-tight">{p.name}</p>
                    <p className="text-xs font-medium text-muted-foreground">
                      {p.part} · {p.count} · {p.note}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </SwipeRow>
          <SwipeHint />
        </Reveal>

        <Reveal delay={180}>
          <div className="glass-card journal-dots p-5">
            <p className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
              Part 5 · Câu 14
            </p>
            <p className="mt-3 font-medium leading-relaxed">
              The marketing team will ______ the new campaign results at Friday's meeting.
            </p>
            <ul className="mt-4 space-y-2">
              {answers.map((opt, i) => {
                const isSelected = selected === i;
                const correct = i === 0;
                return (
                  <li key={opt}>
                    <button
                      type="button"
                      onClick={() => setSelected(i)}
                      aria-pressed={isSelected}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        !answered && "border-border bg-card/70 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10",
                        answered && correct && "border-primary bg-primary/15 font-bold",
                        answered && isSelected && !correct && "border-destructive bg-destructive/10",
                        answered && !isSelected && !correct && "border-border bg-card/40 opacity-65",
                      )}
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-current text-xs">
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                      {answered && correct && <Check className="ml-auto h-4 w-4 text-primary" />}
                      {answered && isSelected && !correct && (
                        <span className="ml-auto font-bold text-destructive">Chưa đúng</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
            {answered ? (
              <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl bg-muted/85 p-3">
                <p className="text-xs font-medium leading-relaxed text-muted-foreground">
                  {selected === 0
                    ? "Chính xác! Sau trợ động từ “will” cần động từ nguyên thể — chọn “present”."
                    : "Thử lại nhé: sau “will” cần một động từ nguyên thể. Đáp án đúng là “present”."}
                </p>
                <img
                  src={selected === 0 ? MASCOT.success : MASCOT.question}
                  alt={selected === 0 ? "Oysteic chúc mừng" : "Oysteic gợi ý thử lại"}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-16 w-16 shrink-0 object-contain"
                />
              </div>
            ) : (
              <p className="mt-4 rounded-xl bg-muted/75 p-3 text-xs font-semibold text-muted-foreground">
                Chọn một đáp án để xem giải thích của Oysteic.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ── b. Roadmap ────────────────────────────────────────── */
const MILESTONES = [
  { icon: Target, title: "Đặt mục tiêu", desc: "Chọn số điểm & mốc thời gian thi", meta: "Tuần 0" },
  { icon: CalendarCheck, title: "Kiểm tra đầu vào", desc: "Bài test ngắn xác định điểm hiện tại", meta: "Tuần 1" },
  { icon: Headphones, title: "Nền tảng nghe – đọc", desc: "Lịch học theo Part yếu nhất", meta: "Tuần 2–6" },
  { icon: Trophy, title: "Full test & về đích", desc: "Đề đầy đủ, phân tích lỗi sai", meta: "Tuần 7–10" },
];

export function RoadmapSection() {
  return (
    <Section id="roadmap">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <Reveal>
          <SectionHeading
            index="03"
            kicker="Cá nhân hoá"
            title="Lộ trình của riêng bạn"
            description="Đặt mục tiêu điểm số và ngày thi, ToeicSpace vẽ lại hành trình theo đúng năng lực hiện tại của bạn — như một tuyến hải trình có từng điểm dừng."
          />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <JournalCard className="flex items-center gap-3 px-4 py-3">
              <Target className="h-4 w-4" />
              <span className="font-heading text-sm font-bold">Mục tiêu 750+</span>
            </JournalCard>
            <JournalCard className="flex items-center gap-3 px-4 py-3">
              <CalendarCheck className="h-4 w-4" />
              <span className="font-heading text-sm font-bold">Thi sau 10 tuần</span>
            </JournalCard>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <img
            src={MASCOT.goal}
            alt="Oysteic chinh phục mục tiêu 990 điểm"
            loading="lazy"
            width={1024}
            height={1024}
            className="animate-float-soft mx-auto w-56 drop-shadow-2xl sm:w-72"
          />
        </Reveal>
      </div>

      <Reveal delay={160} className="mt-10">
        <div className="relative">
          <span
            aria-hidden
            className="absolute left-5 top-0 bottom-0 w-px bg-[repeating-linear-gradient(180deg,var(--dot)_0_6px,transparent_6px_14px)] md:left-0 md:top-6 md:h-px md:w-full md:bg-[repeating-linear-gradient(90deg,var(--dot)_0_6px,transparent_6px_14px)]"
          />
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory flex-col gap-5 overflow-x-auto px-4 md:mx-0 md:flex-row md:px-0">
            {MILESTONES.map(({ icon: Icon, title, desc, meta }, i) => (
              <div key={title} className="relative min-w-[15rem] flex-1 snap-center pl-14 md:pl-0">
                <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-border bg-card shadow-[var(--shadow-pearl)] md:relative md:mb-4">
                  <Icon className="h-4 w-4" />
                </span>
                <JournalCard>
                  <p className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                    {meta}
                  </p>
                  <h3 className="mt-1 font-heading text-lg">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <span
                      className="block h-full rounded-full [background-image:var(--gradient-cta)]"
                      style={{ width: `${100 - i * 24}%` }}
                    />
                  </div>
                </JournalCard>
              </div>
            ))}
          </div>
        </div>
        <SwipeHint />
      </Reveal>
    </Section>
  );
}

/* ── c. Collection ─────────────────────────────────────── */
const COLLECTIONS = [
  { name: "Từ đã tra hôm nay", count: 12, tone: "var(--sunlit)" },
  { name: "Business & Email", count: 48, tone: "var(--sky-soft)" },
  { name: "Part 7 khó nhằn", count: 26, tone: "var(--blush)" },
  { name: "Sai nhiều nhất", count: 9, tone: "var(--sea)" },
];

export function CollectionSection() {
  return (
    <Section id="collection">
      <Reveal>
        <SectionHeading
          index="04"
          kicker="Tự động"
          title="Bộ sưu tập ngọc trai từ vựng"
          description="Mỗi từ bạn tra cứu hay làm sai đều được nhặt lại và xếp vào đúng chiếc vỏ sò của nó — không cần tự tay ghi chép."
        />
      </Reveal>

      <Reveal delay={120} className="mt-8">
        <SwipeRow desktopClassName="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4 md:overflow-visible">
          {COLLECTIONS.map((c) => (
            <article
              key={c.name}
              className="paper-card group min-w-[14rem] shrink-0 snap-center p-5 transition-transform duration-500 hover:-translate-y-1.5 md:min-w-0"
            >
              <span
                className="animate-pearl-glow grid h-14 w-14 place-items-center rounded-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 32% 28%, oklch(1 0 0 / 0.9), ${c.tone})`,
                }}
              >
                <Shell className="h-5 w-5 text-foreground/70" />
              </span>
              <h3 className="mt-4 font-heading text-lg leading-tight">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.count} từ đã lưu</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["negotiate", "invoice", "delay"].map((w) => (
                  <span key={w} className="rounded-full bg-muted px-2.5 py-1 text-xs">
                    {w}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </SwipeRow>
        <SwipeHint />
      </Reveal>
    </Section>
  );
}

/* ── d. AI flashcard ───────────────────────────────────── */
export function AiSection() {
  return (
    <Section id="ai">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading
            index="05"
            kicker="Học cùng AI"
            title="Flashcard & trắc nghiệm dùng từ"
            description="AI tạo câu hỏi về cách dùng từ trong ngữ cảnh thật, không chỉ dịch nghĩa. Lật thẻ, trả lời, và để viên ngọc dày thêm một lớp."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <PearlButton size="lg">
              <Sparkles className="h-4 w-4" /> Luyện thử 5 thẻ
            </PearlButton>
            <PearlButton variant="pearl" size="lg">
              Xem cách chấm
            </PearlButton>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative">
            <div className="paper-card absolute -top-4 left-6 right-6 h-full rotate-[-4deg] opacity-60" />
            <div className="glass-card canvas-texture relative p-6">
              <div className="flex items-center justify-between">
                <span className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                  Flashcard 3/12
                </span>
                <RotateCcw className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="font-script mt-4 text-5xl text-gradient-sea">negotiate</p>
              <p className="mt-1 text-sm text-muted-foreground">/nɪˈɡoʊ.ʃi.eɪt/ · động từ</p>

              <div className="mt-5 rounded-2xl bg-muted/70 p-4">
                <p className="font-heading text-sm font-bold">Chọn câu dùng từ đúng ngữ cảnh</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center gap-2 rounded-xl border border-primary bg-primary/10 px-3 py-2 font-bold">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    We need to negotiate the delivery terms with the supplier.
                  </li>
                  <li className="rounded-xl border border-border bg-card/60 px-3 py-2">
                    She negotiated the report to her manager yesterday.
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Oysteic gợi ý: “negotiate” đi cùng terms, contract, price — không dùng cho việc gửi
                tài liệu.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ── shell chung ───────────────────────────────────────── */
function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24">
      {children}
    </section>
  );
}
