export const ADMIN_TABS = [
  { label: 'Verifikasi Transfer & Pembayaran SPP (12 Antrean)', icon: 'verified' },
  { label: 'Buku Kas & Riwayat SPP Rombel', icon: 'menu_book' },
  { label: 'PPDB 2024/2025: Jalur Reguler & Prestasi Tahfidz', icon: 'badge' },
  { label: 'Infaq Sarpras & Tabungan Qurban Santri', icon: 'savings' }
]

export const ADMIN_STATS = [
  {
    title: 'Realisasi SPP Ramadhan',
    value: 'Rp 142.850.000',
    sub: 'Target: Rp 152.000.000',
    icon: 'account_balance_wallet',
    box: 'bg-secondary-container text-primary',
    accent: 'bg-secondary-container/20',
    kind: 'progress',
    pct: '94%',
    pctLabel: 'Terkumpul',
    foot: '42 Santri Belum Bayar',
    barPct: '94%',
    barColor: 'bg-primary-container'
  },
  {
    title: 'Verifikasi Bukti Transfer',
    value: '12',
    extra: 'Transaksi',
    badge: 'Perlu Tindakan',
    sub: 'Total Nominal: Rp 18.600.000',
    icon: 'receipt_long',
    box: 'bg-surface-container-low text-on-surface',
    accent: 'bg-surface-container-low/40',
    kind: 'link',
    linkLabel: 'Audit Sekarang',
    foot: 'Antrean audit hari ini'
  },
  {
    title: 'Pendaftar PPDB Gelombang 2',
    value: '148',
    extra: 'Calon Santri',
    sub: 'Kuota: 160 Kursi (Sisa 12 Kursi)',
    icon: 'how_to_reg',
    box: 'bg-tertiary-fixed text-primary',
    accent: 'bg-secondary-container/20',
    kind: 'progress',
    pct: '105',
    pctLabel: 'Lulus Observasi',
    foot: '43 Dalam Proses',
    barPct: '92.5%',
    barColor: 'bg-primary'
  },
  {
    title: 'Infaq & Donasi Ramadhan',
    value: 'Rp 28.450.000',
    sub: 'ZISWAF & Santunan Yatim Dhuafa',
    icon: 'volunteer_activism',
    box: 'bg-secondary-container/70 text-primary',
    accent: 'bg-surface-variant/30',
    kind: 'split',
    splitLeft: 'Tersalurkan Rp 15.000.000',
    footBadge: 'Amanah'
  }
]

export const ROMBEL_OPTIONS = [
  'Kelas 4 Ali bin Abi Thalib',
  'Semua Rombel (Kelas 1 - 6)',
  'Kelas 1 Abu Bakar Ash-Shiddiq',
  'Kelas 2 Umar bin Khattab',
  'Kelas 3 Utsman bin Affan',
  'Pendaftar Calon Santri PPDB'
]

export const STATUS_OPTIONS = [
  'Status: Menunggu Approval (12)',
  'Semua Status Transaksi',
  'Terverifikasi Otomatis / Kasir',
  'Ditolak / Konfirmasi Ulang'
]

