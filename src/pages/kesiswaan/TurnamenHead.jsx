import { useState } from 'react'
import { Icon } from '../../components/ui'
import { BABAKS, KATEGORI } from '../../dataKesiswaan'

export default function TurnamenHead({ onGenerate }) {
  const [babak, setBabak] = useState(3)
  const [kategori, setKategori] = useState(KATEGORI[0])
  return (
    <div className="p-5 border-b border-[#E0ECE9] bg-gradient-to-r from-white to-[#EFF7F5]/50 flex flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-primary-container text-white flex items-center justify-center shrink-0">
            <Icon name="military_tech" className="text-[20px]" />
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-primary leading-tight">Turnamen Catur SDIT &apos;Ramadhan Fast Chess Cup 2024&apos;</h2>
            <p className="text-[13px] text-[#5C7A76]">Catur Cepat 15 Menit - Sistem Swiss 5 Babak</p>
          </div>
        </div>
        <button onClick={() => onGenerate?.()} className="px-3 py-1.5 bg-[#287A74] hover:bg-[#216661] text-white rounded-lg text-[12px] font-semibold flex items-center gap-1.5">
          <Icon name="auto_mode" className="text-[14px]" />
          <span>Generate Pairing Otomatis (Swiss Rule)</span>
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E0ECE9]">
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-semibold text-outline">Kategori:</span>
          <select value={kategori} onChange={(e) => setKategori(e.target.value)} className="py-1 px-2.5 bg-[#F7FAF9] border border-outline-variant rounded-md text-[12px] font-semibold">
            {KATEGORI.map((k) => <option key={k}>{k}</option>)}
          </select>
        </div>
        <div className="flex items-center gap-1.5 bg-[#F7FAF9] p-1 rounded-lg border border-[#E0ECE9] overflow-x-auto">
          {BABAKS.map((b, i) => (
            <button
              key={b}
              onClick={() => setBabak(i)}
              className={babak === i
                ? 'px-2.5 py-1 rounded bg-[#287A74] text-white font-bold text-[11px] flex items-center gap-1 whitespace-nowrap'
                : 'px-2.5 py-1 rounded text-[11px] font-bold text-outline hover:text-primary flex items-center gap-1 whitespace-nowrap'}
            >
              {i === 3 && babak === i && <span className="w-1.5 h-1.5 rounded-full bg-[#AEEED3] animate-pulse" />}
              {i < 3 && babak !== i && <Icon name="check_circle" className="text-[12px] text-primary" />}
              {b}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
