export const MATCHES = [
  {
    meja: '01',
    putih: 'Muhammad Faris Al-Fatih',
    putihSub: 'Kelas 4 Ali bin Abi Thalib',
    putihSkor: '3.0',
    hitam: 'Zaid bin Tsabit Jr.',
    hitamSub: 'Kelas 4 Ali bin Abi Thalib',
    hitamSkor: '3.0',
    mode: 'live',
    waktu: '08:42 vs 09:15'
  },
  {
    meja: '02',
    putih: 'Raffasya Dwi Putra',
    putihSub: 'Kelas 4 Ali',
    putihSkor: '2.5',
    hitam: 'Sultan Al-Ghifari',
    hitamSub: 'Kelas 5 Umar bin Khattab',
    hitamSkor: '2.5',
    hitamMuted: true,
    mode: 'done',
    hasil: 'Selesai (1 - 0)'
  },
  {
    meja: '03',
    putih: 'Hamzah Abdullah',
    putihSub: 'Kelas 6 Utsman',
    putihSkor: '2.0',
    hitam: 'Rayyan Arkhan',
    hitamSub: 'Kelas 4 Abu Bakar',
    hitamSkor: '2.0',
    mode: 'live',
    waktu: '04:12 vs 03:50'
  },
  {
    meja: '04',
    putih: 'Aisyah Nur Ramadhani',
    putihTag: '(Putri)',
    putihSub: 'Kelas 4 Ali',
    putihSkor: '2.0',
    hitam: 'Maryam Khadijah',
    hitamTag: '(Putri)',
    hitamSub: 'Kelas 4 Ali',
    hitamSkor: '2.0',
    mode: 'remis',
    hasil: 'Remis (0.5 - 0.5)'
  },
  {
    meja: '05',
    putih: 'Bilal Al-Banjari',
    putihSub: 'Kelas 5 Umar',
    putihSkor: '1.5',
    hitam: 'Fatih Rabbani',
    hitamSub: 'Kelas 3 Utsman',
    hitamSkor: '1.5',
    mode: 'live',
    waktu: '11:05 vs 10:20'
  }
]

export const STANDINGS = [
  { rank: 1, nama: 'M. Faris Al-Fatih', pts: '3.0', bh: '7.5', hot: true },
  { rank: 2, nama: 'Zaid bin Tsabit Jr.', pts: '3.0', bh: '7.0', hot: true },
  { rank: 3, nama: 'Raffasya Dwi P.', pts: '3.5', bh: '6.5', mid: true },
  { rank: 4, nama: 'Sultan Al-Ghifari', pts: '2.5', bh: '6.0' },
  { rank: 5, nama: 'Hamzah Abdullah', pts: '2.0', bh: '5.5' }
]

export const PRESTASI = [
  {
    badge: 'O2SN Balikpapan', badgeCls: 'bg-amber-100 text-amber-900', icon: 'workspace_premium', iconCls: 'text-amber-600',
    date: 'Maret 2024', judul: 'Juara 1 O2SN Catur SD Putra Tingkat Kota',
    desc: 'Muhammad Faris Al-Fatih', extra: '(Piala Emas & Piagam Disdikbud Kota Balikpapan)',
    foot1: 'Pembimbing: Ustadz Ahmad Fauzi', foot2: 'Lolos Provinsi', footIcon: 'verified'
  },
  {
    badge: 'Regional Kaltim', badgeCls: 'bg-slate-200 text-slate-800', icon: 'smart_toy', iconCls: 'text-slate-600',
    date: 'Februari 2024', judul: 'Juara 2 Lomba Robotika Line Follower',
    desc: 'Tim Robotic SDIT', extra: '(Raffasya Dwi Putra & Maryam Khadijah)',
    foot1: 'Islamic Science Expo 2024', foot2: 'Medali Perak', footIcon: 'military_tech'
  },
  {
    badge: 'FASI Kaltim', badgeCls: 'bg-[#AEEED3] text-[#1A5C55]', icon: 'menu_book', iconCls: 'text-[#1A5C55]',
    date: 'Januari 2024', judul: 'Juara 1 MHQ 3 Juz Festival Anak Sholeh',
    desc: 'Aisyah Nur Ramadhani', extra: '(Festival Anak Sholeh Indonesia Tingkat Provinsi)',
    foot1: 'Tahfidz Club SDIT Balikpapan', foot2: 'Delegasi Nasional', footIcon: 'military_tech'
  },
  {
    badge: 'Perpani Balikpapan', badgeCls: 'bg-[#FFF8B0] text-[#695E05]', icon: 'adjust', iconCls: 'text-amber-700',
    date: 'Desember 2023', judul: 'Juara Harapan 1 Panahan Tradisional Sunnah',
    desc: 'Zaid bin Tsabit Jr.', extra: '(Horsebow U-12 Kejuaraan Daerah Panahan)',
    foot1: 'Pelatih: Coach Hendra', foot2: 'Sertifikat Dispora', footIcon: 'verified'
  }
]

export const JADWAL_ESKUL = [
  {
    icon: 'sports_esports', nama: 'Eskul Catur SDIT Balikpapan', live: true,
    hadir: '24/24 Hadir', jam: '15.45 - 17.00 WITA • Aula Utama Lantai 2',
    kiri: 'Instruktur: Master Percasi & Ustadz Ahmad', kanan: 'Sesi Tanding Babak 4', kananCls: 'text-primary'
  },
  {
    icon: 'adjust', nama: 'Eskul Panahan Sunnah (Archery)', iconCls: 'text-[#287A74]',
    hadir: '18 Santri', jam: '16.00 - 17.15 WITA • Lapangan Hijau Terbuka',
    kiri: 'Pelatih: Coach Hendra (Perpani)', kanan: 'Latihan Jarak 15m', kananCls: 'text-amber-700'
  },
  {
    icon: 'smart_toy', nama: 'Eskul Robotic & Coding SDIT', iconCls: 'text-[#287A74]',
    hadir: '16 Santri', jam: '16.00 - 17.15 WITA • Lab Komputer 1',
    kiri: 'Instruktur: Ustadz Salman', kanan: 'Pemrograman Sensor', kananCls: 'text-primary'
  }
]

export const DISTRIBUSI = [
  { label: 'Olahraga Sunnah (Catur, Panahan, Futsal)', val: '135 Santri (39%)', bar: 'bg-[#287A74]', w: '39%' },
  { label: 'Keagamaan (Tahfidz Club & Kaligrafi)', val: '110 Santri (32%)', bar: 'bg-[#55A9A0]', w: '32%' },
  { label: 'Sains & Teknologi (Robotic, Coding, Saintis)', val: '65 Santri (19%)', bar: 'bg-[#82d5cb]', w: '19%' },
  { label: 'Seni & Bahasa (Pidato 3 Bahasa, Nasyid)', val: '32 Santri (10%)', bar: 'bg-[#AEEED3]', w: '10%' }
]

export const MEJA_OPTIONS = [
  'Meja 1: Faris Al-Fatih (P) vs Zaid (H)',
  'Meja 3: Hamzah (P) vs Rayyan Arkhan (H)',
  'Meja 5: Bilal (P) vs Fatih Rabbani (H)'
]
