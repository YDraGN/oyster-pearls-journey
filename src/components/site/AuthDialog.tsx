import { useEffect, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { MASCOT } from "@/lib/media";
import { PearlButton } from "./primitives";
import { cn } from "@/lib/utils";

type Mode = "login" | "register";

type Errors = Partial<Record<"name" | "email" | "password" | "confirm", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function AuthDialog({
  open,
  mode,
  onOpenChange,
  onModeChange,
}: {
  open: boolean;
  mode: Mode;
  onOpenChange: (open: boolean) => void;
  onModeChange: (mode: Mode) => void;
}) {
  const [values, setValues] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!open) {
      setErrors({});
      setDone(false);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onOpenChange(false);
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (mode === "register" && values.name.trim().length < 2)
      next.name = "Cho Oysteic biết tên bạn nhé (tối thiểu 2 ký tự).";
    if (!emailRe.test(values.email)) next.email = "Email chưa đúng định dạng.";
    if (values.password.length < 6) next.password = "Mật khẩu cần ít nhất 6 ký tự.";
    if (mode === "register" && values.confirm !== values.password)
      next.confirm = "Mật khẩu nhập lại chưa khớp.";
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <button
        aria-label="Đóng"
        className="absolute inset-0 bg-[oklch(0.2_0.06_270/0.55)] backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={mode === "login" ? "Đăng nhập" : "Đăng ký"}
        className="animate-scale-in relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-popover shadow-[var(--shadow-soft)]"
      >
        {/* nắp vỏ sò hé mở */}
        <div className="relative h-24 overflow-hidden [background-image:var(--gradient-pearl)]">
          <div className="absolute inset-x-0 -bottom-10 h-20 rounded-[100%] bg-popover" />
          <img
            src={MASCOT.wave}
            alt="Oysteic"
            loading="lazy"
            className="animate-float-soft absolute left-1/2 top-3 h-24 w-24 -translate-x-1/2"
          />
        </div>

        <button
          onClick={() => onOpenChange(false)}
          aria-label="Đóng"
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-card text-foreground/70 transition hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-6 pb-7 pt-6">
          <div className="mx-auto mb-5 grid w-full max-w-[16rem] grid-cols-2 rounded-full border border-border bg-muted p-1">
            {(["login", "register"] as const).map((m) => (
              <button
                key={m}
                onClick={() => onModeChange(m)}
                className={cn(
                  "rounded-full py-2 font-heading text-sm font-bold transition-all",
                  mode === m
                    ? "bg-card text-foreground shadow-[var(--shadow-pearl)]"
                    : "text-muted-foreground",
                )}
              >
                {m === "login" ? "Đăng nhập" : "Đăng ký"}
              </button>
            ))}
          </div>

          {done ? (
            <div className="py-6 text-center">
              <p className="font-script text-3xl text-gradient-sea">Tuyệt vời!</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {mode === "login"
                  ? "Oysteic đã khép vỏ lại — giờ là lúc tập trung học thôi."
                  : "Vỏ sò của bạn đã sẵn sàng. Viên ngọc đầu tiên bắt đầu từ hôm nay."}
              </p>
              <PearlButton className="mt-5 w-full" onClick={() => onOpenChange(false)}>
                Bắt đầu
              </PearlButton>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-4">
              {mode === "register" && (
                <Field
                  label="Tên của bạn"
                  id="name"
                  value={values.name}
                  onChange={set("name")}
                  error={errors.name}
                  placeholder="Nguyễn Ngọc Trai"
                />
              )}
              <Field
                label="Email"
                id="email"
                type="email"
                value={values.email}
                onChange={set("email")}
                error={errors.email}
                placeholder="ban@toeicspace.vn"
              />
              <Field
                label="Mật khẩu"
                id="password"
                type="password"
                value={values.password}
                onChange={set("password")}
                error={errors.password}
                placeholder="Tối thiểu 6 ký tự"
              />
              {mode === "register" && (
                <Field
                  label="Nhập lại mật khẩu"
                  id="confirm"
                  type="password"
                  value={values.confirm}
                  onChange={set("confirm")}
                  error={errors.confirm}
                  placeholder="Nhập lại mật khẩu"
                />
              )}

              <PearlButton type="submit" size="lg" className="w-full">
                {mode === "login" ? "Vào không gian học" : "Tạo vỏ sò của tôi"}
              </PearlButton>
              <p className="text-center text-xs text-muted-foreground">
                {mode === "login" ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
                <button
                  type="button"
                  onClick={() => onModeChange(mode === "login" ? "register" : "login")}
                  className="font-bold text-foreground underline underline-offset-4"
                >
                  {mode === "login" ? "Đăng ký ngay" : "Đăng nhập"}
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; id: string; error?: string | undefined }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-heading text-sm font-bold">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        className={cn(
          "h-11 w-full rounded-xl border bg-card px-4 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-ring",
          error ? "border-destructive" : "border-input",
        )}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
