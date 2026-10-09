import { useState } from 'react'
import { Icon } from '../../components/ui'

export default function SirkulasiForm({ onTransaksi }) {
  const [peminjam, setPeminjam] = useState('0134982210 - Muhammad Faris Al-Fatih')
  const [barcode, setBarcode] = useState('KB-ISL-0482')
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-[#E0ECE9] shadow-sm p-5 space-y-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#E0ECE9]">
        <div>
          <h3 className="text-[16px] font-semibold text-primary flex items-center gap-2">
            <Icon name="qr_code_scanner" className="text-[20px] text-tertiary" />
            <span>Input Peminjaman &amp; Sirkulasi Cepat</span>
          </h3>
          <p className="text-[13px] text-outline">Gunakan barcode scanner USB / masukkan identitas santri &amp; buku</p>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#EFF7F5] text-primary text-[11px] font-bold border border-[#CFE2DE] self-start">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Scanner Siap
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 bg-[#F7FAF9] p-3.5 rounded-lg border border-[#E0ECE9]">
        <div className="md:col-span-5">
          <label className="block text-[11px] font-bold text-on-surface-variant mb-1">NISN / Nama Santri / ID Guru</label>
          <div className="relative">
            <input value={peminjam} onChange={(e) => setPeminjam(e.target.value)} className="w-full text-[13px] pl-8 pr-3 py-1.5 bg-white border border-[#E0ECE9] rounded-lg focus:outline-none focus:border-primary" type="text" />
            <Icon name="person" className="text-outline text-[16px] absolute left-2.5 top-2.5" />
          </div>
        </div>
        <div className="md:col-span-4">
          <label className="block text-[11px] font-bold text-on-surface-variant mb-1">Barcode / ISBN Buku</label>
          <div className="relative">
            <input value={barcode} onChange={(e) => setBarcode(e.target.value)} className="w-full text-[13px] pl-8 pr-3 py-1.5 bg-white border border-[#E0ECE9] rounded-lg focus:outline-none focus:border-primary" type="text" />
            <Icon name="barcode" className="text-outline text-[16px] absolute left-2.5 top-2.5" />
          </div>
        </div>
        <div className="md:col-span-3 flex items-end">
          <button onClick={() => onTransaksi?.({ peminjam, barcode })} className="w-full py-2 px-3 bg-primary hover:bg-[#216661] text-white text-[12px] font-bold rounded-lg flex items-center justify-center gap-1.5">
            <Icon name="check_circle" className="text-[18px]" />
            <span>Proses Transaksi</span>
          </button>
        </div>
      </div>
    </div>
  )
}
