import { useState } from 'react'
import { Icon } from '../../components/ui'
import { SESI_OPTIONS, ROMBEL_OPTIONS } from '../../dataFasilitas'

export default function BookingWidget({ onConfirm }) {
  const [tanggal, setTanggal] = useState('2024-03-26')
  const [sesi, setSesi] = useState(SESI_OPTIONS[1])
  const [rombel, setRombel] = useState(ROMBEL_OPTIONS[1])
  const [keperluan, setKeperluan] = useState('Simulasi CBT')

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-[#E0ECE9] shadow-sm p-5 space-y-4">
      <div className="pb-3 border-b border-[#E0ECE9]">
        <h3 className="text-[16px] font-semibold text-primary flex items-center gap-2">
          <Icon name="calendar_add_on" className="text-[20px] text-tertiary" />
          <span>Booking Cepat Lab Komputer</span>
        </h3>
        <p className="text-[13px] text-outline">Reservasi ruang CBT &amp; KBM TIK otomatis</p>
      </div>
      <div className="space-y-3">
        <div>
          <label className="block text-[12px] font-bold text-on-surface-variant mb-1">Pilih Tanggal Pelaksanaan</label>
          <input value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="w-full text-[13px] px-3 py-1.5 bg-white border border-[#E0ECE9] rounded-lg focus:outline-none focus:border-primary" type="date" />
        </div>
        <div>
          <label className="block text-[12px] font-bold text-on-surface-variant mb-1">Pilih Sesi Jam KBM</label>
          <select value={sesi} onChange={(e) => setSesi(e.target.value)} className="w-full text-[13px] px-3 py-1.5 bg-white border border-[#E0ECE9] rounded-lg focus:outline-none focus:border-primary">
            {SESI_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[12px] font-bold text-on-surface-variant mb-1">Rombel / Kelas Pemohon</label>
          <select value={rombel} onChange={(e) => setRombel(e.target.value)} className="w-full text-[13px] px-3 py-1.5 bg-white border border-[#E0ECE9] rounded-lg focus:outline-none focus:border-primary">
            {ROMBEL_OPTIONS.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[12px] font-bold text-on-surface-variant mb-1">Keperluan &amp; Kebutuhan Lab</label>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-bold">
            {['Simulasi CBT', 'KBM Reguler TIK'].map((k) => (
              <label key={k} className="flex items-center gap-1.5 p-2 border border-[#E0ECE9] rounded-lg cursor-pointer bg-[#F7FAF9] hover:bg-[#EFF7F5]">
                <input checked={keperluan === k} onChange={() => setKeperluan(k)} className="text-primary focus:ring-primary" name="kebutuhan" type="radio" />
                <span>{k}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="pt-2">
          <button onClick={() => onConfirm?.({ tanggal, sesi, rombel, keperluan })} className="w-full py-2.5 bg-primary hover:bg-[#216661] text-white text-[12px] font-bold rounded-lg flex items-center justify-center gap-2">
            <Icon name="verified" className="text-[18px]" />
            <span>Konfirmasi Reservasi</span>
          </button>
        </div>
      </div>
    </div>
  )
}
