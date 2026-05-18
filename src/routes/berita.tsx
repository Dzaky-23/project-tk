import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calendar, ArrowRight, Sparkles, Search } from "lucide-react";
import { FloatingDecor } from "@/components/site/Decor";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

export const Route = createFileRoute("/berita")({
  head: () => ({
    meta: [
      { title: "Berita — TK Pertiwi Kalikondang" },
      { name: "description", content: "Kabar terbaru, kegiatan sekolah, dan pengumuman penting dari TK Pertiwi Kalikondang." },
    ],
  }),
  component: BeritaPage,
});

type Berita = {
  id: number; title: string; excerpt: string; img: string;
  category: "Kegiatan" | "Pengumuman" | "Prestasi" | "Tips Parenting";
  date: string; color: string;
};

const data: Berita[] = [
  { id: 1, title: "Pentas Seni Akhir Semester Penuh Warna", excerpt: "Anak-anak menampilkan tari, drama, dan paduan suara yang memukau orang tua.", img: g1, category: "Kegiatan", date: "12 Mei 2026", color: "blossom" },
  { id: 2, title: "Pendaftaran SPMB 2026/2027 Resmi Dibuka", excerpt: "Pendaftaran gelombang pertama dibuka mulai 1 Mei 2026 dengan diskon early bird.", img: hero1, category: "Pengumuman", date: "1 Mei 2026", color: "tangerine" },
  { id: 3, title: "Juara 1 Lomba Mewarnai Tingkat Kecamatan", excerpt: "Ananda Aisya berhasil membawa pulang piala dari lomba mewarnai se-Demak.", img: g3, category: "Prestasi", date: "20 April 2026", color: "sunny" },
  { id: 4, title: "Berkebun Bersama di Taman Sekolah", excerpt: "Anak-anak belajar menanam bunga matahari dan merawat tanaman setiap pagi.", img: g2, category: "Kegiatan", date: "8 April 2026", color: "leaf" },
  { id: 5, title: "Tips Menemani Anak Belajar di Rumah", excerpt: "Lima cara sederhana agar waktu belajar di rumah jadi momen yang menyenangkan.", img: hero2, category: "Tips Parenting", date: "30 Maret 2026", color: "sky" },
  { id: 6, title: "Field Trip Seru ke Kebun Binatang", excerpt: "Petualangan satu hari penuh tawa mengenal aneka satwa Indonesia.", img: g4, category: "Kegiatan", date: "15 Maret 2026", color: "grape" },
  { id: 7, title: "Hari Kartini: Anak-anak Tampil Cantik & Tampan", excerpt: "Peringatan Hari Kartini dimeriahkan dengan parade busana adat nusantara.", img: g1, category: "Kegiatan", date: "21 April 2026", color: "blossom" },
  { id: 8, title: "Tips Mengelola Tantrum dengan Tenang", excerpt: "Panduan singkat untuk orang tua dalam menghadapi emosi besar si kecil.", img: g3, category: "Tips Parenting", date: "10 Maret 2026", color: "sky" },
];

const categories = ["Semua", "Kegiatan", "Pengumuman", "Prestasi", "Tips Parenting"] as const;

function BeritaPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Semua");
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(6);

  const filtered = useMemo(() => {
    return data.filter((d) =>
      (cat === "Semua" || d.category === cat) &&
      (q === "" || d.title.toLowerCase().includes(q.toLowerCase()))
    );
  }, [cat, q]);

  const featured = filtered[0];
  const rest = filtered.slice(1, shown);

  return (
    <>
      <section className="relative overflow-hidden bg-confetti py-16 md:py-20">
        <FloatingDecor />
        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-700 text-primary shadow-pop">
            <Sparkles className="h-3 w-3" /> Kabar Sekolah
          </span>
          <h1 className="mt-4 font-display text-4xl font-700 md:text-6xl">
            Berita & <span className="text-grape">Cerita</span> Terbaru
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/75 md:text-lg">
            Ikuti keseruan kegiatan, prestasi, dan pengumuman penting dari TK Pertiwi Kalikondang.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full bg-background p-2 shadow-pop">
            <Search className="ml-3 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari berita…"
              className="w-full bg-transparent px-2 py-2 text-sm outline-none"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => { setCat(c); setShown(6); }}
              className={`rounded-full px-4 py-2 text-sm font-700 transition ${
                cat === c
                  ? "bg-foreground text-background shadow-playful"
                  : "bg-secondary text-foreground/80 hover:bg-sunny"
              }`}
            >{c}</button>
          ))}
        </div>

        {featured && (
          <article className="mt-8 grid overflow-hidden rounded-[40px] bg-card shadow-pop md:grid-cols-2">
            <div className={`relative aspect-[16/10] md:aspect-auto bg-${featured.color}`}>
              <img src={featured.img} alt={featured.title} loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute left-5 top-5 rounded-full bg-background/95 px-3 py-1 text-xs font-700 text-foreground">
                ★ Headline
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className={`rounded-full bg-${featured.color} px-3 py-1 font-700 text-${featured.color}-foreground`}>
                  {featured.category}
                </span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {featured.date}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-700 md:text-4xl">{featured.title}</h2>
              <p className="mt-3 text-foreground/75">{featured.excerpt}</p>
              <a href="#" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-tangerine px-5 py-3 text-sm font-700 text-tangerine-foreground shadow-playful">
                Baca selengkapnya <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((b, i) => (
            <article
              key={b.id}
              className="group overflow-hidden rounded-[28px] bg-card shadow-pop transition hover:-translate-y-1 hover:shadow-playful"
              style={{ transform: `rotate(${i % 2 ? 0.5 : -0.5}deg)` }}
            >
              <div className={`aspect-[16/10] overflow-hidden bg-${b.color}`}>
                <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className={`rounded-full bg-${b.color} px-2.5 py-1 font-700 text-${b.color}-foreground`}>{b.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {b.date}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-700 leading-snug">{b.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-foreground/70">{b.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-700 text-primary">
                  Baca lebih lanjut <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">Tidak ada berita yang cocok.</p>
        )}

        {filtered.length > shown && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShown((s) => s + 6)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-700 text-primary-foreground shadow-playful hover:-translate-y-0.5 transition"
            >
              Muat lebih banyak <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </section>
    </>
  );
}