// Kartu transaksi verifikasi transfer / pembayaran SPP
export const TRANSAKSI = [
  {
    id: 1,
    active: true,
    nama: 'Muhammad Faris Al-Fatih',
    meta: 'NISN: 014892210',
    rombel: 'Kelas 4 Ali bin Abi Thalib',
    waktu: 'Hari ini, 09:15 WITA',
    nominal: 'Rp 850.000',
    nominalCls: 'text-primary',
    metode: 'BSI Hasanah Mobile • Ref: 8829102',
    status: 'Menunggu Approval',
    statusCls: 'px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface text-[11px] font-bold border border-surface-variant',
    icon: 'person',
    iconCls: 'bg-secondary-container/60 border border-secondary-container',
    tagihan: [
      { text: 'Tagihan: SPP Maret 2024 (Rp 650.000)', cls: 'bg-surface text-on-surface-variant border border-outline-variant' },
      { text: '+ Infaq Ramadhan (Rp 200.000)', cls: 'bg-secondary-container/40 text-primary border border-secondary-container' }
    ],
    actions: [
      { label: 'Lihat Resi', icon: 'visibility', cls: 'bg-surface border border-outline-variant text-on-surface-variant hover:bg-surface-container-low' },
      { label: 'Tolak', icon: 'close', cls: 'bg-surface border border-error/30 text-error hover:bg-error-container' },
      { label: 'Setujui (Kirim WA)', icon: 'check_circle', cls: 'bg-primary-container text-on-primary hover:bg-primary shadow-sm', primary: true }
    ]
  },
  {
    id: 2,
    nama: 'Aisyah Nur Ramadhani',
    meta: 'NISN: 0148922109',
    rombel: 'Kelas 4 Ali bin Abi Thalib',
    waktu: 'Hari ini, 08:30 WITA',
    nominal: 'Rp 650.000',
    nominalCls: 'text-on-surface',
    metode: 'Bank Muamalat (BMI VA) • Auto-settled',
    status: 'Terverifikasi Otomatis',
    statusCls: 'px-2 py-0.5 rounded-full bg-tertiary-fixed text-primary text-[11px] font-bold inline-flex items-center gap-1',
    statusIcon: 'check',
    icon: 'person_3',
    iconCls: 'bg-tertiary-fixed/60 border border-tertiary-fixed',
    tagihan: [
      { text: 'Tagihan: SPP Maret 2024 (Lunas)', cls: 'bg-surface text-on-surface-variant border border-outline-variant' }
    ],
    actions: [
      { label: 'Kwitansi Terbit #KW-0928', icon: 'receipt', cls: 'bg-surface border border-outline-variant text-primary hover:bg-secondary-container/20' },
      { label: '', icon: 'share', cls: 'bg-surface text-outline hover:text-primary', iconOnly: true }
    ]
  },
  {
    id: 3,
    nama: 'Raffasya Dwi Putra',
    meta: 'NISN: 0148922144',
    rombel: 'Kelas 4 Ali bin Abi Thalib',
    waktu: 'Kemarin, 19:40 WITA',
    nominal: 'Rp 500.000',
    nominalCls: 'text-primary',
    metode: 'BSI Hasanah • Slip ATM Manual',
    status: 'Menunggu Approval',
    statusCls: 'px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface text-[11px] font-bold border border-surface-variant',
    icon: 'person',
    iconCls: 'bg-secondary-container/60 border border-secondary-container',
    tagihan: [
      { text: 'Tagihan: SPP Maret 2024 (Subsidi Beasiswa Yatim)', cls: 'bg-surface text-on-surface-variant border border-outline-variant' }
    ],
    actions: [
      { label: 'Slip ATM', icon: 'image', cls: 'bg-surface border border-outline-variant text-on-surface-variant hover:bg-surface-container-low' },
      { label: 'Setujui', icon: 'check', cls: 'bg-primary-container text-on-primary hover:bg-primary', primary: true }
    ]
  },
  {
    id: 4,
    nama: 'Ahmad Dzaki Robbani',
    meta: 'No Reg: PPDB-2024-089',
    rombel: 'Jalur Reguler Gelombang 2',
    waktu: '24 Maret 2024',
    nominal: 'Rp 350.000',
    nominalCls: 'text-primary',
    metode: 'QRIS BSI • Biaya Observasi & Psikotes',
    status: 'Calon Santri PPDB',
    statusCls: 'px-2 py-0.5 rounded-full bg-secondary-container text-primary text-[11px] font-bold',
    icon: 'badge',
    iconCls: 'bg-secondary-fixed/50 border border-secondary-fixed',
    tagihan: [
      { text: 'Biaya Formulir & Observasi Kematangan', cls: 'bg-surface text-on-surface-variant border border-outline-variant' }
    ],
    actions: [
      { label: 'Verifikasi Berkas PPDB', icon: 'verified', cls: 'bg-primary-container text-on-primary hover:bg-primary shadow-sm', primary: true }
    ]
  },
  {
    id: 5,
    nama: 'Zaid bin Tsabit Jr.',
    meta: 'NISN: 0148922177',
    rombel: 'Kelas 4 Ali bin Abi Thalib',
    waktu: 'Diverifikasi oleh Ust. Ahmad Fauzi',
    nominal: 'Rp 550.000',
    nominalCls: 'text-on-surface',
    metode: 'Setoran Tunai Kasir Sekolah',
    status: 'Terverifikasi Bendahara',
    statusCls: 'px-2 py-0.5 rounded-full bg-tertiary-fixed text-primary text-[11px] font-bold',
    icon: 'person',
    iconCls: 'bg-tertiary-fixed/60 border border-tertiary-fixed',
    tagihan: [
      { text: 'SPP Maret 2024 & Iuran Eskul Catur', cls: 'bg-surface text-on-surface-variant border border-outline-variant' }
    ],
    actions: [
      { label: 'Cetak Kwitansi Manual', icon: 'print', cls: 'bg-surface border border-outline-variant text-primary hover:bg-secondary-container/20' }
    ]
  }
]

