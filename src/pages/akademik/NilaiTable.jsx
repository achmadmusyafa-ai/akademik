import { useState } from 'react'
import { Icon } from '../../components/ui'
import { NILAI_ROWS } from '../../dataNilai'
import { LINGKUP_OPTIONS } from '../../dataAkademik'

export default function NilaiTable({ onDetail }) {
  const [lingkup, setLingkup] = useState(LINGKUP_OPTIONS[0])
  const [page, setPage] = useState(1)

  return (
    <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
      <div className="p-6 border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-[16px] font-semibold text-primary">Rekapitulasi Asesmen Formatif &amp; Sumatif (e-Rapor)</h2>
          <p className="text-[13px] text-outline">Perhitungan capaian pembelajaran otomatis berbasis Kurikulum Merdeka</p>
        </div>
        <div className="flex items-center gap-2">
          <select value={lingkup} onChange={(e) => setLingkup(e.target.value)} className="text-[11px] font-bold py-1.5 px-3 rounded-lg border border-outline-variant bg-surface text-on-surface">
            {LINGKUP_OPTIONS.map((l) => <option key={l}>{l}</option>)}
          </select>
          <button title="Filter Tambahan" className="p-1.5 rounded-lg border border-outline-variant hover:bg-surface-container text-outline">
            <Icon name="filter_list" className="text-[20px]" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[820px]">
          <thead>
            <tr className="bg-surface border-b border-outline-variant text-[11px] font-bold text-outline">
              <th className="py-3 px-4 w-12 text-center">No</th>
              <th className="py-3 px-4">Nama Santri &amp; NISN</th>
              <th className="py-3 px-3 text-right">TP 1 (Rukun)</th>
              <th className="py-3 px-3 text-right">TP 2 (Doa)</th>
              <th className="py-3 px-3 text-right">Sumatif LM</th>
              <th className="py-3 px-3 text-right">Nilai Akhir</th>
              <th className="py-3 px-4">Deskripsi Capaian e-Rapor</th>
              <th className="py-3 px-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant text-[13px]">
            {NILAI_ROWS.map((r) => (
              <tr key={r.no} className="hover:bg-surface/50">
                <td className="py-3 px-4 text-center text-outline">{r.no}</td>
                <td className="py-3 px-4">
                  <div className="font-bold text-on-surface">{r.nama}</div>
                  <div className="text-[11px] font-bold text-outline">NISN: {r.nisn}</div>
                </td>
                <td className={`py-3 px-3 text-right font-semibold ${r.hot ? 'text-primary' : 'text-on-surface'}`}>{r.tp1}</td>
                <td className={`py-3 px-3 text-right font-semibold ${r.hot ? 'text-primary' : 'text-on-surface'}`}>{r.tp2}</td>
                <td className={`py-3 px-3 text-right font-semibold ${r.hot ? 'text-primary' : 'text-on-surface'}`}>{r.sumatif}</td>
                <td className="py-3 px-3 text-right">
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${r.hot ? 'bg-secondary-container text-[#097169]' : 'bg-surface-container text-on-surface'}`}>{r.akhir}</span>
                </td>
                <td className="py-3 px-4 text-on-surface-variant max-w-[220px]">
                  <p className="truncate" title={r.deskripsi}>{r.deskripsi}</p>
                </td>
                <td className="py-3 px-3 text-center">
                  <button onClick={() => onDetail?.(r)} title="Input Detail" className="p-1 rounded hover:bg-surface-container text-outline hover:text-primary">
                    <Icon name="edit_note" className="text-[18px]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-surface/30 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between text-[13px] text-outline gap-3">
        <span>Menampilkan 5 dari 28 santri kelas 4 Ali bin Abi Thalib</span>
        <div className="flex items-center gap-2">
          <button disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-2.5 py-1 rounded border border-outline-variant hover:bg-surface disabled:opacity-40">Sebelumnya</button>
          {[1, 2, 3].map((n) => (
            <button key={n} onClick={() => setPage(n)} className={page === n ? 'px-2 py-0.5 rounded bg-primary text-white font-bold text-[11px]' : 'px-2 py-0.5 rounded hover:bg-surface text-on-surface text-[11px]'}>{n}</button>
          ))}
          <button onClick={() => setPage((p) => Math.min(3, p + 1))} className="px-2.5 py-1 rounded border border-outline-variant hover:bg-surface">Selanjutnya</button>
        </div>
      </div>
    </section>
  )
}
