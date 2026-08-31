import { LockKeyhole } from "lucide-react";
import { MASCOT } from "@/lib/media";
import { Reveal, SectionHeading } from "./primitives";

const PARTNERS = [
  "Anh ngữ Hải Đăng",
  "The Listening Lab",
  "North Star English",
  "Campus 750+",
  "Blue Whale Academy",
];

/** Preview trạng thái khóa cho hệ sinh thái trung tâm đối tác chưa phát triển xong. */
export function PartnersLocked() {
  return (
    <section id="partners" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24">
      <Reveal>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.62fr]">
          <div>
            <SectionHeading
              index="06"
              kicker="Hệ sinh thái học tập"
              title="Sắp có thêm những vỏ sò đồng hành"
              description="ToeicSpace đang chuẩn bị không gian kết nối với các trung tâm luyện thi, để lộ trình của bạn tiếp tục liền mạch cả khi học online lẫn tại lớp."
            />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {PARTNERS.map((partner, index) => (
                <div
                  key={partner}
                  aria-disabled="true"
                  className="glass-card relative flex min-h-20 items-center gap-3 overflow-hidden px-4 py-3 opacity-75"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full [background-image:var(--gradient-pearl)] font-heading text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-heading text-sm font-bold">{partner}</p>
                    <p className="text-xs font-semibold text-muted-foreground">Đang chuẩn bị kết nối</p>
                  </div>
                  <LockKeyhole className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" />
                </div>
              ))}
            </div>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-muted-foreground">
              <LockKeyhole className="h-3.5 w-3.5" /> Tính năng đang được team hoàn thiện
            </p>
          </div>

          <div className="relative mx-auto max-w-xs">
            <span className="absolute inset-10 rounded-full bg-accent/25 blur-3xl" />
            <img
              src={MASCOT.locked}
              alt="Oysteic đang giữ khóa cho tính năng sắp ra mắt"
              loading="lazy"
              width={1024}
              height={1024}
              className="animate-float-soft relative w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
