import { Icon } from './ui'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-container via-[#1f6661] to-[#164d49] text-on-primary p-7 shadow-sm">
      <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none text-white">
        <Icon name="token" className="text-[260px]" />
      </div>
      <div className="absolute right-48 -top-12 opacity-5 pointer-events-none text-white hidden md:block">
        <Icon name="mosque" className="text-[180px]" />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-secondary-container text-[12px] font-semibold border border-white/20">
            <Icon name="verified_user" className="text-[16px]" />
            <span>Semester Genap TA 2023/2024 • Pekan Efektif ke-10 (Bulan Ramadhan)</span>
          </div>
          <h1 className="text-[28px] leading-9 font-bold text-white tracking-tight">
            Ahlan wa Sahlan, Ustadz Ahmad Fauzi!
          </h1>
          <p className="text-[14px] leading-5 text-on-primary/90">
            Semoga dedikasi antum mencetak generasi Qur&apos;ani yang berakhlak mulia senantiasa diberkahi.
            Semua sistem KBM &amp; Mutaba&apos;ah aktif dan tersinkronisasi realtime.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-col gap-2.5 shrink-0">
          <button className="px-4 py-2.5 rounded-xl bg-tertiary-fixed text-[#163330] hover:bg-tertiary-fixed-dim text-[12px] font-semibold flex items-center gap-2 shadow-sm transition-all active:scale-95 font-bold">
            <Icon name="edit_note" className="text-[18px]" />
            <span>Isi Jurnal Mengajar</span>
          </button>
          <button className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 text-[12px] font-semibold flex items-center gap-2 transition-all">
            <Icon name="bookmark_added" className="text-[18px]" />
            <span>Input Setoran Tahfidz</span>
          </button>
        </div>
      </div>
      <div className="relative z-10 mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center gap-3">
        <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">Aksi Cepat Rombel:</span>
        {[
          { icon: 'fact_check', label: 'Presensi Rombel 4-Ali' },
          { icon: 'desktop_windows', label: 'Booking Lab Komputer' },
          { icon: 'menu_book', label: 'Pinjam Buku Khizanah' }
        ].map((a) => (
          <button key={a.label} className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[13px] transition-all flex items-center gap-1.5">
            <Icon name={a.icon} className="text-[16px]" />
            <span>{a.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
