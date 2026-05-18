import { Link } from "@tanstack/react-router";
import { Sparkles, Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-br from-sky/40 via-blossom/30 to-sunny/40">
      <div className="absolute -top-10 left-1/2 h-40 w-[140%] -translate-x-1/2 rounded-[100%] bg-background" />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-24 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky to-grape text-primary-foreground shadow-playful">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="font-display text-lg font-bold">TK Pertiwi Kalikondang</div>
                <div className="text-xs text-muted-foreground">Ceria, Kreatif, Berkarakter</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-foreground/70">
              Taman kanak-kanak modern yang mendampingi tumbuh kembang anak dengan
              pendekatan bermain sambil belajar yang hangat dan penuh warna.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-pop hover:bg-tangerine hover:text-tangerine-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-pop hover:bg-sky hover:text-sky-foreground">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-foreground/80">Halaman</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-foreground/70 hover:text-primary">Home</Link></li>
              <li><Link to="/kelompok-belajar" className="text-foreground/70 hover:text-primary">Kelompok Belajar</Link></li>
              <li><Link to="/berita" className="text-foreground/70 hover:text-primary">Berita</Link></li>
              <li><Link to="/spmb" className="text-foreground/70 hover:text-primary">SPMB</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-foreground/80">Kontak</h4>
            <ul className="mt-4 space-y-3 text-sm text-foreground/75">
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-tangerine" /> Kalikondang, Demak, Jawa Tengah</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 text-leaf-foreground" /> 0812-3456-7890</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-grape-foreground" /> halo@tkpertiwi-kalikondang.sch.id</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-foreground/10 pt-6 text-xs text-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} TK Pertiwi Kalikondang. Dibuat dengan ❤ untuk anak-anak Indonesia.</p>
          <p>Bermain · Belajar · Bertumbuh</p>
        </div>
      </div>
    </footer>
  );
}
