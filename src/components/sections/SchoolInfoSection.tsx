export default function SchoolInfoSection() {
  const items = [
    {
      title: 'Akreditasi',
      value: 'A',
      desc: 'Sekolah dengan standar pendidikan berkualitas.',
    },
    {
      title: 'Jumlah Kelas',
      value: '8',
      desc: 'Ruang belajar nyaman dan aman untuk anak.',
    },
    {
      title: 'Ekstrakurikuler',
      value: '12+',
      desc: 'Mendukung kreativitas dan bakat anak.',
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[32px] bg-pink-500 p-8 md:p-14">
          <div className="mb-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Lingkungan Belajar Terbaik
            </h2>

            <p className="mx-auto max-w-2xl text-pink-100">
              Kami menghadirkan suasana belajar yang nyaman dan
              menyenangkan untuk mendukung tumbuh kembang anak.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm"
              >
                <p className="mb-3 text-sm text-pink-100">
                  {item.title}
                </p>

                <h3 className="mb-4 text-5xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="leading-relaxed text-pink-50">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}