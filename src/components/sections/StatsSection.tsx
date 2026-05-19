export default function StatsSection() {
  const stats = [
    {
      number: '120+',
      label: 'Siswa Aktif',
    },
    {
      number: '15',
      label: 'Tenaga Pendidik',
    },
    {
      number: '350+',
      label: 'Alumni',
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-pink-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="mb-3 text-5xl font-bold text-pink-500">
                {item.number}
              </h3>

              <p className="text-lg font-medium text-gray-700">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}