import { Wordmark } from "@/components/brand/Wordmark";
import { ThemeToggle } from "./ThemeToggle";
import { PearlButton } from "./primitives";

export function Header({
  onAuth,
}: {
  onAuth: (mode: "login" | "register") => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <a href="#hero" className="flex min-w-0 items-center" aria-label="ToeicSpace — trang chủ">
          <Wordmark />
        </a>

        <div className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-2 py-1.5 backdrop-blur-md">
          <ThemeToggle className="h-9 w-9" />
          <PearlButton variant="ghost" size="sm" onClick={() => onAuth("login")}>
            Đăng nhập
          </PearlButton>
          <PearlButton size="sm" onClick={() => onAuth("register")}>
            Đăng ký
          </PearlButton>
        </div>
      </div>
    </header>
  );
}
