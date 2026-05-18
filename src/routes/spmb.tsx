import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check, ChevronLeft, ChevronRight, Upload, User, Users, FileText,
  CheckCircle2, Sparkles, Calendar, Wallet, Phone, MapPin,
} from "lucide-react";
import { FloatingDecor, Blob } from "@/components/sections/Decor";

export const Route = createFileRoute("/spmb")({
  head: () => ({
    meta: [
      { title: "SPMB — Pendaftaran Online TK Pertiwi Kalikondang" },
      { name: "description", content: "Daftar online Sistem Penerimaan Murid Baru (SPMB) TK Pertiwi Kalikondang tahun ajaran 2026/2027. Mudah, cepat, dan ramah." },
    ],
  }),
  component: SpmbPage,
});

type Form = {
  // step 1
  namaAnak: string; tempatLahir: string; tanggalLahir: string; jenisKelamin: string; kelompok: string;
  // step 2
  namaAyah: string; namaIbu: string; alamat: string; whatsapp: string; email: string;
  // step 3
  dokumen: string;
};

const initial: Form = {
  namaAnak: "", tempatLahir: "", tanggalLahir: "", jenisKelamin: "", kelompok: "",
  namaAyah: "", namaIbu: "", alamat: "", whatsapp: "", email: "",
  dokumen: "",
};

const steps = [
  { id: 1, label: "Data Anak", icon: User },
  { id: 2, label: "Data Orang Tua", icon: Users },
  { id: 3, label: "Dokumen", icon: FileText },
  { id: 4, label: "Selesai", icon: CheckCircle2 },
];

function SpmbPage() {
  return (
    <>
      <Hero />
      <FormSection />
      <InfoSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-confetti py-16 md:py-20">
      <FloatingDecor />
      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-tangerine/90 px-3 py-1 text-xs font-bold text-tangerine-foreground shadow-pop">
          <Sparkles className="h-3 w-3" /> SPMB Tahun Ajaran 2026/2027
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">
          Mulai petualangan si kecil di{" "}
          <span className="text-primary">TK Pertiwi</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-foreground/75 md:text-lg">
          Isi formulir pendaftaran online di bawah ini. Hanya butuh beberapa
          menit, dan tim kami akan menghubungi Anda via WhatsApp.
        </p>
      </div>
    </section>
  );
}

