export const KEKHASAN_TABS = [
  { label: 'Jurnal Tahfidz & Tahsin (Setoran Harian)', icon: 'menu_book', count: 24 },
  { label: 'Rekap Target Juz & Matriks Surah Rombel', icon: 'grid_view' },
  { label: 'Buku Penghubung Yaumiyah & Shalat 5 Waktu', icon: 'check_circle' },
  { label: 'Penilaian Adab & Karakter Islami', icon: 'psychology' }
]

export const KEKHASAN_STATS = [
  {
    title: 'Rata-Rata Capaian Rombel',
    value: '89.4%',
    valueCls: 'text-primary',
    icon: 'trending_up',
    box: 'bg-[#AEEED3]/40 text-[#1A5C55]',
    badge: 'Target On-Track',
    badgeCls: 'bg-[#AEEED3] text-[#1A5C55]',
    foot: 'Target Juz 30 & 29 tuntas semester ini'
  },
  {
    title: 'Total Setoran Hari Ini',
    value: '24',
    extra: '/ 28 Santri',
    valueCls: 'text-on-surface',
    icon: 'fact_check',
    box: 'bg-secondary-container/60 text-primary',
    badge: '4 Antre Simaan',
    badgeCls: 'bg-[#FFF8B0] text-[#695E05]',
    foot: "Sesi Ba'da Zhuhur"
  },
  {
    title: 'Predikat Tajwid & Makharij',
    value: '82%',
    valueCls: 'text-primary',
    icon: 'verified',
    box: 'bg-[#E0F2F0] text-[#287A74]',
    badge: 'Mumtaz / Jayyid Jiddan',
    badgeCls: 'bg-[#AEEED3] text-[#1A5C55]',
    foot: 'Sesuai standar Utsmani'
  },
  {
    title: 'Kepatuhan Buku Yaumiyah',
    value: '94%',
    valueCls: 'text-[#20604b]',
    icon: 'menu_book',
    box: 'bg-[#EFF7F5] text-[#20604b]',
    badge: 'Terverifikasi Wali',
    badgeCls: 'bg-[#AEEED3] text-[#1A5C55]',
    foot: 'Shalat 5 waktu & shaum'
  }
]

export const SETORAN_ROWS = [
  {
    nama: 'Muhammad Faris Al-Fatih',
    nisn: '0134982210',
    surah: 'At-Takwir (1-29)',
    juz: 'Juz 30 • Penuh',
    kategori: 'Ziyadah Baru',
    katCls: 'bg-[#E0F2F0] text-[#287A74]',
    predikat: 'Mumtaz (A+)',
    status: 'Mutqin',
    dot: 'bg-primary',
    statusCls: 'text-primary',
    catatan: '"Ghunnah dan mad thabii sangat rapi, lanjut ke Al-Infithar"',
    aksi2: 'check_circle'
  },
  {
    nama: 'Aisyah Nur Ramadhani',
    nisn: '0134982218',
    surah: "'Abasa (1-42)",
    juz: 'Juz 30 • Penuh',
    kategori: "Muraja'ah Mingguan",
    katCls: 'bg-[#EFF7F5] text-primary',
    predikat: 'Jayyid Jiddan (A)',
    status: "Lulus Tasmi' 1 Juz",
    dot: 'bg-[#006a63]',
    statusCls: 'text-[#006a63]',
    catatan: '"Waqaf & Ibtida sangat baik, nafas terkontrol"',
    aksi2: 'check_circle'
  },
  {
    nama: 'Raffasya Dwi Putra',
    nisn: '0134982231',
    surah: "An-Nazi'at (20-46)",
    juz: 'Juz 30 • Separuh',
    kategori: 'Tashih Ulang Ayat 35',
    katCls: 'bg-[#FDE8E8] text-[#9B1C1C]',
    predikat: 'Jayyid (B+)',
    predikatWarn: true,
    status: 'Perlu Pendampingan',
    dot: 'bg-[#ba1a1a]',
    statusCls: 'text-[#ba1a1a]',
    catatan: '"Perbaiki makhraj huruf Ain dan Shad"',
    aksi2: 'replay'
  },
  {
    nama: 'Maryam Khadijah',
    nisn: '0134982245',
    surah: 'Al-Muthaffifin (1-36)',
    juz: 'Juz 30 • Tuntas',
    kategori: 'Ziyadah Baru',
    katCls: 'bg-[#E0F2F0] text-[#287A74]',
    predikat: 'Mumtaz (A+)',
    status: 'Siap Ujian Khitaman',
    dot: 'bg-primary',
    statusCls: 'text-primary',
    catatan: '"Tartil sangat mengalir, hukum ikhfa haqiqi tepat"',
    aksi2: 'check_circle'
  },
  {
    nama: 'Zaid bin Tsabit Jr.',
    nisn: '0134982250',
    surah: 'Al-Buruj (1-22)',
    juz: 'Juz 30 • Penuh',
    kategori: "Muraja'ah",
    katCls: 'bg-[#EFF7F5] text-primary',
    predikat: 'Mumtaz (A)',
    status: 'Mutqin',
    dot: 'bg-primary',
    statusCls: 'text-primary',
    catatan: '"Hafalan kokoh, irama bayati stabil dan tenang"',
    aksi2: 'check_circle'
  }
]

export const SANTRI_OPTIONS = [
  'Muhammad Faris Al-Fatih (0134982210)',
  'Aisyah Nur Ramadhani (0134982218)',
  'Raffasya Dwi Putra (0134982231)',
  'Maryam Khadijah (0134982245)',
  'Zaid bin Tsabit Jr. (0134982250)'
]

export const JUZ_DIST = [
  { label: "Juz 30 (An-Naba' - An-Nas)", pct: '100% Selesai (28/28)', pctCls: 'text-[#1A5C55]', bar: 'bg-[#287A74]', w: '100%' },
  { label: 'Juz 29 (Al-Mulk - Al-Mursalat)', pct: '64% Berjalan (18/28)', pctCls: 'text-primary', bar: 'bg-[#55A9A0]', w: '64%' },
  { label: 'Persiapan Juz 28 (Al-Mujadilah)', pct: '12% Percepatan (3/28)', pctCls: 'text-outline', bar: 'bg-[#AEEED3]', w: '12%' }
]

export const YAUMIYAH = [
  { icon: 'mosque', label: 'Shalat Shubuh Berjamaah', val: '26/28 santri' },
  { icon: 'wb_sunny', label: 'Shalat Dhuha di Rumah/Sekolah', val: '25/28 santri' },
  { icon: 'auto_stories', label: "Tadarus Al-Qur'an Mandiri", val: '27/28 santri' },
  { icon: 'restaurant', label: 'Puasa Ramadhan Penuh', val: '28/28 (100%)', hot: true },
  { icon: 'nights_stay', label: 'Shalat Tarawih & Witir', val: '24/28 santri' }
]
