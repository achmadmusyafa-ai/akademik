export const PENGATURAN_TABS = [
  { label: 'Manajemen Pengguna & Hak Akses (RBAC)', icon: 'manage_accounts' },
  { label: 'Tabel & Kebijakan RLS PostgreSQL', icon: 'database' },
  { label: 'Konfigurasi Autentikasi & WhatsApp', icon: 'sms' },
  { label: 'Audit Log & Sesi Aktif', icon: 'receipt_long' }
]

export const PENGATURAN_STATS = [
  {
    title: 'Total Pengguna Terdaftar',
    value: '184 Akun Aktif',
    sub: '38 Guru & Asatidz • 142 Wali Murid • 4 Admin',
    icon: 'group',
    box: 'bg-surface-container-low text-on-surface',
    accent: 'bg-surface-container-low/40',
    kind: 'link',
    foot: 'Antrean audit hari ini',
    linkLabel: 'Lihat Daftar',
    status: '7'
  },
  {
    title: 'Kebijakan RLS (Row Level Security)',
    value: '26 Policies Aktif',
    sub: 'Terpasang pada 8 Tabel Inti Sekolah',
    icon: 'security',
    box: 'bg-secondary-container/40 text-primary',
    accent: 'bg-secondary-container/20',
    kind: 'split',
    splitLeft: '100% RLS Enabled (Enforced)',
    footBadge: 'Mutlak'
  },
  {
    title: 'Koneksi Supabase & API',
    value: 'Status Terhubung',
    sub: 'Latency: 14ms (Balikpapan DC) • TLS 1.3',
    icon: 'hub',
    box: 'bg-[#E0F2F0] text-[#287A74]',
    accent: 'bg-[#E0F2F0]/40',
    kind: 'progress',
    pct: '98%',
    pctLabel: 'Konektif',
    foot: 'Postgres 15.2 • Anon + Service Role',
    barPct: '98%',
    barColor: 'bg-primary'
  },
  {
    title: 'Audit Log & Percobaan Akses',
    value: '0 Insiden Pelanggaran',
    sub: '7.420 Permintaan API 24 jam terakhir',
    icon: 'policy',
    box: 'bg-error-container/40 text-error',
    accent: 'bg-error-container/20',
    kind: 'split',
    splitLeft: 'Audited & Compliant',
    footBadge: 'Zero leak'
  }
]

