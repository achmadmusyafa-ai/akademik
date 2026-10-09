import { useState } from 'react'
import { Icon } from '../../components/ui'
import { SANTRI_OPTIONS } from '../../dataKekhasan'

const inputCls = 'w-full text-[13px] bg-white border border-[#E0ECE9] rounded-lg px-2.5 py-1.5 focus:border-[#287A74] focus:ring-2 focus:ring-[#287A74]/15 focus:outline-none'

export default function QuickInput({ onSave }) {
  const [santri, setSantri] = useState('')
  const [surah, setSurah] = useState('')
  const [kategori, setKategori] = useState('Ziyadah Baru')
  const [predikat, setPredikat] = useState('Mumtaz (A+)')
  const [catatan, setCatatan] = useState('')

  return (
    <div className="p-5 rounded-xl bg-surface-container-lowest border border-[#E0ECE9] shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
        <div className="flex items-center gap-2">
          <Icon name="speed" className="text-primary text-[20px]" />
          <h2 className="text-[16px] font-semibold text-primary">Input Cepat Setoran Halaqah</h2>
        </div>
        <span className="text-[11px] font-bold text-outline">Halaqah Pagi • Ustadz Ahmad Fauzi</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        <div>
          <label className="block text-[11px] font-bold text-on-surface-variant mb-1">Pilih Santri</label>
          <select value={santri} onChange={(e) => setSantri(e.target.value)} className={inputCls}>
            <option value="">Pilih Santri Kelas 4...</option>
            {SANTRI_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-on-surface-variant mb-1">Surah &amp; Rentang Ayat</label>
          <input value={surah} onChange={(e) => setSurah(e.target.value)} className={inputCls} placeholder="Misal: An-Naba' 1-40" type="text" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-on-surface-variant mb-1">Kategori Simaan</label>
          <select value={kategori} onChange={(e) => setKategori(e.target.value)} className={inputCls}>
            <option>Ziyadah Baru</option>
            <option>Muraja&apos;ah Harian</option>
            <option>Muraja&apos;ah Pekanan</option>
            <option>Tasmi&apos; Khitaman Juz</option>
          </select>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-on-surface-variant mb-1">Predikat Tajwid</label>
          <select value={predikat} onChange={(e) => setPredikat(e.target.value)} className={inputCls}>
            <option>Mumtaz (A+)</option>
            <option>Jayyid Jiddan (A)</option>
            <option>Jayyid (B+)</option>
            <option>Tashih Ulang (Perbaikan)</option>
          </select>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-[#E0ECE9] flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="w-full sm:flex-1">
          <input value={catatan} onChange={(e) => setCatatan(e.target.value)} className="w-full text-[13px] bg-white border border-[#E0ECE9] rounded-lg px-3 py-1.5 focus:border-[#287A74] focus:ring-2 focus:ring-[#287A74]/15 focus:outline-none" placeholder="Catatan makhraj/tajwid..." type="text" />
        </div>
        <button onClick={() => onSave?.({ santri, surah, kategori, predikat, catatan })} className="px-4 py-1.5 rounded-lg bg-[#AEEED3] hover:bg-[#8ee2be] text-[#163330] text-[12px] font-semibold flex items-center gap-1.5 self-end sm:self-center">
          <Icon name="save" className="text-[16px]" />
          <span>Simpan Mutaba&apos;ah</span>
        </button>
      </div>
    </div>
  )
}
