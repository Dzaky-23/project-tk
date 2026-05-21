import { Award, BookOpen, Sparkles } from 'lucide-react'
import { Blob } from './Decor'

export default function SchoolInfoSection() {
  const items = [
    {
      title: 'Akreditasi',
      value: 'A',
      desc: 'Sekolah dengan standar pendidikan berkualitas.',
      color: 'sky',
      icon: Award,
      blobPosition: '-right-10 -top-10',
    },
    {
      title: 'Jumlah Kelas',
      value: '8',
      desc: 'Ruang belajar nyaman dan aman untuk anak.',
      color: 'blossom',
      icon: BookOpen,
      blobPosition: '-left-10 -bottom-10',
    },
    {
      title: 'Ekstrakurikuler',
      value: '12+',
      desc: 'Mendukung kreativitas dan bakat anak.',
      color: 'tangerine',
      icon: Sparkles,
      blobPosition: '-right-10 -bottom-10',
    },
  ]

  return (
    <section className="py-20 mx-auto max-w-7xl px-4 md:px-8">
      <div className="mx-auto max-w-2xl text-center mb-12 animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full bg-sunny/30 px-3 py-1 text-xs font-bold text-sunny-foreground">
          <Sparkles className="h-3 w-3" /> Info Sekolah
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl text-foreground">
          Lingkungan Belajar Terbaik
        </h2>
        <p className="mt-3 text-foreground/70">
          Kami menghadirkan suasana belajar yang nyaman dan
          menyenangkan untuk mendukung tumbuh kembang anak.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[36px] bg-${item.color} p-8 md:p-10 animate-fade-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Blob className={`absolute ${item.blobPosition} h-48 w-48 text-background/30`} />
              
              <span className={`relative inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-bold text-${item.color}-foreground`}>
                <Icon className="h-3 w-3 fill-current" /> {item.title}
              </span>

              <h3 className={`relative mt-6 font-display text-6xl font-bold text-${item.color}-foreground`}>
                {item.value}
              </h3>

              <p className={`relative mt-4 leading-relaxed text-${item.color}-foreground/80 text-sm md:text-base`}>
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}