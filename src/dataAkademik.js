export const AKADEMIK_TABS = [
  { label: 'Jurnal Mengajar & Presensi KBM', icon: 'edit_calendar' },
  { label: 'Asesmen Formatif & Sumatif', icon: 'fact_check' },
  { label: 'Projek Penguatan P5', icon: 'diversity_3' },
  { label: 'Ledger & Cetak e-Rapor', icon: 'assignment_turned_in' },
  { label: 'Bank Soal CBT', icon: 'quiz' }
]

export const AKADEMIK_KPI = [
  {
    title: 'Status KBM Pekan Ini',
    badge: 'Sesuai Jadwal',
    badgeCls: 'bg-secondary-container text-[#097169]',
    value: '94%',
    unit: '(16/17 Sesi Terisi)',
    bar: 'bg-primary',
    w: '94%',
    footIcon: 'check_circle',
    foot: 'Terpantau Admin Kurikulum',
    footCls: 'text-primary'
  },
  {
    title: 'Ketuntasan Tujuan (TP)',
    badge: 'KKTP 75.0',
    badgeCls: 'bg-surface-container text-on-surface',
    value: '88.5%',
    unit: 'Santri Tuntas',
    bar: 'bg-primary-container',
    w: '88.5%',
    footIcon: 'trending_up',
    foot: 'Naik 3.4% dari Semester Ganjil',
    footCls: 'text-outline'
  },
  {
    title: 'Presensi Rombel 4 Ali',
    badge: 'Nihil Alfa',
    badgeCls: 'bg-secondary-container text-[#097169]',
    value: '98.2%',
    unit: 'Kehadiran Maret',
    bar: 'bg-tertiary-container',
    w: '98.2%',
    footIcon: 'sentiment_satisfied',
    foot: 'Kedisiplinan Sangat Baik',
    footCls: 'text-tertiary'
  },
  {
    title: 'Progres Pengisian e-Rapor',
    badge: 'Batas 5 Apr',
    badgeCls: 'bg-surface-container-high text-on-surface',
    value: '85%',
    unit: 'Capaian Masuk',
    bar: 'bg-primary',
    w: '85%',
    footIcon: 'history_edu',
    foot: '24/28 Rapor Siap Cetak',
    footCls: 'text-outline'
  }
]

export const ROMBEL_OPTIONS = [
  'Kelas 4 Ali bin Abi Thalib',
  'Kelas 4 Umar bin Khattab',
  'Kelas 4 Utsman bin Affan'
]

export const MAPEL_OPTIONS = [
  'PAI & Budi Pekerti (Terintegrasi)',
  'Matematika Fase B',
  'Bahasa Arab & Tahfidz',
  'IPAS Terapan'
]

export const LINGKUP_OPTIONS = [
  'Lingkup Materi 1 (Puasa & Fiqih)',
  'Lingkup Materi 2 (Tahfidz Juz 30)',
  'Sumatif Akhir Semester (SAS)'
]