export const USERS = [
  {
    initial: 'AF',
    name: 'Ustadz Ahmad Fauzi, S.Pd.I',
    email: 'ahmad.fauzi@sdit-balikpapan.sch.id',
    role: 'Super Admin & Guru Kelas 4 Ali',
    roleCls: 'bg-[#E0F2F0] text-[#287A74]',
    rls: 'Full R/W Semua Modul',
    rlsCls: 'text-[#287A74] font-mono',
    status: 'Aktif (2FA On)',
    statusCls: 'bg-[#AEEED3] text-[#1A5C55]',
    genesi: 'Super Admin & Guru Kelas 4 Ali'
  },
  {
    initial: 'NH',
    name: 'Ustadzah Nurul Hidayah, S.Pd',
    email: 'nurul.h@sdit-balikpapan.sch.id',
    role: 'Guru Mapel & Pengelola Sarpras',
    roleCls: 'bg-[#EFF7F5] text-[#287A74]',
    rls: 'R/W Fasilitas & Nilai KBM',
    rlsCls: 'text-outline',
    status: 'Aktif',
    statusCls: 'bg-[#AEEED3] text-[#1A5C55]',
    genesi: 'Scoped to class 4 & 5'
  },
  {
    initial: 'SA',
    name: 'Ustadz Salman Al-Farisi',
    email: 'salman.tahfidz@sdit-balikpapan.sch.id',
    role: 'Musyrif / Guru Tahfidz',
    roleCls: 'bg-[#E0F2F0] text-[#287A74]',
    rls: 'R/W Mutabaah Halaqah Santri',
    rlsCls: 'text-[#287A74] font-mono',
    status: 'Aktif',
    statusCls: 'bg-[#AEEED3] text-[#1A5C55]',
    genesi: "RLS: guru_id = auth.uid()"
  },
  {
    initial: 'SM',
    name: 'Ustadzah Siti Maryam, S.E',
    email: 'maryam.keuangan@sdit-balikpapan.sch.id',
    role: 'Bendahara Sekolah',
    roleCls: 'bg-[#FFF8B0] text-[#695E05]',
    rls: 'R/W Keuangan SPP & Verifikasi PPDB',
    rlsCls: 'text-outline',
    status: 'Aktif',
    statusCls: 'bg-[#AEEED3] text-[#1A5C55]',
    genesi: 'Scoped: Finance tables only'
  },
  {
    initial: 'HG',
    name: 'Hendra Gunawan (Wali Santri M. Faris)',
    email: 'hendra.g@gmail.com',
    role: 'Wali Murid (M. Faris Al-Fatih)',
    roleCls: 'bg-[#EFF7F5] text-on-surface-variant',
    rls: 'R/O Profil Anak, Mutabaah & Bukti SPP',
    rlsCls: 'text-[#287A74] font-mono',
    status: 'Aktif',
    statusCls: 'bg-[#AEEED3] text-[#1A5C55]',
    genesi: "RLS: santri_id = child(auth.uid())"
  }


export const POLICIES = [
  {
    id: 'policy_wali_view_own_child_mutabaah',
    label: 'Hanya baris santri yang tertaut pada ID wali',
    scope: 'SELECT only',
    scopeCls: 'bg-[#AEEED3] text-[#1A5C55]',
    desc: 'Hanya baris santri yang tertaut pada ID wali di tabel referensi santri.'
  },
  {
    id: 'policy_guru_update_assigned_rombel',
    label: 'Guru Tahfidz menginput mutabaah hanya pada santri kelompok halaqahnya',
    scope: 'INSERT / UPDATE',
    scopeCls: 'bg-[#AEEED3] text-[#1A5C55]',
    desc: 'Guru Tahfidz menginput mutabaah hanya pada santri kelompok halaqahnya.'
  },
  {
    id: 'policy_bendahara_read_write_spp_transfers',
    label: 'Bendahara memiliki izin penuh untuk rekap verifikasi pembayaran SPP',
    scope: 'ALL actions',
    scopeCls: 'bg-[#AEEED3] text-[#1A5C55]',
    desc: 'Bendahara memiliki izin penuh untuk rekap verifikasi pembayaran SPP.'
  },
  {
    id: 'policy_public_access_disabled',
    label: 'Anon public key tidak diizinkan membaca atau menulis data santri',
    scope: 'Ditolak (Anon Blocked)',
    scopeCls: 'bg-error-container text-error',
    desc: 'Anon public key tidak diizinkan membaca atau menulis data santri.'
  }
]

export const AUDIT_LOG = [
  {
    time: '2 menit lalu • Supabase Audit Hook',
    iconCls: 'bg-[#AEEED3] text-[#1A5C55]',
    iconName: 'check',
    msg: 'Otorisasi Sukses: Ustadzah Siti Maryam memverifikasi transfer <span className="font-mono text-label-sm text-[#287A74]">BSI-TRX-8829102</span>'
  },
  {
    time: '14 menit lalu • IP Balikpapan Transit',
    iconCls: 'bg-error-container text-error',
    iconName: 'gpp_bad',
    msg: 'Blokir Akses RLS: Anon key mencoba query tabel <code className="font-mono text-label-sm bg-[#EFF7F5] px-1 text-primary">users</code> (403 Forbidden)'
  },
  {
    time: '1 jam lalu • Auth Webhook',
    iconCls: 'bg-[#EFF7F5] text-primary',
    iconName: 'person_add',
    msg: 'Sinkronisasi Auth: Akun baru wali santri Ahmad Dzaki berhasil dibuat.'
  }
]

export const SUPABASE_API = {
  projectUrl: 'https://vabkqwzxt...supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsIn...',
  serviceRoleKey: '••••••••••••••••••••••••',
  webhookStatus: 'Aktif'
}

export const SQL_POLICY = [
  {
    cmd: 'CREATE POLICY',
    name: 'Guru Tahfidz hanya input halaqah sendiri',
    sql: "ON public.mutabaah_tahfidz FOR ALL USING (auth.uid() = guru_id Or auth.role() = 'admin');"
  },
  {
    cmd: 'CREATE POLICY',
    name: 'Wali murid hanya melihat setoran anaknya',
    sql: "ON public.mutabaah_tahfidz FOR SELECT USING (santri_id IN (SELECT id FROM public.santri WHERE wali_id = auth.uid()));"
  }
]

export const POLICY_TOGGLES = [
  { checked: true, scope: 'Aktif (SELECT only)' },
  { checked: true, scope: 'Aktif (INSERT / UPDATE)' },
  { checked: true, scope: 'Aktif (ALL actions)' },
  { checked: true, scope: 'Ditolak (Anon Blocked)' }
]

export const ROLES_OPTIONS = [
  'Semua Role Pengguna',
  'Admin Yayasan',
  'Guru Kelas 4 Ali',
  'Asatidz Tahfidz',
  'Bendahara Sekolah',
  'Wali Santri'
]

export const STATUS_OPTIONS = ['Semua Status', 'Aktif', 'Perlu Aktivasi']

export const SECURITY_SCAN = {
  title: 'Hasil Scan Keamanan Otomatis',
  status: 'Lolos (Semua Kebijakan Berfungsi)',
  rows: [
    { label: 'Test Akses Klien Anonim', value: 'OK • data santri terkunci', cls: 'text-[#1A5C55]' },
    { label: 'Test Percobaan CRUD', value: 'OK • 0 baris bocor', cls: 'text-[#1A5C55]' },
    { label: 'Test Impersonasi Role', value: 'OK • 1 baris langsung sesuai role', cls: 'text-[#1A5C55]' },
    { label: 'Test Perpanjangan Sesi', value: 'OK • refresh token valid 7 hari', cls: 'text-[#1A5C55]' }
  ],
  count: '4/4'
}

]
