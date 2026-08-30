import { Mail, MapPin, Facebook, Youtube, Instagram } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { MASCOT } from "@/lib/media";

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden pt-24">
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        className="absolute inset-x-0 top-0 h-20 w-full text-[var(--sea)] opacity-50"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,72 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="font-script mt-3 text-2xl text-gradient-sea">
              Học chậm mà chắc, như ngọc trai lớn dần.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">
              Liên hệ
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" /> hello@toeicspace.vn
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Tầng 3, 27 Nguyễn Huệ, Quận 1, TP.HCM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">
              Kết nối
            </h3>
            <div className="mt-3 flex gap-2">
              {[Facebook, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#hero"
                  aria-label="Mạng xã hội ToeicSpace"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-pearl)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ToeicSpace. Made with Oysteic.
          </p>
          <img
            src={MASCOT.calm}
            alt="Oysteic"
            loading="lazy"
            className="animate-float-soft h-14 w-14"
          />
        </div>
      </div>
    </footer>
  );
}
