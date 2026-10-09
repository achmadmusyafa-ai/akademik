import { useState } from 'react'
import { Icon } from '../../components/ui'
import { KATEGORI_ESKUL } from '../../dataEskul'

const inputCls = 'w-full px-3 py-2 bg-white border border-[#E0ECE9] rounded-lg text-[13px] focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none'

export default function EskulModal({ open, onClose, onSave }) {
  const [form, setForm] = useState({ nama: '', kategori: 'Olahraga Sunnah', pembina: '', jadwal: '', lokasi: '', kuota: 24, icon: 'extension' })
  if (!open) return null
  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }))

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button aria-label="Tutup" onClick={onClose} className="absolute inset-0 bg-black/40" />
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-semibold text-primary flex items-center gap-2">
            <Icon name="add_circle" className="text-[#287A74]" />
            Tambah Ekstrakurikuler Baru
          </h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-[#EFF7F5] text-outline"><Icon name="close" className="text-[20px]" /></button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="sm:col-span-2">
            <label className="block text-[12px] font-semibold mb-1">Nama Ekstrakurikuler</label>
            <input value={form.nama} onChange={(e) => set('nama', e.target.value)} placeholder="cth: Futsal Sunnah U-10" className={inputCls} type="text" />
          </div>
          <div>
            <label className="block text-[12px] font-semibold mb-1">Kategori</label>
            <select value={form.kategori} onChange={(e) => set('kategori', e.target.value)} className={inputCls}>
              {KATEGORI_ESKUL.filter((k) => k !== 'Semua').map((k) => <option key={k}>{k}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-[12px] font-semibold mb-1">Kuota Santri</label>
            <input value={form.kuota} onChange={(e) => set('kuota', Number(e.target.value) || 0)} min="1" className={inputCls} type="number" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[12px] font-semibold mb-1">Pembina / Pelatih</label>
            <input value={form.pembina} onChange={(e) => set('pembina', e.target.value)} placeholder="cth: Ustadz Bilal (Pelatih Futsal)" className={inputCls} type="text" />
          </div>
          <div>
            <label className="block text-[12px] font-semibold mb-1">Jadwal Latihan</label>
            <input value={form.jadwal} onChange={(e) => set('jadwal', e.target.value)} placeholder="cth: Kamis • 15.45 - 17.00 WITA" className={inputCls} type="text" />
          </div>
          <div>
            <label className="block text-[12px] font-semibold mb-1">Lokasi</label>
            <input value={form.lokasi} onChange={(e) => set('lokasi', e.target.value)} placeholder="cth: Lapangan Futsal Mini" className={inputCls} type="text" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 pt-1">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-[#E0ECE9] text-[12px] font-semibold hover:bg-[#F7FAF9]">Batal</button>
          <button
            onClick={() => {
              if (!form.nama.trim() || !form.pembina.trim()) return
              onSave?.(form)
              setForm({ nama: '', kategori: 'Olahraga Sunnah', pembina: '', jadwal: '', lokasi: '', kuota: 24, icon: 'extension' })
            }}
            className="px-4 py-2 rounded-lg bg-primary hover:bg-[#216661] text-white text-[12px] font-bold flex items-center gap-1.5"
          >
            <Icon name="save" className="text-[16px]" />
            Simpan Ekstrakurikuler
          </button>
        </div>
        {(!form.nama.trim() || !form.pembina.trim()) && (
          <p className="text-[11px] text-outline">Nama eskul &amp; pembina wajib diisi.</p>
        )}
      </div>
    </div>
  )
}
