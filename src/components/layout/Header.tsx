import { Link } from "@tanstack/react-router";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/kelompok-belajar", label: "Kelompok Belajar" },
  { to: "/berita", label: "Berita" },
  { to: "/spmb", label: "SPMB" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky to-grape text-primary-foreground shadow-playful transition-transform group-hover:rotate-6">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold text-foreground md:text-lg">TK Pertiwi</span>
            <span className="text-[11px] font-medium text-muted-foreground md:text-xs">Kalikondang</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-primary/15 text-primary" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/spmb"
            className="ml-2 rounded-full bg-tangerine px-5 py-2 text-sm font-bold text-tangerine-foreground shadow-playful transition hover:-translate-y-0.5"
          >
            Daftar Sekarang
          </Link>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "bg-primary/15 text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/spmb"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-tangerine px-4 py-3 text-center text-sm font-bold text-tangerine-foreground"
            >
              Daftar SPMB
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
