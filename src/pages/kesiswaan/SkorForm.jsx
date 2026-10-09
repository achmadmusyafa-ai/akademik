import { useState } from 'react'
import { Icon } from '../../components/ui'
import { MEJA_OPTIONS } from '../../dataTurnamen'

const ADAB = [
  'Membaca Doa & Bismillah sebelum tanding',
  'Jabat tangan & senyum ukhuwah sebelum/sesudah',
  'Merapikan bidak & papan catur kembali ke tempat'
]

export default function SkorForm({ onSave }) {
  const [meja, setMeja] = useState(MEJA_OPTIONS[0])
  const [hasil, setHasil] = useState('')
  const [adab, setAdab] = useState([true, true, false])
  const [catatan, setCatatan] = useState('')

  return (
    <div className="bg-white border border-[#E0ECE9] rounded-xl shadow-sm p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b border-[#E0ECE9] pb-3">
        <span className="w-8 h-8 rounded-lg bg-[#EFF7F5] text-primary flex items-center justify-center shrink-0">
          <Icon name="sports_score" className="text-[18px]" />
        </span>
        <div>
          <h3 className="text-[16px] text-primary font-bold">Input Skor &amp; Evaluasi Adab</h3>
          <p className="text-[11px] text-outline">Pencatatan Cepat Hasil Partai Turnamen</p>
        </div>
      </div>
      <div className="flex flex-col gap-3.5">
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] text-on-surface font-semibold">Pilih Meja / Partai:</label>
          <select value={meja} onChange={(e) => setMeja(e.target.value)} className="w-full px-3 py-2 bg-white border border-[#E0ECE9] rounded-lg text-[13px] focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none">
            {MEJA_OPTIONS.map((m) => <option key={m}>{m}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] text-on-surface font-semibold">Hasil Pertandingan:</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { v: '1-0', label: 'Putih (1 - 0)', cls: 'text-primary' },
              { v: 'draw', label: 'Remis (½ - ½)', cls: 'text-outline' },
              { v: '0-1', label: 'Hitam (0 - 1)', cls: 'text-slate-800' }
            ].map((o) => (
              <label key={o.v} className="flex flex-col items-center justify-center p-2 rounded-lg border border-[#CFE2DE] hover:bg-[#EFF7F5] cursor-pointer text-center">
                <input checked={hasil === o.v} onChange={() => setHasil(o.v)} className="text-primary focus:ring-primary mb-1" name="match_result" type="radio" value={o.v} />
                <span className={`text-[11px] font-bold ${o.cls}`}>{o.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#EFF7F5] border border-[#CFE2DE] flex flex-col gap-2">
          <span className="text-[12px] text-[#287A74] font-bold flex items-center gap-1">
            <Icon name="handshake" className="text-[14px]" />
            Checklist Adab &amp; Fairplay Santri:
          </span>
          {ADAB.map((a, i) => (
            <label key={a} className="flex items-center gap-2 text-[11px] text-on-surface cursor-pointer">
              <input checked={adab[i]} onChange={() => setAdab((s) => s.map((v, j) => (j === i ? !v : v)))} className="rounded text-primary focus:ring-primary" type="checkbox" />
              <span>{a}</span>
            </label>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] text-on-surface font-semibold">Catatan Wasit / Pembina:</label>
          <textarea value={catatan} onChange={(e) => setCatatan(e.target.value)} className="w-full px-3 py-2 bg-white border border-[#E0ECE9] rounded-lg text-[13px] focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none" placeholder="Catatan langkah, waktu, atau evaluasi sportivitas..." rows="2" />
        </div>
        <button onClick={() => onSave?.({ meja, hasil, adab, catatan })} className="w-full py-2.5 bg-primary hover:bg-[#004e49] text-white text-[12px] font-bold rounded-lg flex items-center justify-center gap-2" type="button">
          <Icon name="save" className="text-[16px]" />
          <span>Simpan Skor &amp; Perbarui Standings</span>
        </button>
      </div>
    </div>
  )
}
