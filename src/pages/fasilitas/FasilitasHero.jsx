import { Icon } from '../../components/ui'
import { FASILITAS_STATS } from '../../dataFasilitas'

export function FasilitasHero({ onAction }) {
  return (
    <div className="bg-gradient-to-r from-surface-container-lowest via-white to-[#EFF7F5] p-6 rounded-xl border border-[#E0ECE9] shadow-sm flex flex-col xl:flex-row xl:items-center justify-between gap-6 relative overflow-hidden">
      <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-secondary-container/20 pointer-events-none blur-2xl" />
      <div className="space-y-1.5 z-10">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-[#0b513d] text-[11px] font-bold mb-1">
          <Icon name="verified" className="text-[14px]" />
          <span>Terintegrasi SIS Mandiri 2024</span>
        </div>
        <h2 className="text-[22px] leading-[30px] font-semibold text-primary tracking-tight">
          Manajemen Fasilitas: Perpustakaan Khizanah Al-Hikmah &amp; Laboratorium Komputer
        </h2>
        <p className="text-[13px] text-on-surface-variant max-w-3xl leading-relaxed">
          Monitoring ketersediaan ruang CBT, booking perangkat lab, katalog literasi Islami, dan sirkulasi peminjaman buku santri &amp; asatidz terintegrasi.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2.5 z-10 shrink-0">
        <button onClick={() => onAction?.('pinjam')} className="flex items-center gap-2 px-3.5 py-2.5 bg-primary hover:bg-[#216661] text-white text-[12px] font-semibold rounded-lg shadow-sm">
          <Icon name="add_circle" className="text-[18px]" />
          <span>+ Pinjam Buku / Sirkulasi Baru</span>
        </button>
        <button onClick={() => onAction?.('booking')} className="flex items-center gap-2 px-3.5 py-2.5 bg-[#EFF7F5] hover:bg-[#E0ECE9] text-primary border border-[#CFE2DE] text-[12px] font-semibold rounded-lg">
          <Icon name="devices" className="text-[18px]" />
          <span>+ Booking Jadwal Lab Komputer</span>
        </button>
        <button onClick={() => onAction?.('print')} title="Cetak Barcode & Laporan" className="p-2.5 text-on-surface-variant hover:text-primary bg-white border border-[#E0ECE9] hover:bg-[#EFF7F5] rounded-lg">
          <Icon name="print" className="text-[20px]" />
        </button>
      </div>
    </div>
  )
}

export function FasilitasStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {FASILITAS_STATS.map((s) => (
        <div key={s.title} className="bg-surface-container-lowest p-5 rounded-xl border border-[#E0ECE9] shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[12px] font-semibold text-outline">{s.title}</span>
              <div className="text-[22px] leading-[30px] font-semibold text-primary mt-1">
                {s.value} <span className="text-[13px] font-normal text-on-surface-variant">{s.unit}</span>
              </div>
            </div>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${s.box}`}>
              <Icon name={s.icon} className="text-[22px]" />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E0ECE9] flex items-center justify-between gap-2 text-[13px]">
            <span className="text-outline text-[12px]">{s.foot}</span>
            <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ${s.badgeCls}`}>{s.badge}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
