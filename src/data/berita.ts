import g1 from "@/assets/images/gallery-1.jpg";
import g2 from "@/assets/images/gallery-2.jpg";
import g3 from "@/assets/images/gallery-3.jpg";
import g4 from "@/assets/images/gallery-4.jpg";
import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";

export type Berita = {
  id: number;
  title: string;
  excerpt: string;
  img: string;
  category: "Kegiatan" | "Pengumuman" | "Prestasi" | "Tips Parenting";
  date: string;
  color: string;
  slug: string;
  content: string;
};

export const beritaData: Berita[] = [
  {
    id: 1,
    title: "Pentas Seni Akhir Semester Penuh Warna",
    slug: "pentas-seni-akhir-semester",
    excerpt:
      "Anak-anak menampilkan tari, drama, dan paduan suara yang memukau orang tua.",
    img: g1,
    category: "Kegiatan",
    date: "12 Mei 2026",
    color: "blossom",
    content: `Pentas seni akhir semester TK Pertiwi Kalikondang menjadi ajang yang sangat meriah dan penuh keceriaan. Ratusan orang tua dan keluarga besar hadir untuk menyaksikan pertunjukan istimewa dari para siswa.

Para anak-anak menampilkan berbagai kreasi seni mulai dari tarian tradisional, drama singkat yang menghibur, hingga paduan suara yang merdu. Setiap penampilan menunjukkan dedikasi guru dalam membimbing kreativitas anak-anak.

Kegiatan ini tidak hanya menjadi kesempatan untuk mengekspresikan bakat seni, tetapi juga membangun kepercayaan diri anak dalam tampil di depan banyak orang. Semua peserta mendapatkan apresiasi dan hadiah menarik sebagai bentuk dukungan dari sekolah.

Kami berterima kasih kepada semua orang tua yang telah mendukung dan hadir dalam acara istimewa ini. Acara seperti ini akan terus kami adakan untuk memberikan pengalaman berharga bagi anak-anak.`,
  },
  {
    id: 2,
    title: "Pendaftaran SPMB 2026/2027 Resmi Dibuka",
    slug: "pendaftaran-spmb-2026-2027-dibuka",
    excerpt:
      "Pendaftaran gelombang pertama dibuka mulai 1 Mei 2026 dengan diskon early bird.",
    img: hero1,
    category: "Pengumuman",
    date: "1 Mei 2026",
    color: "tangerine",
    content: `Kami dengan bangga mengumumkan bahwa Sistem Penerimaan Murid Baru (SPMB) tahun ajaran 2026/2027 telah resmi dibuka mulai tanggal 1 Mei 2026.

Bagi calon orang tua yang ingin mendaftarkan buah hati mereka di TK Pertiwi Kalikondang, kami menyediakan beberapa keuntungan khusus:

**Gelombang Pertama (1 - 31 Mei 2026)**
- Diskon early bird 15% untuk uang pendaftaran
- Prioritas pemilihan jadwal kelas
- Gratis seragam sekolah

**Gelombang Kedua (1 - 30 Juni 2026)**
- Diskon 10% untuk uang pendaftaran

**Persyaratan Pendaftaran:**
- Calon siswa berusia 3-4 tahun untuk KB A
- Calon siswa berusia 5-6 tahun untuk KB B
- Fotokopi akta kelahiran dan kartu keluarga
- Pas foto 3x4 (4 lembar)
- Surat keterangan kesehatan dari puskesmas

Pendaftaran dapat dilakukan secara online melalui website kami atau langsung ke sekolah. Untuk informasi lebih lanjut, silakan hubungi kami di nomor yang tersedia.

Kami menunggu kedatangan siswa-siswa baru yang akan menjadi bagian dari keluarga besar TK Pertiwi Kalikondang!`,
  },
  {
    id: 3,
    title: "Juara 1 Lomba Mewarnai Tingkat Kecamatan",
    slug: "juara-lomba-mewarnai-tingkat-kecamatan",
    excerpt:
      "Ananda Aisya berhasil membawa pulang piala dari lomba mewarnai se-Demak.",
    img: g3,
    category: "Prestasi",
    date: "20 April 2026",
    color: "sunny",
    content: `Dengan penuh kebanggaan kami sampaikan bahwa salah satu siswa kami, Ananda Aisya dari kelompok KB B, berhasil meraih prestasi gemilang dengan memenangkan Juara 1 Lomba Mewarnai Tingkat Kecamatan Kalikondang.

Ananda Aisya menampilkan karya mewarna yang sangat kreatif dan penuh dengan imajinasi. Perpaduan warna yang harmonis dan ketelitian dalam mewarnai menjadi kekuatan dari karya Ananda.

Prestasi ini adalah hasil dari dedikasi dan bimbingan yang telah diberikan oleh guru-guru di TK Pertiwi Kalikondang. Kami percaya bahwa dengan lingkungan yang mendukung, setiap anak dapat mengembangkan bakat dan potensi mereka.

Kami juga ingin mengapresiasi semua siswa lain yang telah mengikuti lomba ini. Setiap partisipasi adalah bentuk pembelajaran yang berharga. Kami akan terus memberikan kesempatan kepada siswa untuk mengikuti berbagai kompetisi dan kegiatan yang dapat mengasah potensi mereka.

Selamat untuk Ananda Aisya dan keluarganya. Semoga prestasi ini menjadi motivasi untuk terus berprestasi di masa depan!`,
  },
  {
    id: 4,
    title: "Berkebun Bersama di Taman Sekolah",
    slug: "berkebun-bersama-di-taman-sekolah",
    excerpt:
      "Anak-anak belajar menanam bunga matahari dan merawat tanaman setiap pagi.",
    img: g2,
    category: "Kegiatan",
    date: "8 April 2026",
    color: "leaf",
    content: `Kegiatan berkebun bersama telah menjadi bagian integral dari kurikulum pembelajaran di TK Pertiwi Kalikondang. Setiap pagi, anak-anak dengan antusias berkumpul di taman sekolah untuk melakukan aktivitas berkebun.

Pada kesempatan ini, anak-anak belajar menanam bunga matahari dan merawat berbagai jenis tanaman yang sudah ditanam sebelumnya. Kegiatan ini tidak hanya mengajarkan anak tentang cara merawat tanaman, tetapi juga:

- Meningkatkan kesadaran tentang lingkungan dan keberlanjutan
- Mengembangkan keterampilan motorik kasar dan halus
- Belajar tentang siklus hidup tanaman
- Memahami pentingnya kesabaran dan tanggung jawab

Anak-anak terlihat sangat senang dan antusias ketika menuang air, menyiram tanaman, dan melihat tanaman mereka tumbuh. Setiap anak memiliki tanaman pribadi yang mereka rawat dan pantau perkembangannya.

Kami percaya bahwa keterlibatan langsung dengan alam sejak dini dapat membangun karakter anak yang cinta lingkungan dan bertanggung jawab.`,
  },
  {
    id: 5,
    title: "Tips Menemani Anak Belajar di Rumah",
    slug: "tips-menemani-anak-belajar-di-rumah",
    excerpt:
      "Lima cara sederhana agar waktu belajar di rumah jadi momen yang menyenangkan.",
    img: hero2,
    category: "Tips Parenting",
    date: "30 Maret 2026",
    color: "sky",
    content: `Menemani anak belajar di rumah bisa menjadi momen bonding yang sangat berharga. Namun, tidak jarang orang tua merasa kesulitan membuat proses belajar menjadi menyenangkan. Berikut adalah lima tips sederhana yang bisa membantu:

**1. Ciptakan Lingkungan Belajar yang Nyaman**
Pastikan ruang belajar anak tenang, terang, dan jauh dari gangguan. Kursi dan meja yang sesuai dengan ukuran anak juga penting untuk kenyamanan belajarnya.

**2. Tetapkan Jadwal Belajar yang Konsisten**
Anak membutuhkan rutinitas untuk mengembangkan disiplin. Pilih waktu yang sama setiap hari untuk belajar agar anak terbiasa.

**3. Gunakan Metode Belajar yang Menyenangkan**
Gunakan permainan, lagu, atau cerita untuk membuat belajar menjadi lebih menarik. Jangan hanya fokus pada akademis, tapi juga pada pengembangan kreativitas.

**4. Berikan Pujian dan Motivasi**
Apresiasi setiap usaha anak, tidak hanya hasil akhirnya. Pujian yang tulus akan meningkatkan kepercayaan diri anak.

**5. Jadilah Pendamping, Bukan Penjawab**
Alih-alih memberikan jawaban langsung, ajak anak untuk berpikir dan mencari jawaban sendiri. Ini akan mengembangkan kemampuan problem solving anak.

Ingat, setiap anak memiliki kecepatan belajar yang berbeda. Kesabaran dan konsistensi adalah kunci kesuksesan.`,
  },
  {
    id: 6,
    title: "Field Trip Seru ke Kebun Binatang",
    slug: "field-trip-seru-ke-kebun-binatang",
    excerpt:
      "Petualangan satu hari penuh tawa mengenal aneka satwa Indonesia.",
    img: g4,
    category: "Kegiatan",
    date: "15 Maret 2026",
    color: "grape",
    content: `Kegiatan field trip ke Kebun Binatang menjadi salah satu highlight dalam pembelajaran semester ini. Seluruh siswa TK Pertiwi Kalikondang dibawa untuk mengenal berbagai jenis satwa Indonesia.

**Pengalaman yang Berkesan**

Anak-anak sangat antusias sejak perjalanan dimulai. Mereka begitu bersemangat ketika melihat berbagai hewan seperti singa, harimau, gajah, dan burung-burung eksotis. Setiap pemberhentian di kandang hewan diseliputi dengan pertanyaan-pertanyaan yang penuh rasa ingin tahu dari anak-anak.

**Pembelajaran Langsung**

Melalui kunjungan ini, anak-anak belajar:
- Jenis-jenis hewan dan habitatnya
- Pentingnya menjaga populasi satwa liar
- Tanggung jawab manusia dalam pelestarian alam
- Perilaku dan karakteristik berbagai hewan

**Bonding Antar Siswa**

Selain edukasi, kegiatan ini juga memperkuat ikatan antar siswa. Mereka bermain bersama, makan siang bersama, dan berbagi pengalaman yang seru.

Field trip seperti ini akan terus kami adakan sebagai bagian dari strategi pembelajaran yang holistik dan menyenangkan.`,
  },
  {
    id: 7,
    title: "Hari Kartini: Anak-anak Tampil Cantik & Tampan",
    slug: "hari-kartini-anak-anak-tampil-cantik-tampan",
    excerpt:
      "Peringatan Hari Kartini dimeriahkan dengan parade busana adat nusantara.",
    img: g1,
    category: "Kegiatan",
    date: "21 April 2026",
    color: "blossom",
    content: `Peringatan Hari Kartini 21 April 2026 di TK Pertiwi Kalikondang menjadi momen yang sangat istimewa dan bermakna. Seluruh siswa ikut berpartisipasi dalam merayakan kepahlawanan dan semangat Ibu Kartini.

**Parade Busana Adat**

Highlight dari acara ini adalah parade busana adat nusantara. Anak-anak mengenakan berbagai busana tradisional dari berbagai daerah di Indonesia seperti Jawa, Sumatra, Bali, dan Sulawesi. Mereka terlihat sangat cantik dan tampan dengan gaun dan pakaian adat mereka.

**Edukasi Nilai-Nilai Kartini**

Melalui kegiatan ini, kami mengajarkan anak-anak tentang:
- Semangat perjuangan Ibu Kartini untuk pendidikan anak perempuan
- Pentingnya kesetaraan gender
- Cinta terhadap budaya dan tradisi Indonesia
- Kebanggaan terhadap identitas nasional

**Apresiasi Tokoh Perempuan**

Kami juga merayakan peran perempuan dalam keluarga dan masyarakat. Anak-anak belajar bahwa perempuan memiliki potensi yang sama dengan laki-laki untuk meraih impian mereka.

Hari Kartini menjadi inspirasi bagi kami untuk terus mendukung perkembangan dan pendidikan anak-anak tanpa diskriminasi gender.`,
  },
  {
    id: 8,
    title: "Tips Mengelola Tantrum dengan Tenang",
    slug: "tips-mengelola-tantrum-dengan-tenang",
    excerpt:
      "Panduan singkat untuk orang tua dalam menghadapi emosi besar si kecil.",
    img: g3,
    category: "Tips Parenting",
    date: "10 Maret 2026",
    color: "sky",
    content: `Tantrum atau ledakan emosi adalah bagian normal dari perkembangan anak. Namun, orang tua perlu tahu cara menangani situasi ini dengan tenang dan bijak.

**Pahami Penyebab Tantrum**

Tantrum biasanya terjadi ketika anak:
- Frustrasi karena tidak bisa mengungkapkan perasaan
- Lelah atau lapar
- Merasa kesal atau kecewa dengan sesuatu
- Mencari perhatian dari orang tua

**Langkah-Langkah Menangani Tantrum**

1. Tetap Tenang
   Jangan membiarkan emosi Anda terbawa. Anak akan mengikuti contoh dari orang tua.

2. Jangan Memberikan Perhatian Negatif
   Hindari berteriak atau mengmarahi anak. Hal ini hanya akan memperburuk tantrum.

3. Ciptakan Ruang Aman
   Pastikan anak tidak menyakiti diri sendiri atau orang lain. Biarkan mereka mengekspresikan emosi mereka.

4. Valida Perasaan Anak
   Katakan "Ibu tahu kamu sedang marah" untuk menunjukkan bahwa Anda memahami perasaan mereka.

5. Tawarkan Solusi
   Setelah anak lebih tenang, tawarkan alternatif atau solusi untuk masalahnya.

6. Konsistensi adalah Kunci
   Selalu berikan batasan yang sama dan konsisten untuk memperkuat aturan.

**Pencegahan Tantrum**

- Berikan cukup waktu istirahat dan makan teratur
- Hindari membuat anak terlalu lelah
- Ajarkan anak cara mengungkapkan perasaan dengan kata-kata
- Berikan pilihan dalam hal-hal kecil untuk memberikan kontrol

Ingat, tantrum adalah fase yang akan berlalu. Dengan kesabaran dan konsistensi, anak akan belajar mengelola emosi mereka dengan lebih baik.`,
  },
];

export function getBeritaBySlug(slug: string): Berita | undefined {
  return beritaData.find((b) => b.slug === slug);
}
