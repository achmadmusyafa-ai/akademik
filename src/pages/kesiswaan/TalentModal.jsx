import { useState } from 'react'
import { Icon } from '../../components/ui'
import { BIDANG_TALENT } from '../../dataEskul'

const inputCls = 'w-full px-3 py-2 bg-white border border-[#E0ECE9] rounded-lg text-[13px] focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none'

export default function TalentModal({ open, onClose, onSave }) {
  const [form, setForm] = useState({ nama: '', kelas: '4 Ali bin Abi Thalib', bidang: BIDANG_TALENT[0], level: 'Berkembang', eskul: '', skor: '', rekomendasi: '' })
  if (!open) return null
  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }))

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button aria-label="Tutup" onClick={onClose} className="absolute inset-0 bg-black/40" />
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-semibold text-primary flex items-center gap-2">
            <Icon name="psychology" className="text-[#287A74]" />
            Petakan Supertalent Baru
          </h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-[#EFF7F5] text-outline"><Icon name="close" className="text-[20px]" /></button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="sm:col-span-2">
            <label className="block text-[12px] font-semibold mb-1">Nama Santri</label>
            <input value={form.nama} onChange={(e) => set('nama', e.target.value)} placeholder="cth: Naila Putri Ramadhani" className={inputCls} type="text" />
          </div>
          <div>
            <label className="block text-[12px] font-semibold mb-1">Kelas / Rombel</label>
            <input value={form.kelas} onChange={(e) => set('kelas', e.target.value)} className={inputCls} type="text" />
          </div>
          <div>
            <label className="block text-[12px] font-semibold mb-1">Bidang Talent</label>
            <select value={form.bidang} onChange={(e) => set('bidang', e.target.value)} className={inputCls}>
              {BIDANG_TALENT.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-[12px] font-semibold mb-1">Level</label>
            <select value={form.level} onChange={(e) => set('level', e.target.value)} className={inputCls}>
              <option>Supertalent</option>
              <option>Berkembang</option>
              <option>Emerging</option>
            </select>
          </div>
          <div>
            <label className="block text-[12px] font-semibold mb-1">Eskul Terkait</label>
            <input value={form.eskul} onChange={(e) => set('eskul', e.target.value)} placeholder="cth: Panahan Sunnah" className={inputCls} type="text" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[12px] font-semibold mb-1">Capaian / Skor</label>
            <input value={form.skor} onChange={(e) => set('skor', e.target.value)} placeholder="cth: Juara 2 Kejurda Horsebow U-12" className={inputCls} type="text" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[12px] font-semibold mb-1">Rekomendasi Pembinaan</label>
            <textarea value={form.rekomendasi} onChange={(e) => set('rekomendasi', e.target.value)} placeholder="cth: TC intensif + seleksi kontingen provinsi" className={inputCls} rows="2" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 pt-1">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-[#E0ECE9] text-[12px] font-semibold hover:bg-[#F7FAF9]">Batal</button>
          <button
            onClick={() => {
              if (!form.nama.trim() || !form.eskul.trim()) return
              onSave?.(form)
              setForm({ nama: '', kelas: '4 Ali bin Abi Thalib', bidang: BIDANG_TALENT[0], level: 'Berkembang', eskul: '', skor: '', rekomendasi: '' })
            }}
            className="px-4 py-2 rounded-lg bg-[#287A74] hover:bg-[#216661] text-white text-[12px] font-bold flex items-center gap-1.5"
          >
            <Icon name="save" className="text-[16px]" />
            Simpan Pemetaan
          </button>
        </div>
        {(!form.nama.trim() || !form.eskul.trim()) && (
          <p className="text-[11px] text-outline">Nama santri &amp; eskul terkait wajib diisi.</p>
        )}
      </div>
    </div>
  )
}
