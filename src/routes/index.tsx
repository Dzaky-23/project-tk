import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles, Heart, Palette, BookOpen, Music, Trees,
  ArrowRight, Quote, Star, ChevronLeft, ChevronRight,
} from "lucide-react";
import { FloatingDecor, Blob } from "@/components/site/Decor";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TK Pertiwi Kalikondang — Ceria, Kreatif, Berkarakter" },
      { name: "description", content: "Selamat datang di TK Pertiwi Kalikondang. Tempat bermain, belajar, dan bertumbuh untuk generasi Indonesia yang ceria dan berkarakter." },
    ],
  }),
  component: HomePage,
});

const slides = [
  { img: hero1, tag: "Bermain Bersama" },
  { img: hero2, tag: "Kreativitas Tanpa Batas" },
  { img: hero3, tag: "Cerita & Imajinasi" },
];

function HomePage() {
  return (
    <>
      <Hero />
      <VisiMisi />
      <Keunggulan />
      <Aktivitas />
      <Galeri />
      <Testimoni />
      <CtaSpmb />
    </>
  );
}

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative overflow-hidden bg-confetti pb-20 pt-10 md:pt-16">
      <FloatingDecor />
      <Blob className="absolute -left-32 top-20 h-[420px] w-[420px] text-sunny/50" />
      <Blob className="absolute -right-40 bottom-0 h-[480px] w-[480px] text-sky/50" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-8 lg:gap-16">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-xs font-bold text-primary shadow-pop">
            <Sparkles className="h-4 w-4" /> Pendaftaran SPMB 2026/2027 Dibuka!
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl lg:text-[68px]">
            Membentuk{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Generasi Ceria</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 rounded-full bg-sunny" />
            </span>
            , Kreatif, dan{" "}
            <span className="text-tangerine">Berkarakter</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-foreground/75 md:text-lg">
            TK Pertiwi Kalikondang adalah rumah kedua bagi si kecil — tempat
            bermain, belajar, dan menemukan keajaiban setiap hari bersama guru
            yang hangat dan teman-teman seusianya.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/spmb" className="group inline-flex items-center gap-2 rounded-full bg-tangerine px-7 py-4 text-base font-bold text-tangerine-foreground shadow-playful transition hover:-translate-y-0.5">
              Daftar SPMB
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link to="/kelompok-belajar" className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-base font-bold text-foreground shadow-pop transition hover:-translate-y-0.5">
              Lihat Kelompok Belajar
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[g3, g1, g2].map((s, idx) => (
                <img key={idx} src={s} alt="" className="h-11 w-11 rounded-full border-4 border-background object-cover" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-tangerine">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-semibold text-foreground/70">Dipercaya 200+ keluarga di Kalikondang</p>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative animate-fade-up">
          <div className="relative aspect-[5/6] overflow-hidden rounded-[40px] border-[6px] border-background shadow-playful">
            {slides.map((s, idx) => (
              <img
                key={idx}
                src={s.img}
                alt={s.tag}
                width={1536}
                height={1024}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                  i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/55 to-transparent p-5">
              <span className="rounded-full bg-background/95 px-4 py-1.5 text-xs font-bold text-foreground">
                {slides[i].tag}
              </span>
            </div>
            <button
              onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 shadow-pop hover:scale-110"
              aria-label="Prev"
            ><ChevronLeft className="h-5 w-5" /></button>
            <button
              onClick={() => setI((p) => (p + 1) % slides.length)}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 shadow-pop hover:scale-110"
              aria-label="Next"
            ><ChevronRight className="h-5 w-5" /></button>
            <div className="absolute bottom-4 right-4 flex gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-background" : "w-2 bg-background/60"}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* floating badges */}
          <div className="absolute -left-6 top-10 hidden rotate-[-8deg] rounded-3xl bg-background p-3 shadow-pop animate-float md:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf text-leaf-foreground">
              <Trees className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <div className="text-xs text-muted-foreground">Aman & Nyaman</div>
              <div className="text-sm font-bold">Lingkungan Hijau</div>
            </div>
          </div>
          <div className="absolute -right-4 bottom-10 hidden rotate-[6deg] rounded-3xl bg-background p-3 shadow-pop animate-float-slow md:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blossom text-blossom-foreground">
              <Heart className="h-6 w-6 fill-current" />
            </div>
            <div className="ml-3">
              <div className="text-xs text-muted-foreground">Guru Terbaik</div>
              <div className="text-sm font-bold">Penuh Kasih</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisiMisi() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-[36px] bg-sky p-8 md:p-10">
          <Blob className="absolute -right-10 -top-10 h-48 w-48 text-background/30" />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-bold text-sky-foreground">
            <Star className="h-3 w-3 fill-current" /> Visi
          </span>
          <h2 className="relative mt-4 font-display text-2xl font-bold text-sky-foreground md:text-3xl">
            Menjadi taman kanak-kanak yang melahirkan generasi ceria, kreatif, dan berakhlak mulia.
          </h2>
          <p className="relative mt-3 text-sm text-sky-foreground/80 md:text-base">
            Kami percaya setiap anak adalah bintang yang bersinar dengan cara
            mereka sendiri — tugas kami adalah membantu mereka menemukan
            cahayanya.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[36px] bg-blossom p-8 md:p-10">
          <Blob className="absolute -left-10 -bottom-10 h-48 w-48 text-background/30" />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-bold text-blossom-foreground">
            <Heart className="h-3 w-3 fill-current" /> Misi
          </span>
          <ul className="relative mt-4 space-y-3 text-sm text-blossom-foreground md:text-base">
            {[
              "Menyelenggarakan pembelajaran bermain sambil belajar yang menyenangkan.",
              "Menanamkan nilai karakter, kemandirian, dan kepercayaan diri sejak dini.",
              "Mengembangkan kreativitas melalui seni, musik, dan eksplorasi alam.",
              "Membangun kemitraan hangat antara sekolah dan keluarga.",
            ].map((m) => (
              <li key={m} className="flex gap-2">
                <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-background text-tangerine">
                  <Sparkles className="h-3 w-3" />
                </span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Heart, color: "blossom", title: "Guru Penuh Kasih", desc: "Pendamping bersertifikasi PAUD yang sabar dan hangat." },
  { icon: Palette, color: "tangerine", title: "Kelas Kreatif", desc: "Seni rupa, prakarya, dan eksplorasi warna setiap minggu." },
  { icon: BookOpen, color: "sky", title: "Literasi Dini", desc: "Cerita, lagu, dan permainan kata untuk cinta membaca." },
  { icon: Music, color: "sunny", title: "Musik & Gerak", desc: "Mengasah motorik dan ekspresi lewat tari dan nyanyi." },
  { icon: Trees, color: "leaf", title: "Belajar di Alam", desc: "Taman sekolah hijau untuk berkebun dan eksplorasi." },
  { icon: Sparkles, color: "grape", title: "Karakter Positif", desc: "Kebiasaan baik harian: berbagi, bersyukur, mandiri." },
] as const;

function Keunggulan() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-sunny/20 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-tangerine/20 px-3 py-1 text-xs font-bold text-tangerine-foreground">
            <Sparkles className="h-3 w-3" /> Keunggulan Sekolah
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Tempat yang dirancang untuk si kecil bertumbuh
          </h2>
          <p className="mt-3 text-foreground/70">
            Enam pilar pembelajaran yang menjadi ciri khas TK Pertiwi Kalikondang.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 transition hover:-translate-y-1 hover:shadow-playful"
            >
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-${f.color} text-${f.color}-foreground transition group-hover:rotate-6`}>
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{f.desc}</p>
              <Blob className={`pointer-events-none absolute -right-12 -bottom-12 h-32 w-32 text-${f.color}/30`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const activities = [
  { title: "Seni & Lukis", img: g3, color: "tangerine" },
  { title: "Berkebun", img: g2, color: "leaf" },
  { title: "Pentas Seni", img: g1, color: "blossom" },
  { title: "Olahraga", img: g4, color: "sky" },
];

function Aktivitas() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="inline-flex rounded-full bg-leaf/30 px-3 py-1 text-xs font-bold text-leaf-foreground">Aktivitas Anak</span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Setiap hari adalah petualangan baru</h2>
        </div>
        <p className="max-w-md text-foreground/70">
          Mulai dari seni, alam, musik, hingga olahraga — kami merancang
          kegiatan yang seimbang untuk tumbuh kembang anak.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {activities.map((a, i) => (
          <div
            key={a.title}
            className={`group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-${a.color}`}
            style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
          >
            <img src={a.img} alt={a.title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
              <h3 className="font-display text-xl font-bold text-primary-foreground">{a.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Galeri() {
  return (
    <section className="relative overflow-hidden bg-sky/25 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-background px-3 py-1 text-xs font-bold text-primary shadow-pop">Galeri Kebahagiaan</span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Momen tak terlupakan</h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[g1, g2, g3, g4, g4, g3, g2, g1].map((src, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-3xl ${i % 3 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}
            >
              <img src={src} alt="Galeri" loading="lazy" className="h-full w-full object-cover transition hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testis = [
  { name: "Ibu Rina", role: "Bunda Aisya — KB B", text: "Aisya jadi lebih percaya diri dan suka bercerita tentang sekolahnya setiap hari. Guru-guru di sini luar biasa hangat!" },
  { name: "Bapak Dimas", role: "Ayah Rafa — KB A", text: "Lingkungannya bersih, kegiatan beragam, dan komunikasi orang tua selalu lancar lewat WhatsApp. Sangat direkomendasikan." },
  { name: "Ibu Sari", role: "Bunda Nayla — Alumni", text: "Anak saya sangat siap masuk SD. Kemampuan sosial dan kemandiriannya berkembang pesat di TK Pertiwi." },
];

function Testimoni() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full bg-blossom/40 px-3 py-1 text-xs font-bold text-blossom-foreground">Cerita Orang Tua</span>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Dipercaya oleh keluarga di Kalikondang</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testis.map((t, i) => (
          <div key={t.name} className="relative rounded-[28px] bg-card p-6 shadow-pop"
            style={{ transform: `rotate(${(i - 1) * 1}deg)` }}>
            <Quote className="absolute -top-3 left-6 h-8 w-8 rounded-full bg-tangerine p-1.5 text-tangerine-foreground" />
            <p className="mt-3 text-sm text-foreground/80">"{t.text}"</p>
            <div className="mt-4 flex items-center gap-1 text-tangerine">
              {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} className="h-3.5 w-3.5 fill-current" />)}
            </div>
            <div className="mt-4 border-t border-border pt-4">
              <div className="font-bold text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaSpmb() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-tangerine via-blossom to-sunny p-8 md:p-14">
        <FloatingDecor />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Yuk, jadi bagian dari keluarga besar TK Pertiwi Kalikondang!
          </h2>
          <p className="mt-4 text-foreground/80 md:text-lg">
            Pendaftaran Siswa Peserta Didik Baru (SPMB) tahun ajaran
            2026/2027 sudah dibuka. Daftarkan si kecil sekarang dan nikmati
            potongan biaya pendaftaran 20% untuk 30 pendaftar pertama.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/spmb" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-bold text-background shadow-playful hover:-translate-y-0.5 transition">
              Daftar Sekarang <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/kelompok-belajar" className="inline-flex items-center gap-2 rounded-full bg-background/90 px-7 py-4 text-base font-bold text-foreground hover:-translate-y-0.5 transition">
              Lihat Kelompok Belajar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
