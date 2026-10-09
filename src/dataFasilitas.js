export const FASILITAS_STATS = [
  {
    title: 'Kapasitas Lab Komputer',
    value: '32 / 36', unit: 'Unit', icon: 'desktop_windows',
    box: 'bg-[#EFF7F5] text-primary',
    foot: '4 PC Perawatan di Lab 1',
    badge: 'Siap CBT', badgeCls: 'bg-tertiary-fixed text-[#0b513d]'
  },
  {
    title: 'Sirkulasi Khizanah Al-Hikmah',
    value: '148', unit: 'Buku Dipinjam', icon: 'library_books',
    box: 'bg-surface-container-low/70 text-[#695E05]',
    foot: '89 Judul Agama & Sains',
    badge: '8 Jatuh Tempo', badgeCls: 'bg-surface-container-highest text-[#695E05]'
  },
  {
    title: 'Jadwal Booking Lab Hari Ini',
    value: '4 Sesi', unit: 'Terisi', icon: 'event_available',
    box: 'bg-secondary-container/40 text-secondary',
    foot: 'Kelas 4 Ali, 5 Umar, 6 Utsman',
    badge: 'Okupansi 85%', badgeCls: 'bg-secondary-container text-[#097169]'
  },
  {
    title: 'Total Koleksi Khizanah',
    value: '3,420', unit: 'Eksemplar', icon: 'auto_stories',
    box: 'bg-[#EFF7F5] text-primary',
    foot: 'Akreditasi A Nasional',
    badge: '98% Terindeks', badgeCls: 'bg-tertiary-fixed text-[#0b513d]'
  }
]

export const FASILITAS_TABS = [
  { label: 'Sirkulasi & Peminjaman Buku', icon: 'sync_alt' },
  { label: 'Katalog Khizanah Al-Hikmah', icon: 'collections_bookmark' },
  { label: 'Jadwal & Booking Lab Komputer', icon: 'laptop_mac' },
  { label: 'Kondisi Inventaris Perangkat', icon: 'inventory_2' }
]

export const PC_ISSUES = { '05': 'Maintenance Mouse', 13: 'Perbaikan Kabel LAN', 22: 'RAM Upgrade', 33: 'Layar Kedip' }

export const KOLEKSI = [
  { tag: 'SIYAR', icon: 'menu_book', grad: 'from-primary to-secondary', judul: 'Kisah Sahabat Nabi Cilik', meta: 'Dr. Majid Az-Zahrani • 38x Dipinjam', bar: '92%', stok: 'Tersedia', stokCls: 'bg-[#AEEED3] text-[#1A5C55]' },
  { tag: 'SAINS', icon: 'biotech', grad: 'from-[#20604b] to-[#3c7963]', judul: "Misteri Alam Semesta dalam Qur'an", meta: 'Prof. Zaghlul An-Najjar • 29x Dipinjam', bar: '78%', stok: 'Sisa 1', stokCls: 'bg-[#FFF8B0] text-[#695E05]' },
  { tag: 'FIQIH', icon: 'mosque', grad: 'from-[#097169] to-[#287A74]', judul: 'Panduan Praktis Shalat Khusyuk', meta: 'Tim Asatidz Balikpapan • 24x Dipinjam', bar: '65%', stok: 'Tersedia', stokCls: 'bg-[#AEEED3] text-[#1A5C55]' }
]

export const SESI_OPTIONS = [
  'Sesi 1 (07.30 - 09.00 WITA) - Tersedia',
  'Sesi 2 (09.15 - 10.45 WITA) - Tersedia',
  'Sesi 3 (11.00 - 12.00 WITA) - Terisi',
  'Sesi 4 (13.30 - 14.30 WITA) - Tersedia'
]

export const ROMBEL_OPTIONS = [
  'Kelas 4 Ali bin Abi Thalib',
  'Kelas 5 Abu Bakar Ash-Shiddiq',
  'Kelas 5 Umar bin Khattab',
  'Kelas 6 Utsman bin Affan',
  'Divisi Guru & Tenaga Kependidikan'
]
