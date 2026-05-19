import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calendar, ArrowRight, Sparkles, Search } from "lucide-react";
import { FloatingDecor } from "@/components/sections/Decor";
import { beritaData } from "@/data/berita";

export const Route = createFileRoute("/berita")({
  head: () => ({
    meta: [
      { title: "Berita — TK Pertiwi Kalikondang" },
      { name: "description", content: "Kabar terbaru, kegiatan sekolah, dan pengumuman penting dari TK Pertiwi Kalikondang." },
    ],
  }),
  component: BeritaPage,
});

type Berita = typeof beritaData[number];
const data = beritaData;

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
          <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-bold text-primary shadow-pop">
            <Sparkles className="h-3 w-3" /> Kabar Sekolah
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">
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
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                cat === c
                  ? "bg-foreground text-background shadow-playful"
                  : "bg-secondary text-foreground/80 hover:bg-sunny"
              }`}
            >{c}</button>
          ))}
        </div>

        {featured && (
          <Link
            to="/berita/$slug"
            params={{ slug: featured.slug! }}
            className="group mt-8 grid overflow-hidden rounded-[40px] bg-card shadow-pop md:grid-cols-2 hover:-translate-y-1 hover:shadow-playful transition"
          >
            <div className={`relative aspect-[16/10] md:aspect-auto bg-${featured.color}`}>
              <img src={featured.img} alt={featured.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute left-5 top-5 rounded-full bg-background/95 px-3 py-1 text-xs font-bold text-foreground">
                ★ Headline
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className={`rounded-full bg-${featured.color} px-3 py-1 font-bold text-${featured.color}-foreground`}>
                  {featured.category}
                </span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {featured.date}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl group-hover:text-primary transition-colors">{featured.title}</h2>
              <p className="mt-3 text-foreground/75">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Baca selengkapnya <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((b, i) => (
            <Link
              to="/berita/$slug"
              params={{ slug: b.slug }}
              key={b.id}
              className="group block overflow-hidden rounded-[28px] bg-card shadow-pop transition hover:-translate-y-1 hover:shadow-playful"
              style={{ transform: `rotate(${i % 2 ? 0.5 : -0.5}deg)` }}
            >
              <div className={`aspect-[16/10] overflow-hidden bg-${b.color}`}>
                <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className={`rounded-full bg-${b.color} px-2.5 py-1 font-bold text-${b.color}-foreground`}>{b.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {b.date}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug group-hover:text-primary transition-colors">{b.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-foreground/70">{b.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Baca selengkapnya <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">Tidak ada berita yang cocok.</p>
        )}

        {filtered.length > shown && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShown((s) => s + 6)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-playful hover:-translate-y-0.5 transition"
            >
              Muat lebih banyak <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </section>
    </>
  );
}
