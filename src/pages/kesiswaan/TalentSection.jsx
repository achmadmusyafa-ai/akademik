import { useMemo, useState } from 'react'
import { Icon } from '../../components/ui'
import { TALENT_AWAL, BIDANG_TALENT, LEVEL_STYLE } from '../../dataEskul'

export function useTalent() {
  const [list, setList] = useState(TALENT_AWAL)
  const tambah = (v) => setList((s) => [{ id: Date.now(), ...v }, ...s])
  const hapus = (id) => setList((s) => s.filter((t) => t.id !== id))
  return { list, tambah, hapus }
}

export default function TalentSection({ list, onTambah, onHapus }) {
  const [q, setQ] = useState('')
  const [bidang, setBidang] = useState('Semua')
  const rows = useMemo(() => list.filter((t) =>
    (bidang === 'Semua' || t.bidang === bidang) &&
    (`${t.nama} ${t.kelas} ${t.eskul}`.toLowerCase().includes(q.toLowerCase()))
  ), [list, q, bidang])

  return (
    <div className="bg-white border border-[#E0ECE9] rounded-xl shadow-sm p-5 flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-[18px] font-semibold text-primary flex items-center gap-2">
            <Icon name="psychology" className="text-[#287A74]" />
            Pemetaan Supertalent Santri
          </h3>
          <p className="text-[13px] text-[#5C7A76]">{rows.length} santri terpetakan • tindak lanjut pembinaan khusus (TC) &amp; rekomendasi pelatih</p>
        </div>
        <button onClick={onTambah} className="px-4 py-2 bg-[#287A74] hover:bg-[#216661] text-white text-[12px] font-bold rounded-lg flex items-center gap-2 shadow-sm">
          <Icon name="person_add" className="text-[16px]" />
          <span>+ Petakan Supertalent</span>
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[200px]">
          <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari santri / kelas / eskul..." className="w-full pl-9 pr-3 py-1.5 text-[13px] bg-[#F7FAF9] border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" type="text" />
        </div>
        <select value={bidang} onChange={(e) => setBidang(e.target.value)} className="py-1.5 px-2.5 bg-[#F7FAF9] border border-outline-variant rounded-lg text-[12px] font-semibold">
          <option>Semua</option>
          {BIDANG_TALENT.map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>
      <div className="overflow-x-auto border border-[#E0ECE9] rounded-lg">
        <table className="w-full text-left border-collapse min-w-[760px]">
          <thead>
            <tr className="bg-[#EFF7F5] border-b border-[#CFE2DE] text-[12px] font-semibold text-[#5C7A76]">
              <th className="py-2.5 px-3">Santri &amp; Kelas</th>
              <th className="py-2.5 px-3">Bidang Talent</th>
              <th className="py-2.5 px-3">Level</th>
              <th className="py-2.5 px-3">Eskul &amp; Capaian</th>
              <th className="py-2.5 px-3">Rekomendasi Pembinaan</th>
              <th className="py-2.5 px-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E0ECE9] text-[13px]">
            {rows.map((t) => (
              <tr key={t.id} className="hover:bg-[#F7FAF9]">
                <td className="py-3 px-3">
                  <div className="font-bold text-on-surface">{t.nama}</div>
                  <div className="text-[11px] text-outline">{t.kelas}</div>
                </td>
                <td className="py-3 px-3 font-semibold text-primary">{t.bidang}</td>
                <td className="py-3 px-3">
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ${LEVEL_STYLE[t.level] || LEVEL_STYLE.Emerging}`}>{t.level}</span>
                </td>
                <td className="py-3 px-3">
                  <div className="font-semibold text-on-surface">{t.eskul}</div>
                  <div className="text-[11px] text-outline">{t.skor}</div>
                </td>
                <td className="py-3 px-3 text-[#5C7A76] max-w-[240px]">{t.rekomendasi}</td>
                <td className="py-3 px-3 text-center">
                  <button onClick={() => onHapus?.(t)} title="Hapus pemetaan" className="p-1 text-outline hover:text-error rounded">
                    <Icon name="delete" className="text-[18px]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {rows.length === 0 && (
        <div className="p-6 text-center text-[13px] text-outline border border-dashed border-[#CFE2DE] rounded-xl">
          Belum ada talent yang cocok. Tambahkan pemetaan supertalent baru.
        </div>
      )}
    </div>
  )
}
