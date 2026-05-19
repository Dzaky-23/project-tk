import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  ChevronLeft,
  Sparkles,
} from "lucide-react";

import {
  FloatingDecor,
  Blob,
} from "@/components/sections/Decor";
import { getBeritaBySlug } from "@/data/berita";

export const Route = createFileRoute("/berita_/$slug")({
  component: BeritaDetailPage,
});

function BeritaDetailPage() {
  const { slug } = Route.useParams();
  const article = getBeritaBySlug(slug);

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-confetti px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-8xl font-bold text-primary">404</h1>
          <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Berita tidak ditemukan</h2>
          <p className="mt-2 text-sm text-muted-foreground">Sepertinya berita yang Anda cari tidak ada.</p>
          <div className="mt-6">
            <Link to="/berita" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-playful">
              Kembali ke Berita
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-confetti py-16 md:py-20">
        <FloatingDecor />

        <div className="relative mx-auto max-w-5xl px-4 md:px-8">
          <Link
            to="/berita"
            className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-bold shadow-pop transition hover:-translate-y-0.5"
          >
            <ChevronLeft className="h-4 w-4" />
            Kembali ke berita
          </Link>

          <div className="mt-8">
            <span className={`inline-flex items-center gap-2 rounded-full bg-${article.color} px-3 py-1 text-xs font-bold text-${article.color}-foreground shadow-pop`}>
              <Sparkles className="h-3 w-3" />
              {article.category}
            </span>

            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              {article.title}
            </h1>

            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-foreground/70">
              <Calendar className="h-4 w-4" />
              {article.date}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-4 py-12 md:px-8">
        <div className="relative overflow-hidden rounded-[40px] bg-card p-5 shadow-pop md:p-8">
          <Blob className="absolute -right-16 -top-16 h-56 w-56 text-sunny/30" />

          <img
            src={article.img}
            alt={article.title}
            className="h-[260px] w-full rounded-[32px] object-cover md:h-[500px]"
          />

          <div className="relative mt-8 space-y-4 text-foreground/80">
            {article.content
              .split("\n\n")
              .filter((p) => p.trim())
              .map((paragraph, i) => (
                <div key={i} className="space-y-2">
                  {paragraph.split("\n").map((line, lineIdx) => {
                    const trimmed = line.trim();
                    if (trimmed.startsWith("- ")) {
                      return (
                        <li key={lineIdx} className="ml-6 list-disc">
                          {trimmed.slice(2)}
                        </li>
                      );
                    }
                    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                      return (
                        <h3 key={lineIdx} className="font-display text-lg font-bold text-foreground">
                          {trimmed.slice(2, -2)}
                        </h3>
                      );
                    }
                    if (trimmed) {
                      return (
                        <p key={lineIdx}>
                          {trimmed}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 md:px-8">
        <div className={`rounded-[40px] bg-${article.color} p-8 shadow-pop md:p-10`}>
          <div className="mb-8">
            <h2 className={`font-display text-3xl font-bold text-${article.color}-foreground`}>
              Tentang Artikel Ini
            </h2>

            <p className={`mt-2 text-${article.color}-foreground/80`}>
              Kategori: {article.category} • {article.date}
            </p>
          </div>

          <Link to="/berita" className={`inline-flex items-center gap-2 rounded-full bg-${article.color}-foreground px-6 py-3 font-bold text-${article.color} shadow-playful transition hover:-translate-y-0.5`}>
            <ChevronLeft className="h-4 w-4" />
            Kembali ke Semua Berita
          </Link>
        </div>
      </section>
    </>
  );
}
