import { Icon } from '../../components/ui'
import { KESISWAAN_TABS } from '../../dataKesiswaan'

export function KesiswaanTabs({ active, onChange }) {
  return (
    <div className="flex items-center gap-2 border-b border-outline-variant overflow-x-auto pb-px">
      {KESISWAAN_TABS.map((t, i) => (
        <button
          key={t.label}
          onClick={() => onChange?.(i)}
          className={(active ?? 0) === i
            ? 'px-4 py-2.5 border-b-2 border-primary text-primary font-bold text-[14px] flex items-center gap-2 whitespace-nowrap bg-white rounded-t-lg'
            : 'px-4 py-2.5 text-on-surface-variant hover:text-primary text-[14px] flex items-center gap-2 whitespace-nowrap hover:bg-white/60 rounded-t-lg'}
        >
          <Icon name={t.icon} className="text-[18px]" />
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  )
}

export function KesiswaanStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white border border-[#E0ECE9] rounded-xl p-5 shadow-sm flex flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <span className="text-[12px] font-semibold text-[#5C7A76]">Total Santri Ber-Eskul</span>
          <span className="px-2 py-0.5 rounded-full bg-[#EFF7F5] text-primary text-[11px] font-semibold border border-[#CFE2DE] whitespace-nowrap">Semester Genap</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-[28px] font-bold text-primary">342</span>
          <span className="text-[14px] text-outline">/ 380 Santri</span>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#1A5C55]">
          <Icon name="trending_up" className="text-[16px]" />
          <span className="font-bold">90% Partisipasi Aktif</span>
          <span className="text-outline font-normal">• 12 Cabang Eskul</span>
        </div>
      </div>
      <div className="bg-white border border-[#E0ECE9] rounded-xl p-5 shadow-sm flex flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <span className="text-[12px] font-semibold text-[#5C7A76]">Turnamen Catur Berjalan</span>
          <span className="px-2 py-0.5 rounded-full bg-[#FFF8B0] text-[#695E05] text-[11px] font-bold border border-[#f1eba4] whitespace-nowrap">Live Match</span>
        </div>
        <div className="mt-3 flex flex-col">
          <span className="text-[22px] font-semibold text-primary">Ramadhan Cup 1445 H</span>
          <span className="text-[13px] text-outline">Babak 4 dari 5 Sesi Swiss System</span>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-primary">
          <Icon name="person_check" className="text-[16px]" />
          <span>32 Peserta Terdaftar (U-12 &amp; U-9)</span>
        </div>
      </div>
      <div className="bg-white border border-[#E0ECE9] rounded-xl p-5 shadow-sm flex flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <span className="text-[12px] font-semibold text-[#5C7A76]">Perolehan Medali &amp; Juara</span>
          <span className="px-2 py-0.5 rounded-full bg-[#AEEED3] text-[#1A5C55] text-[11px] font-bold whitespace-nowrap">Th. 2023/2024</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-[28px] font-bold text-primary">18</span>
          <span className="text-[14px] text-outline">Penghargaan Resmi</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold">
          <span className="text-amber-600 flex items-center gap-0.5"><span className="w-2 h-2 rounded-full bg-amber-500 inline-block" /> 7 Emas</span>
          <span className="text-slate-500 flex items-center gap-0.5"><span className="w-2 h-2 rounded-full bg-slate-400 inline-block" /> 6 Perak</span>
          <span className="text-amber-800 flex items-center gap-0.5"><span className="w-2 h-2 rounded-full bg-amber-800 inline-block" /> 5 Perunggu</span>
        </div>
      </div>
      <div className="bg-white border border-[#E0ECE9] rounded-xl p-5 shadow-sm flex flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <span className="text-[12px] font-semibold text-[#5C7A76]">Jadwal Eskul Hari Ini</span>
          <span className="px-2 py-0.5 rounded-full bg-[#E0F2F0] text-[#287A74] text-[11px] font-bold whitespace-nowrap">Senin Sore</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-[28px] font-bold text-primary">3 Klub</span>
          <span className="text-[14px] text-outline">Beroperasi Aktif</span>
        </div>
        <div className="mt-2 text-[11px] text-[#5C7A76] truncate">Catur Cepat, Robotika SDIT, Panahan Sunnah</div>
      </div>
    </div>
  )
}
