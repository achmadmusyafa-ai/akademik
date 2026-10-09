import { Icon } from '../../components/ui'
import { KEKHASAN_STATS } from '../../dataKekhasan'

export function KekhasanHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2 border-b border-outline-variant/60">
      <div className="space-y-1">
        <nav className="flex items-center gap-2 text-[11px] font-bold text-outline">
          <span className="hover:text-primary cursor-pointer">Beranda</span>
          <Icon name="chevron_right" className="text-[14px]" />
          <span className="hover:text-primary cursor-pointer">Modul Kekhasan SDIT</span>
          <Icon name="chevron_right" className="text-[14px]" />
          <span className="text-primary font-bold">Tahfidz &amp; Yaumiyah</span>
        </nav>
        <h1 className="text-[28px] leading-9 font-bold text-primary tracking-tight">
          Mutaba&apos;ah Tahfidz Al-Qur&apos;an &amp; Buku Penghubung Yaumiyah
        </h1>
        <p className="text-[14px] text-on-surface-variant max-w-3xl">
          Monitoring capaian ziyadah, muraja&apos;ah, standar makharijul huruf &amp; pembiasaan adab ibadah harian santri Rombel 4 Ali bin Abi Thalib
        </p>
      </div>
      <div className="flex items-center gap-2.5 flex-wrap">
        <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#EFF7F5] text-primary border border-[#CFE2DE] hover:bg-[#E0ECE9] text-[12px] font-semibold shadow-sm">
          <Icon name="filter_list" className="text-[18px]" />
          <span>Filter Rombel &amp; Juz</span>
        </button>
        <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#EFF7F5] text-primary border border-[#CFE2DE] hover:bg-[#E0ECE9] text-[12px] font-semibold shadow-sm">
          <Icon name="picture_as_pdf" className="text-[18px]" />
          <span>Cetak Lembar Mutaba&apos;ah (PDF)</span>
        </button>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#287A74] hover:bg-[#216661] text-white text-[12px] font-semibold shadow-sm">
          <Icon name="add_circle" className="text-[18px]" />
          <span>+ Input Setoran Ziyadah / Muraja&apos;ah Baru</span>
        </button>
      </div>
    </div>
  )
}

export function KekhasanStats() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {KEKHASAN_STATS.map((s) => (
        <div key={s.title} className="p-4 rounded-xl bg-surface-container-lowest border border-[#E0ECE9] shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[12px] font-semibold text-outline">{s.title}</p>
              <h3 className={`text-[28px] leading-9 font-bold mt-1 ${s.valueCls}`}>
                {s.value} {s.extra && <span className="text-[16px] text-outline font-normal">{s.extra}</span>}
              </h3>
            </div>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${s.box}`}>
              <Icon name={s.icon} className="text-[22px]" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ${s.badgeCls}`}>{s.badge}</span>
            <span className="text-[13px] text-outline truncate">{s.foot}</span>
          </div>
        </div>
      ))}
    </section>
  )
}
