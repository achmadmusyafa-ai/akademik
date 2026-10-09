import { useMemo, useState } from 'react'
import { Icon } from '../../components/ui'
import { ESKUL_AWAL, KATEGORI_ESKUL } from '../../dataEskul'

export function useEskul() {
  const [list, setList] = useState(ESKUL_AWAL)
  const tambah = (v) => setList((s) => [{ id: Date.now(), anggota: 0, status: 'Pendaftaran', ...v }, ...s])
  const hapus = (id) => setList((s) => s.filter((e) => e.id !== id))
  return { list, tambah, hapus }
}

export default function EskulSection({ list, onTambah, onHapus, onLihat }) {
  const [q, setQ] = useState('')
  const [kat, setKat] = useState('Semua')
  const rows = useMemo(() => list.filter((e) =>
    (kat === 'Semua' || e.kategori === kat) &&
    (`${e.nama} ${e.pembina} ${e.kategori}`.toLowerCase().includes(q.toLowerCase()))
  ), [list, q, kat])

  return (
    <div className="bg-white border border-[#E0ECE9] rounded-xl shadow-sm p-5 flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-[18px] font-semibold text-primary flex items-center gap-2">
            <Icon name="groups" className="text-[#287A74]" />
            Daftar Ekstrakurikuler &amp; Anggota
          </h3>
          <p className="text-[13px] text-[#5C7A76]">{rows.length} eskul • kelola pembina, jadwal, kuota &amp; pendaftaran santri</p>
        </div>
        <button onClick={onTambah} className="px-4 py-2 bg-primary-container hover:bg-[#216661] text-white text-[12px] font-semibold rounded-lg flex items-center gap-2 shadow-sm">
          <Icon name="add_circle" className="text-[16px]" />
          <span>+ Tambah Ekstrakurikuler</span>
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[200px]">
          <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari eskul / pembina..." className="w-full pl-9 pr-3 py-1.5 text-[13px] bg-[#F7FAF9] border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" type="text" />
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {KATEGORI_ESKUL.map((k) => (
            <button key={k} onClick={() => setKat(k)} className={kat === k ? 'px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#287A74] text-white' : 'px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#EFF7F5] text-primary hover:bg-[#E0ECE9]'}>{k}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {rows.map((e) => {
          const pct = e.kuota ? Math.round((e.anggota / e.kuota) * 100) : 0
          const penuh = e.kuota && e.anggota >= e.kuota
          return (
            <div key={e.id} className="p-4 rounded-xl border border-[#CFE2DE] bg-gradient-to-br from-white to-[#EFF7F5] flex flex-col gap-2.5 hover:border-primary">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-10 h-10 rounded-xl bg-primary-container text-white flex items-center justify-center shrink-0">
                    <Icon name={e.icon || 'extension'} className="text-[20px]" />
                  </span>
                  <div>
                    <h4 className="font-bold text-[14px] text-on-surface leading-tight">{e.nama}</h4>
                    <p className="text-[11px] text-outline">{e.kategori} • {e.pembina}</p>
                  </div>
                </div>
                <button onClick={() => onHapus?.(e)} title="Hapus eskul" className="p-1 text-outline hover:text-error rounded">
                  <Icon name="delete" className="text-[18px]" />
                </button>
              </div>
              <div className="text-[12px] text-[#5C7A76] flex flex-col gap-0.5">
                <span className="flex items-center gap-1"><Icon name="schedule" className="text-[14px]" />{e.jadwal}</span>
                <span className="flex items-center gap-1"><Icon name="location_on" className="text-[14px]" />{e.lokasi}</span>
              </div>
              <div>
                <div className="flex justify-between text-[11px] font-bold mb-1">
                  <span className="text-on-surface">{e.anggota}/{e.kuota} santri</span>
                  <span className={penuh ? 'text-error' : 'text-primary'}>{penuh ? 'Penuh' : `${pct}% terisi`}</span>
                </div>
                <div className="w-full bg-[#E0ECE9] h-2 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${penuh ? 'bg-error' : 'bg-[#287A74]'}`} style={{ width: `${Math.min(100, pct)}%` }} />
                </div>
              </div>
              <div className="pt-2 border-t border-[#CFE2DE] flex items-center justify-between">
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${e.status === 'Aktif' ? 'bg-[#AEEED3] text-[#1A5C55]' : 'bg-[#FFF8B0] text-[#695E05]'}`}>{e.status}</span>
                <button onClick={() => onLihat?.(e)} className="text-[12px] text-primary font-bold hover:underline">Kelola Anggota →</button>
              </div>
            </div>
          )
        })}
      </div>
      {rows.length === 0 && (
        <div className="p-6 text-center text-[13px] text-outline border border-dashed border-[#CFE2DE] rounded-xl">
          Tidak ada eskul yang cocok. Ubah kata kunci / kategori, atau tambah ekstrakurikuler baru.
        </div>
      )}
    </div>
  )
}