// Panel Audit Cepat Bukti Transfer (kolom kanan)
export const AUDIT = {
  badge: 'Item #1 Aktif',
  receiptHeader: 'Bukti Resi M-Banking (BSI)',
  receiptStatus: 'Terverifikasi OCR 100%',
  rows: [
    { label: 'Wali Murid (Pengirim):', value: 'Bpk. Hendra Gunawan', cls: 'font-bold text-on-surface' },
    { label: 'Santri:', value: 'M. Faris Al-Fatih (4 Ali)', cls: 'font-semibold text-primary' },
    { label: 'No. Referensi:', value: 'BSI-TRX-8829102', mono: true },
    { label: 'Nominal Tertera:', value: 'Rp 850.000', big: true }
  ],
  checklist: [
    'Mutasi BSI Internet Banking Match (Rp 850.000)',
    'Nominal Sesuai Invoice Maret (Tagihan #INV-4410)'
  ]
}

// Progres Kuota PPDB 2024 (kolom kanan)
export const PPDB = {
  title: 'Progres Kuota PPDB 2024',
  targetLabel: 'Target: 4 Rombel',
  headline: '148 / 160 Santri',
  pct: '92.5% Kuota',
  barPct: '92.5%',
  note: 'Tersisa 12 kursi kosong sebelum pendaftaran ditutup.',
  breakdown: [
    { label: 'Lulus & Lunas Uang Pangkal', value: '105 santri', dot: 'bg-primary' },
    { label: 'Tahap Observasi & Tes Adab', value: '15 santri', dot: 'bg-tertiary-fixed-dim' },
    { label: 'Pendaftar Baru & Berkas Lengkap', value: '28 santri', dot: 'bg-surface-variant' }
  ],
  linkLabel: 'Lihat Daftar Calon Siswa PPDB & Hasil Tes'
}

// Rekening Kas Yayasan SDIT (kolom kanan)
export const REKENING = [
  {
    bank: 'Bank Syariah Indonesia (BSI)',
    tag: 'VA & QRIS',
    tagCls: 'bg-primary text-on-primary',
    number: '7182-9901-22',
    holder: 'a.n Yayasan Balikpapan Islamic School',
    cls: 'bg-secondary-container/30 border border-secondary-container',
    bankCls: 'text-primary'
  },
  {
    bank: 'Bank Muamalat Indonesia (BMI)',
    tag: 'Giro Operasional',
    tagCls: 'bg-surface-variant text-on-surface',
    number: '602-0012-333',
    holder: 'a.n SDIT Balikpapan Rekening SPP',
    cls: 'bg-surface border border-outline-variant',
    bankCls: 'text-on-surface'
  }
]
