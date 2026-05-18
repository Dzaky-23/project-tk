import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Baby, GraduationCap, Clock, Users, Sparkles } from "lucide-react";
import { FloatingDecor, Blob } from "@/components/site/Decor";
import kbA from "@/assets/kb-a.jpg";
import kbB from "@/assets/kb-b.jpg";

export const Route = createFileRoute("/kelompok-belajar")({
  head: () => ({
    meta: [
      { title: "Kelompok Belajar — TK Pertiwi Kalikondang" },
      { name: "description", content: "Dua kelompok belajar di TK Pertiwi Kalikondang: KB A untuk usia 3–4 tahun dan KB B untuk usia 5–6 tahun." },
    ],
  }),
  component: KBPage,
});

const groups = [
  {
    id: "a",
    title: "Kelompok Belajar A",
    age: "Usia 3 – 4 Tahun",
    color: "sky",
    accent: "tangerine",
    img: kbA,
    icon: Baby,
    desc: "Pijakan pertama si kecil mengenal dunia. Fokus pada sosialisasi, kemandirian dasar, dan eksplorasi sensorik melalui permainan.",
    points: ["Bermain peran & sensorik", "Lagu, gerak, dan cerita", "Pengenalan warna & bentuk", "Toilet training & kemandirian"],
    schedule: "Senin – Jumat · 07.30 – 10.00",
    rasio: "1 : 8",
  },
  {
    id: "b",
    title: "Kelompok Belajar B",
    age: "Usia 5 – 6 Tahun",
    color: "blossom",
    accent: "leaf",
    img: kbB,
    icon: GraduationCap,
    desc: "Persiapan menuju jenjang SD. Anak diajak mengasah literasi awal, numerasi, dan karakter sebagai bekal pendidikan dasar.",
    points: ["Literasi & numerasi awal", "Seni rupa & prakarya", "Sains sederhana & eksperimen", "Kepemimpinan & kerja sama"],
    schedule: "Senin – Jumat · 07.30 – 11.00",
    rasio: "1 : 10",
  },
];

function KBPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-confetti py-16 md:py-20">
        <FloatingDecor />
        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-bold text-primary shadow-pop">
            <Sparkles className="h-3 w-3" /> Kelompok Belajar
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            Pilih petualangan untuk{" "}
            <span className="text-tangerine">si kecil</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/75 md:text-lg">
            Dua kelompok belajar yang dirancang khusus sesuai usia dan tahap
            perkembangan anak. Klik salah satu untuk melihat detailnya.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {groups.map((g, i) => (
            <a
              href={`#kb-${g.id}`}
              key={g.id}
              className={`group relative overflow-hidden rounded-[40px] bg-${g.color} p-8 transition duration-500 hover:-translate-y-2 hover:rotate-[-0.5deg] shadow-pop hover:shadow-playful md:p-10`}
              style={{ transform: `rotate(${i ? 1 : -1}deg)` }}
            >
              <Blob className={`absolute -right-12 -top-12 h-56 w-56 text-${g.accent}/40 transition group-hover:scale-110`} />
              <div className={`relative inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-background text-${g.color}-foreground shadow-pop transition group-hover:rotate-12`}>
                <g.icon className="h-8 w-8" />
              </div>
              <div className={`mt-5 inline-flex rounded-full bg-background/80 px-3 py-1 text-xs font-bold text-${g.color}-foreground`}>
                {g.age}
              </div>
              <h2 className={`mt-3 font-display text-3xl font-bold text-${g.color}-foreground md:text-4xl`}>
                {g.title}
              </h2>
              <p className={`mt-3 text-${g.color}-foreground/80 md:text-lg`}>{g.desc}</p>

              <div className="relative mt-6 overflow-hidden rounded-3xl border-4 border-background">
                <img src={g.img} alt={g.title} loading="lazy" width={1024} height={1024} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full bg-background/85 px-4 py-2 text-xs font-bold">
                  <Clock className="h-4 w-4 text-tangerine" /> {g.schedule}
                </div>
                <div className="flex items-center gap-2 rounded-full bg-background/85 px-4 py-2 text-xs font-bold">
                  <Users className="h-4 w-4 text-leaf-foreground" /> Rasio Guru {g.rasio}
                </div>
              </div>

              <div className={`mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition group-hover:gap-3`}>
                Lihat detail kurikulum <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>

        {/* Details */}
        <div className="mt-20 space-y-16">
          {groups.map((g) => (
            <div key={g.id} id={`kb-${g.id}`} className="scroll-mt-24 grid gap-8 md:grid-cols-2 md:items-center">
              <div className={`relative overflow-hidden rounded-[36px] bg-${g.color} p-2`}>
                <img src={g.img} alt={g.title} loading="lazy" className="aspect-[5/4] w-full rounded-[28px] object-cover" />
              </div>
              <div>
                <span className={`inline-flex rounded-full bg-${g.color} px-3 py-1 text-xs font-bold text-${g.color}-foreground`}>{g.age}</span>
                <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">{g.title}</h3>
                <p className="mt-3 text-foreground/75">{g.desc}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {g.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 rounded-2xl bg-card p-4 shadow-pop">
                      <span className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-${g.accent} text-${g.accent}-foreground`}>
                        <Sparkles className="h-3 w-3" />
                      </span>
                      <span className="text-sm font-semibold">{p}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/spmb" className="mt-8 inline-flex items-center gap-2 rounded-full bg-tangerine px-6 py-3 text-sm font-bold text-tangerine-foreground shadow-playful hover:-translate-y-0.5 transition">
                  Daftarkan di kelompok ini <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