function FormSection() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<Form>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});

  function update<K extends keyof Form>(k: K, v: Form[K]) {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  }

  function validate(): boolean {
    const e: Partial<Record<keyof Form, string>> = {};
    if (step === 1) {
      if (!form.namaAnak.trim()) e.namaAnak = "Wajib diisi";
      else if (form.namaAnak.length > 100) e.namaAnak = "Maksimal 100 karakter";
      if (!form.tempatLahir.trim()) e.tempatLahir = "Wajib diisi";
      if (!form.tanggalLahir) e.tanggalLahir = "Wajib diisi";
      if (!form.jenisKelamin) e.jenisKelamin = "Pilih salah satu";
      if (!form.kelompok) e.kelompok = "Pilih kelompok";
    }
    if (step === 2) {
      if (!form.namaAyah.trim()) e.namaAyah = "Wajib diisi";
      if (!form.namaIbu.trim()) e.namaIbu = "Wajib diisi";
      if (!form.alamat.trim()) e.alamat = "Wajib diisi";
      else if (form.alamat.length > 300) e.alamat = "Maksimal 300 karakter";
      if (!form.whatsapp.trim()) e.whatsapp = "Wajib diisi";
      else if (!/^[0-9+\-\s]{8,20}$/.test(form.whatsapp)) e.whatsapp = "Nomor tidak valid";
      if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email tidak valid";
    }
    if (step === 3) {
      if (!form.dokumen) e.dokumen = "Upload minimal 1 dokumen";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() { if (validate()) setStep((s) => Math.min(4, s + 1)); }
  function prev() { setStep((s) => Math.max(1, s - 1)); }

  return (
    <section className="mx-auto max-w-5xl px-4 pb-10 md:px-8">
      <div className="relative overflow-hidden rounded-[40px] bg-card p-6 shadow-pop md:p-10">
        <Blob className="absolute -right-20 -top-20 h-72 w-72 text-sunny/40" />
        <Blob className="absolute -left-24 -bottom-24 h-72 w-72 text-sky/40" />

        {/* Stepper */}
        <ol className="relative grid grid-cols-4 gap-2">
          {steps.map((s) => {
            const active = step === s.id;
            const done = step > s.id;
            return (
              <li key={s.id} className="flex flex-col items-center gap-2 text-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 transition ${
                  done ? "border-leaf bg-leaf text-leaf-foreground"
                  : active ? "border-tangerine bg-tangerine text-tangerine-foreground shadow-playful scale-110"
                  : "border-border bg-background text-muted-foreground"
                }`}>
                  {done ? <Check className="h-5 w-5" /> : <s.icon className="h-5 w-5" />}
                </div>
                <span className={`text-[11px] font-bold md:text-xs ${active ? "text-foreground" : "text-muted-foreground"}`}>
                  {s.label}
                </span>
              </li>
            );
          })}
        </ol>
        <div className="relative mt-4 h-2 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky via-tangerine to-blossom transition-all duration-500"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />
        </div>

        <div className="relative mt-10 animate-fade-up" key={step}>
          {step === 1 && <Step1 form={form} errors={errors} update={update} />}
          {step === 2 && <Step2 form={form} errors={errors} update={update} />}
          {step === 3 && <Step3 form={form} errors={errors} update={update} />}
          {step === 4 && <Step4 form={form} />}
        </div>

        {step < 4 && (
          <div className="relative mt-10 flex items-center justify-between gap-3">
            <button
              onClick={prev}
              disabled={step === 1}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-bold text-foreground/80 transition hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
            >
              <ChevronLeft className="h-4 w-4" /> Kembali
            </button>
            <button
              onClick={next}
              className="inline-flex items-center gap-2 rounded-full bg-tangerine px-6 py-3 text-sm font-bold text-tangerine-foreground shadow-playful transition hover:-translate-y-0.5"
            >
              {step === 3 ? "Kirim Pendaftaran" : "Lanjut"} <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold text-foreground/80">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-semibold text-destructive">{error}</span>}
    </label>
  );
}

const inputBase = "w-full rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm font-medium outline-none transition focus:border-tangerine focus:bg-card";

function Step1({ form, errors, update }: { form: Form; errors: any; update: any }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <div className="md:col-span-2">
        <h3 className="font-display text-2xl font-bold">Data calon murid</h3>
        <p className="text-sm text-muted-foreground">Ceritakan tentang si kecil yang akan bergabung.</p>
      </div>
      <Field label="Nama Lengkap Anak" error={errors.namaAnak}>
        <input value={form.namaAnak} onChange={(e) => update("namaAnak", e.target.value)} className={inputBase} placeholder="Contoh: Aisya Putri Aurelia" />
      </Field>
      <Field label="Tempat Lahir" error={errors.tempatLahir}>
        <input value={form.tempatLahir} onChange={(e) => update("tempatLahir", e.target.value)} className={inputBase} placeholder="Demak" />
      </Field>
      <Field label="Tanggal Lahir" error={errors.tanggalLahir}>
        <input type="date" value={form.tanggalLahir} onChange={(e) => update("tanggalLahir", e.target.value)} className={inputBase} />
      </Field>
      <Field label="Jenis Kelamin" error={errors.jenisKelamin}>
        <div className="flex gap-2">
          {(["Laki-laki", "Perempuan"] as const).map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => update("jenisKelamin", g)}
              className={`flex-1 rounded-2xl border-2 px-4 py-3 text-sm font-bold transition ${
                form.jenisKelamin === g
                  ? "border-tangerine bg-tangerine text-tangerine-foreground shadow-playful"
                  : "border-border bg-background text-foreground/80 hover:border-tangerine/50"
              }`}
            >{g}</button>
          ))}
        </div>
      </Field>
      <Field label="Pilih Kelompok Belajar" error={errors.kelompok}>
        <div className="flex gap-2">
          {(["Kelompok A (3-4 thn)", "Kelompok B (5-6 thn)"] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => update("kelompok", k)}
              className={`flex-1 rounded-2xl border-2 px-4 py-3 text-xs font-bold transition md:text-sm ${
                form.kelompok === k
                  ? "border-sky bg-sky text-sky-foreground shadow-playful"
                  : "border-border bg-background text-foreground/80 hover:border-sky/50"
              }`}
            >{k}</button>
          ))}
        </div>
      </Field>
    </div>
  );
}

function Step2({ form, errors, update }: { form: Form; errors: any; update: any }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <div className="md:col-span-2">
        <h3 className="font-display text-2xl font-bold">Data orang tua</h3>
        <p className="text-sm text-muted-foreground">Kami akan menghubungi nomor WhatsApp yang Anda berikan.</p>
      </div>
      <Field label="Nama Ayah" error={errors.namaAyah}>
        <input value={form.namaAyah} onChange={(e) => update("namaAyah", e.target.value)} className={inputBase} placeholder="Nama lengkap ayah" />
      </Field>
      <Field label="Nama Ibu" error={errors.namaIbu}>
        <input value={form.namaIbu} onChange={(e) => update("namaIbu", e.target.value)} className={inputBase} placeholder="Nama lengkap ibu" />
      </Field>
      <Field label="Nomor WhatsApp" error={errors.whatsapp}>
        <input value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className={inputBase} placeholder="08xxxxxxxxxx" />
      </Field>
      <Field label="Email (opsional)" error={errors.email}>
        <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputBase} placeholder="ortu@email.com" />
      </Field>
      <div className="md:col-span-2">
        <Field label="Alamat Tempat Tinggal" error={errors.alamat}>
          <textarea
            value={form.alamat}
            onChange={(e) => update("alamat", e.target.value)}
            rows={3}
            className={inputBase + " resize-none"}
            placeholder="Jalan, RT/RW, kelurahan, kecamatan"
          />
        </Field>
      </div>
    </div>
  );
}

function Step3({ form, errors, update }: { form: Form; errors: any; update: any }) {
  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    update("dokumen", f.name);
  }
  return (
    <div className="grid gap-5">
      <div>
        <h3 className="font-display text-2xl font-bold">Upload dokumen</h3>
        <p className="text-sm text-muted-foreground">
          Lampirkan akta kelahiran, KK, dan pas foto anak (PDF/JPG, maks 5 MB).
        </p>
      </div>

      <label className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed p-10 text-center transition ${
        errors.dokumen ? "border-destructive bg-destructive/5" : "border-tangerine/60 bg-tangerine/10 hover:bg-tangerine/15"
      }`}>
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tangerine text-tangerine-foreground shadow-playful">
          <Upload className="h-6 w-6" />
        </span>
        <div>
          <div className="font-bold">Klik untuk upload dokumen</div>
          <div className="text-xs text-muted-foreground">atau seret berkas ke sini</div>
        </div>
        <input type="file" className="hidden" onChange={onFile} accept=".pdf,.jpg,.jpeg,.png" />
        {form.dokumen && (
          <div className="rounded-full bg-leaf px-4 py-1.5 text-xs font-bold text-leaf-foreground">
            ✓ {form.dokumen}
          </div>
        )}
      </label>
      {errors.dokumen && <p className="text-xs font-semibold text-destructive">{errors.dokumen}</p>}

      <ul className="grid gap-3 text-sm md:grid-cols-3">
        {["Akta Kelahiran", "Kartu Keluarga", "Pas Foto 3x4"].map((d) => (
          <li key={d} className="flex items-center gap-2 rounded-2xl bg-secondary px-4 py-3 font-semibold">
            <Check className="h-4 w-4 text-leaf-foreground" /> {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step4({ form }: { form: Form }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-leaf text-leaf-foreground shadow-playful animate-pop">
        <CheckCircle2 className="h-10 w-10" />
      </div>
      <h3 className="mt-6 font-display text-3xl font-bold">Hore, pendaftaran terkirim! 🎉</h3>
      <p className="mx-auto mt-3 max-w-md text-foreground/75">
        Terima kasih, <strong>{form.namaAnak || "calon murid"}</strong>! Tim
        kami akan menghubungi nomor WhatsApp <strong>{form.whatsapp}</strong>{" "}
        dalam 1×24 jam untuk verifikasi.
      </p>
      <div className="mx-auto mt-6 grid max-w-md gap-2 text-left text-sm">
        <div className="rounded-2xl bg-secondary p-4">
          <div className="text-xs text-muted-foreground">Nomor Pendaftaran</div>
          <div className="font-display text-lg font-bold">SPMB-{Date.now().toString().slice(-6)}</div>
        </div>
      </div>
    </div>
  );
}

function InfoSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[36px] bg-sky p-8 md:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background text-sky-foreground shadow-pop">
              <Calendar className="h-6 w-6" />
            </span>
            <h3 className="font-display text-2xl font-bold text-sky-foreground">Jadwal Pendaftaran</h3>
          </div>
          <ul className="mt-6 space-y-4 text-sky-foreground">
            {[
              { t: "Gelombang 1", d: "1 Mei – 30 Juni 2026", n: "Diskon biaya 20%" },
              { t: "Gelombang 2", d: "1 Juli – 31 Juli 2026", n: "Harga normal" },
              { t: "Tahun Ajaran Mulai", d: "14 Juli 2026", n: "Selamat datang!" },
            ].map((x) => (
              <li key={x.t} className="flex items-center justify-between gap-3 rounded-2xl bg-background/70 p-4">
                <div>
                  <div className="text-xs text-muted-foreground">{x.t}</div>
                  <div className="font-bold">{x.d}</div>
                </div>
                <span className="rounded-full bg-tangerine px-3 py-1 text-xs font-bold text-tangerine-foreground">{x.n}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[36px] bg-blossom p-8 md:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background text-blossom-foreground shadow-pop">
              <Wallet className="h-6 w-6" />
            </span>
            <h3 className="font-display text-2xl font-bold text-blossom-foreground">Informasi Biaya</h3>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { t: "Pendaftaran", v: "Rp 150.000" },
              { t: "Seragam (4 stel)", v: "Rp 850.000" },
              { t: "Uang Gedung", v: "Rp 2.500.000" },
              { t: "SPP / bulan", v: "Rp 250.000" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-background/80 p-4">
                <div className="text-xs text-muted-foreground">{c.t}</div>
                <div className="font-display text-xl font-bold text-foreground">{c.v}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-blossom-foreground/80">
            *Biaya dapat dicicil 2–3x dan tersedia program subsidi untuk
            keluarga kurang mampu.
          </p>
        </div>

        <div className="rounded-[36px] bg-leaf p-8 md:col-span-2 md:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { i: Phone, t: "WhatsApp Panitia", v: "0812-3456-7890" },
              { i: MapPin, t: "Lokasi Sekolah", v: "Kalikondang, Demak" },
              { i: Calendar, t: "Jam Layanan", v: "Senin – Sabtu, 08.00 – 14.00" },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background text-leaf-foreground shadow-pop">
                  <x.i className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-leaf-foreground/80">{x.t}</div>
                  <div className="font-bold text-leaf-foreground">{x.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
