import { useState } from 'react'
import { Icon } from './ui'
import { TAHFIDZ_ROWS } from '../data'
const TABS = ['Juz 30 (Kelas 4)', 'Juz 29', 'Yaumiyah']
export default function Tahfidz() {
  const [tab, setTab] = useState(TABS[0])
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/60 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-outline-variant/40">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#EFF7F5] text-primary">
            <Icon name="auto_stories" filled className="text-[22px]" />
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-on-surface">Kekhasan SDIT: Mutaba'ah Tahfidz</h2>
            <p className="text-[13px] text-outline">Hafalan harian &amp; monitoring ibadah yaumiyah</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-[#EFF7F5] p-1 rounded-xl">
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} className={tab === t ? 'px-3 py-1 rounded-lg bg-primary text-on-primary text-[11px] font-bold whitespace-nowrap' : 'px-3 py-1 rounded-lg text-on-surface-variant text-[11px] font-semibold whitespace-nowrap'}>{t}</button>
          ))}
        </div>
      </div>
      <div className="p-4 rounded-xl bg-[#F7FAF9] border border-outline-variant/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 text-primary flex items-center justify-center font-bold shrink-0">30</div>
          <div>
            <h4 className="font-semibold text-on-surface">Target Rombel 4-Ali: Al-Insyiqaq</h4>
            <p className="text-[13px] text-outline">22 dari 37 surah Juz 30 tercapai.</p>
          </div>
        </div>
        <div className="w-full sm:w-48 shrink-0">
          <div className="flex justify-between text-[11px] font-bold"><span className="text-outline">Progress</span><span className="text-primary">89%</span></div>
          <div className="w-full h-2 rounded-full bg-[#E0ECE9] overflow-hidden"><div className="h-full bg-primary-container rounded-full" style={{ width: '89%' }} /></div>
        </div>
      </div>

      <div className="overflow-x-auto -mx-1 px-1">
        <table className="w-full text-left border-collapse min-w-[680px]">
          <thead>
            <tr className="bg-[#EFF7F5] text-on-surface-variant text-[12px] font-semibold border-y border-outline-variant/60">
              <th className="py-3 px-4">Nama Siswa / NISN</th>
              <th className="py-3 px-3">Surah &amp; Ayat</th>
              <th className="py-3 px-3">Tajwid</th>
              <th className="py-3 px-3">Adab</th>
              <th className="py-3 px-3 text-right">Status</th>
              <th className="py-3 px-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30 text-[13px]">
            {TAHFIDZ_ROWS.map((r) => (
              <tr key={r.nisn} className="hover:bg-[#F7FAF9]">
                <td className="py-3.5 px-4">
                  <div className="font-semibold text-on-surface">{r.nama}</div>
                  <div className="text-outline text-[11px] font-bold font-mono">NISN: {r.nisn}</div>
                </td>
                <td className="py-3.5 px-3">
                  <div className="font-medium text-primary">{r.surah}</div>
                  <div className="text-outline text-[11px] font-bold">{r.ket}</div>
                </td>
                <td className="py-3.5 px-3"><span className={'px-2.5 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ' + (r.tajwidCls || 'bg-tertiary-fixed text-[#1A5C55]')}>{r.tajwid}</span></td>
                <td className="py-3.5 px-3"><span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-[#1A5C55] text-[11px] font-bold whitespace-nowrap">{r.adab}</span></td>
                <td className="py-3.5 px-3 text-right"><span className={'px-2.5 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ' + r.statusCls}>{r.status}</span></td>
                <td className="py-3.5 px-3 text-center"><button className="p-1 text-outline hover:text-primary"><Icon name={r.aksi} className="text-[18px]" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 rounded-xl bg-gradient-to-r from-[#EFF7F5] to-[#E0F2F0] border border-outline-variant/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0"><Icon name="family_restroom" className="text-[20px]" /></div>
          <div>
            <h4 className="font-semibold text-on-surface">Kepatuhan Buku Yaumiyah Ramadhan</h4>
            <p className="text-[13px] text-on-surface-variant">Shalat berjamaah, tadarus, shaum, infaq harian.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right"><span className="text-[18px] font-semibold text-primary">94%</span><span className="text-[11px] font-bold text-outline block">26/28 Terisi</span></div>
          <button className="px-3.5 py-2 rounded-lg bg-primary text-on-primary text-[12px] font-semibold">Kirim Pengingat</button>
        </div>
      </div>
    </div>
  )
}
