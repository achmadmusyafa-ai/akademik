import { useState } from 'react'
import { Icon } from '../../components/ui'
import { SETORAN_ROWS } from '../../dataKekhasan'

const FILTERS = ['Semua (24)', 'Ziyadah', "Muraja'ah"]

export default function SetoranTable() {
  const [filter, setFilter] = useState(FILTERS[0])
  const [page, setPage] = useState(1)

  const rows = SETORAN_ROWS.filter((r) => {
    if (filter === 'Ziyadah') return r.kategori.toLowerCase().includes('ziyadah')
    if (filter === "Muraja'ah") return r.kategori.toLowerCase().includes('muraja')
    return true
  })

  return (
    <div className="rounded-xl bg-surface-container-lowest border border-[#E0ECE9] shadow-sm overflow-hidden">
      <div className="p-4 border-b border-[#E0ECE9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-[16px] font-semibold text-primary">Log Jurnal Setoran Hari Ini (25 Maret 2024)</h2>
          <p className="text-[13px] text-outline">Catatan verifikasi simaan oleh tim Asatidz Halaqah 4 Ali bin Abi Thalib</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-bold text-outline">Tampilkan:</span>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={filter === f
                ? 'px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#287A74] text-white'
                : 'px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#EFF7F5] text-primary hover:bg-[#E0ECE9]'}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[860px]">
          <thead>
            <tr className="bg-[#EFF7F5] text-[#5C7A76] text-[12px] font-semibold border-b border-[#E0ECE9]">
              <th className="py-3 px-4">Santri &amp; NISN</th>
              <th className="py-3 px-4">Surah &amp; Rentang</th>
              <th className="py-3 px-4">Kategori</th>
              <th className="py-3 px-4 text-center">Predikat Tajwid</th>
              <th className="py-3 px-4">Status &amp; Kelancaran</th>
              <th className="py-3 px-4">Catatan Ustadz</th>
              <th className="py-3 px-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E0ECE9] text-[13px]">
            {rows.map((r) => (
              <tr key={r.nisn} className="hover:bg-[#F7FAF9] transition-colors">
                <td className="py-3.5 px-4">
                  <div className="font-bold text-on-surface">{r.nama}</div>
                  <div className="text-[11px] font-mono text-outline">NISN: {r.nisn}</div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="font-semibold text-primary">{r.surah}</div>
                  <div className="text-[11px] text-outline">{r.juz}</div>
                </td>
                <td className="py-3.5 px-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ${r.katCls}`}>{r.kategori}</span>
                </td>
                <td className="py-3.5 px-4 text-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ${r.predikatWarn ? 'bg-[#FFF8B0] text-[#695E05]' : 'bg-[#AEEED3] text-[#1A5C55]'}`}>{r.predikat}</span>
                </td>
                <td className="py-3.5 px-4">
                  <div className={`inline-flex items-center gap-1.5 font-semibold ${r.statusCls}`}>
                    <span className={`w-2 h-2 rounded-full ${r.dot}`} />
                    <span>{r.status}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 max-w-[220px]">
                  <p className="truncate" title={r.catatan}>{r.catatan}</p>
                </td>
                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <button className="p-1 text-primary hover:text-[#216661]" title="Edit Setoran"><Icon name="edit" className="text-[18px]" /></button>
                  <button className={`p-1 ${r.aksi2 === 'replay' ? 'text-[#ba1a1a]' : 'text-[#20604b]'} hover:text-primary`} title="Aksi"><Icon name={r.aksi2} className="text-[18px]" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-3.5 border-t border-[#E0ECE9] flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-outline">
        <div>Menampilkan {rows.length} dari 24 entri setoran halaqah</div>
        <div className="flex items-center gap-1">
          <button disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-2.5 py-1 rounded border border-[#E0ECE9] hover:bg-[#EFF7F5] disabled:opacity-50">Sebelumnya</button>
          {[1, 2, 3].map((n) => (
            <button key={n} onClick={() => setPage(n)} className={page === n ? 'px-2.5 py-1 rounded bg-[#287A74] text-white font-bold' : 'px-2.5 py-1 rounded border border-[#E0ECE9] hover:bg-[#EFF7F5]'}>{n}</button>
          ))}
          <button onClick={() => setPage((p) => Math.min(3, p + 1))} className="px-2.5 py-1 rounded border border-[#E0ECE9] hover:bg-[#EFF7F5]">Berikutnya</button>
        </div>
      </div>
    </div>
  )
}
