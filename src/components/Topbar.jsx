import { useState } from 'react'
import { Icon } from './ui'

export default function Topbar({ onMenu, placeholder, compactSearch }) {
  const [q, setQ] = useState('')
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between w-full min-h-16 px-4 sm:px-6 py-2 gap-3 bg-surface-container-lowest border-b border-outline-variant shadow-sm">
      <div className="flex items-center gap-3 flex-1 max-w-xl">
        <button onClick={onMenu} className="lg:hidden p-2 rounded-lg hover:bg-surface-container-low text-on-surface-variant" aria-label="Buka menu">
          <Icon name="menu" className="text-[22px]" />
        </button>
        <div className="relative w-full">
          <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#EFF7F5] border border-outline-variant text-[13px] text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder={placeholder ?? 'Cari data siswa (NISN), materi RPP, atau jadwal KBM...'}
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFF7F5] border border-outline-variant/60 text-primary text-[12px] font-semibold">
          <Icon name="calendar_today" className="text-[18px]" />
          <span>14 Ramadhan 1445 H • 25 Maret 2024</span>
        </div>
        <div className="flex items-center gap-1.5 border-l border-outline-variant pl-3 sm:pl-4">
          <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" title="Notifikasi Realtime">
            <Icon name="notifications" className="text-[22px]" />
            <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-error text-on-error text-[10px] flex items-center justify-center font-bold">3</span>
          </button>
          <button className="hidden sm:block p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" title="Kalender Akademik">
            <Icon name="calendar_today" className="text-[22px]" />
          </button>
        </div>
        <div className="flex items-center gap-3 pl-2 border-l border-outline-variant">
          <div className="hidden md:flex flex-col text-right">
            <div className="flex items-center justify-end gap-1.5">
              <span className="text-[12px] font-semibold text-on-surface">Ustadz Ahmad Fauzi, S.Pd.I</span>
              <Icon name="verified" filled className="text-[16px] text-primary" />
            </div>
            <span className="text-[11px] font-bold text-outline">Admin Kurikulum / Guru Kelas 4 Ali bin Abi Thalib</span>
          </div>
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full object-cover border-2 border-primary ring-2 ring-[#EFF7F5]"
              alt="Ustadz Ahmad Fauzi"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsUB0bCTlAdZLlYEVzQ6HQauO_AYDSLAfhU-4NF-zuBxDvIF06gUNwGdEKsCvME-zmXSUwrPHKioCVfXAT3FYzwY_wMIAbGSswg7AV1wQfbzzJUjd1AhqUGLiX9X15CX7gFuj7eZBTBhBIWlRNZ-tOEt8zOI94Q8c0GAX31kHu89Vz35PJlJghRRBgxH4IbNaFu-IPZmKRy6XZ9MrgnnUVvBTz3Tc-64dAc0_qTP9wr6tHYD8wJo5pag"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-tertiary-fixed rounded-full ring-2 ring-white" />
          </div>
        </div>
      </div>
    </header>
  )
}
