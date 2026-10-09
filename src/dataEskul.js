export const KATEGORI_ESKUL = ['Semua', 'Olahraga Sunnah', 'Keagamaan', 'Sains & Teknologi', 'Seni & Bahasa', 'Bela Diri']

export const ESKUL_AWAL = [
  { id: 1, nama: 'Catur Cepat SDIT', icon: 'sports_esports', kategori: 'Olahraga Sunnah', pembina: 'Master Percasi & Ustadz Ahmad Fauzi', jadwal: 'Senin • 15.45 - 17.00 WITA', lokasi: 'Aula Utama Lt. 2', anggota: 24, kuota: 32, status: 'Aktif' },
  { id: 2, nama: 'Panahan Sunnah (Archery)', icon: 'adjust', kategori: 'Olahraga Sunnah', pembina: 'Coach Hendra (Perpani)', jadwal: 'Senin • 16.00 - 17.15 WITA', lokasi: 'Lapangan Hijau Terbuka', anggota: 18, kuota: 24, status: 'Aktif' },
  { id: 3, nama: 'Robotic & Coding', icon: 'smart_toy', kategori: 'Sains & Teknologi', pembina: 'Ustadz Salman', jadwal: 'Senin • 16.00 - 17.15 WITA', lokasi: 'Lab Komputer 1', anggota: 16, kuota: 20, status: 'Aktif' },
  { id: 4, nama: 'Tahfidz Club', icon: 'menu_book', kategori: 'Keagamaan', pembina: 'Ustadzah Sarah, S.Pd', jadwal: 'Selasa & Kamis • 15.30 - 17.00 WITA', lokasi: 'Masjid Ulul Albab', anggota: 48, kuota: 60, status: 'Aktif' },
  { id: 5, nama: 'Silat Tapak Suci', icon: 'sports_martial_arts', kategori: 'Bela Diri', pembina: 'Ustadz Hidayat (Pimda TSPM)', jadwal: 'Rabu • 15.45 - 17.15 WITA', lokasi: 'Halaman Depan Sekolah', anggota: 30, kuota: 40, status: 'Aktif' },
  { id: 6, nama: 'Kaligrafi & Seni Islami', icon: 'brush', kategori: 'Seni & Bahasa', pembina: 'Ustadzah Maryam', jadwal: 'Jumat • 14.00 - 15.30 WITA', lokasi: 'Ruang Seni Lt. 1', anggota: 14, kuota: 25, status: 'Pendaftaran' }
]

export const BIDANG_TALENT = ['Catur & Strategi', 'Tahfidz & Tilawah', 'Robotik & Coding', 'Panahan', 'Pidato & Bahasa', 'Seni Kaligrafi', 'Olahraga (Futsal)', 'Sains & Matematika']

export const TALENT_AWAL = [
  { id: 1, nama: 'Muhammad Faris Al-Fatih', kelas: '4 Ali bin Abi Thalib', bidang: 'Catur & Strategi', level: 'Supertalent', eskul: 'Catur Cepat SDIT', skor: 'Rating internal 1450 • Juara 1 O2SN Kota', rekomendasi: 'TC Provinsi + privat endgame 2x pekan' },
  { id: 2, nama: 'Aisyah Nur Ramadhani', kelas: '4 Ali bin Abi Thalib', bidang: 'Tahfidz & Tilawah', level: 'Supertalent', eskul: 'Tahfidz Club', skor: 'MHQ 3 Juz • Tartil mumtaz', rekomendasi: 'Delegasi FASI Nasional + karantina juz 29' },
  { id: 3, nama: 'Raffasya Dwi Putra', kelas: '4 Ali bin Abi Thalib', bidang: 'Robotik & Coding', level: 'Berkembang', eskul: 'Robotic & Coding', skor: 'Juara 2 Line Follower Regional', rekomendasi: 'Fokus sensor + lomba provinsi berikutnya' },
  { id: 4, nama: 'Zaid bin Tsabit Jr.', kelas: '4 Ali bin Abi Thalib', bidang: 'Panahan', level: 'Berkembang', eskul: 'Panahan Sunnah (Archery)', skor: 'Harapan 1 Horsebow U-12', rekomendasi: 'Latihan jarak 15m + fisik inti' }
]

export const LEVEL_STYLE = {
  Supertalent: 'bg-[#AEEED3] text-[#1A5C55] border border-[#94d3b9]',
  Berkembang: 'bg-[#FFF8B0] text-[#695E05] border border-[#f1eba4]',
  Emerging: 'bg-[#EFF7F5] text-[#287A74] border border-[#CFE2DE]'
}
