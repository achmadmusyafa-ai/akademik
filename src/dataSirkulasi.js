export const SIRKULASI_ROWS = [
  {
    no: 1, nama: 'Muhammad Faris Al-Fatih', kelas: 'Kelas 4 Ali bin Abi Thalib',
    judul: 'Kisah 25 Nabi & Rasul Bergambar (Jilid 3)', kode: 'KB-ISL-0482',
    pinjam: '18 Mar 2024', tenggat: 'Tenggat: 25 Mar 2024', late: false,
    status: 'Jatuh Tempo Hari Ini', statusCls: 'bg-[#FFF8B0] text-[#695E05]',
    denda: 'Bebas Denda', dendaCls: 'text-outline',
    aksi: 'Kembalikan', aksiCls: 'bg-primary hover:bg-[#216661] text-white'
  },
  {
    no: 2, nama: 'Aisyah Nur Ramadhani', kelas: 'Kelas 4 Ali bin Abi Thalib',
    judul: "Ensiklopedia Mukjizat Al-Qur'an & Sains", kode: 'KB-SCI-0199',
    pinjam: '20 Mar 2024', tenggat: 'Tenggat: 27 Mar 2024', late: false,
    status: 'Dipinjam', statusCls: 'bg-[#AEEED3] text-[#1A5C55]',
    denda: '-', dendaCls: 'text-outline',
    aksi: 'Perpanjang', aksiCls: 'bg-[#EFF7F5] hover:bg-[#E0ECE9] text-primary border border-[#CFE2DE]'
  },
  {
    no: 3, nama: 'Raffasya Dwi Putra', kelas: 'Kelas 4 Ali bin Abi Thalib',
    judul: 'Komik Adab Anak Muslim: Menuntut Ilmu', kode: 'KB-ADB-0051',
    pinjam: '14 Mar 2024', tenggat: 'Tenggat: 21 Mar 2024', late: true,
    status: 'Terlambat 4 Hari', statusCls: 'bg-[#FDE8E8] text-[#9B1C1C]',
    denda: 'Rp 4.000', note: '(Infaq Buku)', dendaCls: 'text-error font-bold',
    aksi: 'Kirim WA', aksiIcon: 'chat',
    aksiCls: 'bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/30'
  },
  {
    no: 4, nama: 'Ustadzah Sarah, S.Pd', kelas: 'Guru Pendidikan Agama Islam',
    judul: 'Tafsir Ibnu Katsir Ringkas (Jilid 2)', kode: 'KB-TFS-0012',
    pinjam: '10 Mar 2024', tenggat: 'Tenggat: 31 Mar 2024', late: false,
    status: 'Peminjaman Guru', statusCls: 'bg-[#E0F2F0] text-[#287A74]',
    denda: '-', dendaCls: 'text-outline',
    aksi: 'Detail', aksiCls: 'bg-white hover:bg-[#EFF7F5] text-on-surface border border-[#E0ECE9]'
  },
  {
    no: 5, nama: 'Zaid bin Tsabit Jr.', kelas: 'Kelas 4 Ali bin Abi Thalib',
    judul: 'Sirah Nabawiyah Ar-Rahiq Al-Makhtum', kode: 'KB-SRH-0301',
    pinjam: '22 Mar 2024', tenggat: 'Tenggat: 29 Mar 2024', late: false,
    status: 'Dipinjam', statusCls: 'bg-[#AEEED3] text-[#1A5C55]',
    denda: '-', dendaCls: 'text-outline',
    aksi: 'Perpanjang', aksiCls: 'bg-[#EFF7F5] hover:bg-[#E0ECE9] text-primary border border-[#CFE2DE]'
  }
]

export const LAB_SESI = [
  {
    tag: 'SESI 1', sub: 'SELESAI', jam: '07.30 - 09.00 WITA', mode: 'done',
    judul: 'Kelas 6 Umar bin Khattab • Simulasi CBT Asesmen Madrasah & ANBK',
    desc: 'Pengampu: Ustadzah Nurul Hidayah, S.Pd • 32 Peserta Terverifikasi'
  },
  {
    tag: 'SESI 2', sub: 'AKTIF', jam: '09.15 - 10.45 WITA', mode: 'active',
    judul: 'Kelas 4 Ali bin Abi Thalib • KBM TIK: Algoritma Dasar & Mengetik Arab',
    desc: 'Pengampu: Ustadz Ahmad Fauzi, S.Pd.I • 28 Siswa Hadir di Lab'
  },
  {
    tag: 'SESI 3', sub: 'NANTI', jam: '11.00 - 12.00 WITA', mode: 'next',
    judul: 'Eskul Robotic & Coding SDIT Balikpapan',
    desc: 'Instruktur: Tim Robotic Balikpapan & Ustadz Salman • ESP32 & Scratch Jr'
  },
  {
    tag: 'SESI 4', sub: 'PENDING', jam: '13.30 - 14.30 WITA', mode: 'pending',
    judul: 'Kelas 5 Abu Bakar Ash-Shiddiq • Latihan Soal PAI Online',
    desc: 'Pengampu: Ustadzah Maryam • Menunggu Approval Sarpras'
  }
]
