export const NAV_MAIN = [
  { label: 'Akademik & KBM', icon: 'menu_book', href: '#akademik', active: true },
  { label: 'Kekhasan SDIT', icon: 'auto_stories', href: '#kekhasan', tag: 'Khas' },
  { label: 'Fasilitas Sekolah', icon: 'domain', href: '#fasilitas' },
  { label: 'Kesiswaan & Eskul', icon: 'emoji_events', href: '#kesiswaan' },
  { label: 'PPDB & Keuangan', icon: 'payments', href: '#keuangan', dot: true },
  { label: 'Pengaturan Sistem', icon: 'settings', href: '#pengaturan' }
]

export const STATS = [
  {
    title: 'Presensi Rombel 4 Ali',
    icon: 'group',
    iconBox: 'bg-tertiary-fixed/40 text-tertiary',
    value: '28/28',
    suffix: 'Siswa',
    badge: '100% Hadir',
    badgeCls: 'bg-tertiary-fixed text-[#1A5C55]',
    foot: 'Nihil Izin / Sakit'
  },
  {
    title: 'Jurnal KBM Hari Ini',
    icon: 'history_edu',
    iconBox: 'bg-secondary-container/60 text-secondary',
    value: '3',
    extra: '/ 4 JP',
    suffix: 'Tercatat',
    badge: '1 Jam Tertunda',
    badgeCls: 'bg-surface-container-high text-[#695E05]',
    foot: 'Matematika Jam ke-3'
  },
  {
    title: 'Capaian Tahfidz Kelas',
    icon: 'verified',
    filled: true,
    iconBox: 'bg-primary-fixed/60 text-primary',
    value: '89%',
    suffix: 'On-Target',
    badge: 'Juz 30 (An-Naba s/d At-Takwir)',
    badgeCls: 'bg-[#E0F2F0] text-primary',
    foot: ''
  },
  {
    title: 'Verifikasi SPP & PPDB',
    icon: 'receipt_long',
    iconBox: 'bg-error-container/60 text-error',
    value: '12',
    suffix: 'Bukti Masuk',
    suffixMuted: true,
    badge: 'Butuh Verifikasi',
    badgeCls: 'bg-error-container text-error',
    foot: 'PPDB & SPP Maret'
  }
]

export const TAHFIDZ_ROWS = [
  {
    nama: 'Muhammad Faris Al-Fatih',
    nisn: '0134982210',
    surah: 'At-Takwir (1 - 29)',
    ket: 'Ziyadah Baru (Lancar)',
    tajwid: 'Mumtaz (A+)',
    adab: 'Sangat Baik',
    status: 'Disahkan',
    statusCls: 'bg-tertiary-fixed text-[#1A5C55]',
    aksi: 'comment'
  },
  {
    nama: 'Aisyah Nur Ramadhani',
    nisn: '0134982218',
    surah: "'Abasa (1 - 42)",
    ket: "Muraja'ah Mingguan",
    tajwid: 'Jayyid Jiddan (A)',
    adab: 'Sangat Baik',
    status: 'Disahkan',
    statusCls: 'bg-tertiary-fixed text-[#1A5C55]',
    aksi: 'comment'
  },
  {
    nama: 'Raffasya Dwi Putra',
    nisn: '0134982231',
    surah: "An-Nazi'at (20 - 46)",
    ket: 'Tashih Ulang Ayat 35',
    tajwid: 'Jayyid (B+)',
    tajwidCls: 'bg-surface-container-high text-[#695E05]',
    adab: 'Baik',
    status: 'Perlu Tashih',
    statusCls: 'bg-[#FFF8B0] text-[#695E05]',
    aksi: 'rate_review'
  }
]

export const ACTIVITY = [
  {
    icon: 'upload_file',
    box: 'bg-[#EFF7F5] text-primary',
    html: '<strong class="font-semibold text-primary">Ustadzah Sarah</strong> mengunggah Modul Ajar RPP Fase B Kelas 4.',
    time: '12 menit yang lalu \u2022 Supabase Storage'
  },
  {
    icon: 'payments',
    box: 'bg-tertiary-fixed/40 text-tertiary',
    html: 'Wali Murid <strong class="font-semibold">M. Al-Fatih (4 Ali)</strong> mengunggah bukti bayar SPP Maret.',
    time: '34 menit yang lalu \u2022 Menunggu Bendahara'
  },
  {
    icon: 'quiz',
    box: 'bg-surface-container-high/60 text-[#695E05]',
    html: '<strong class="font-semibold">2 Siswa Kelas 5 Utsman</strong> menyelesaikan kuis CBT PAI mandiri.',
    time: '1 jam yang lalu \u2022 Nilai Terbit Otomatis'
  }
]
