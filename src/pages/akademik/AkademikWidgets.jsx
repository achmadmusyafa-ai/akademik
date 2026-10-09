import { useState } from 'react'
import { Icon } from '../../components/ui'
import { P5_DIMENSI, SANTRI_OPTIONS } from '../../dataNilai'

export function P5Widget() {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-outline-variant gap-2">
        <div className="flex items-center gap-2">
          <Icon name="diversity_3" className="text-primary text-[22px]" />
          <h3 className="text-[16px] font-semibold text-on-surface">Projek Profil P5</h3>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-[#097169] text-[11px] font-bold whitespace-nowrap">80% Tuntas</span>
      </div>
      <div className="space-y-3">
        <div>
          <span className="text-[11px] font-bold text-outline block">Tema Semester Genap:</span>
          <span className="text-[14px] font-semibold text-primary">&quot;Kewirausahaan Berkah Ramadhan &amp; Karakter Rabbani&quot;</span>
        </div>
        <div>
          <span className="text-[11px] font-bold text-outline block mb-1.5">Dimensi Profil Pelajar Pancasila:</span>
          <div className="flex flex-wrap gap-1.5">
            {P5_DIMENSI.map((d) => (
              <span key={d} className="px-2 py-1 rounded-md bg-surface text-on-surface border border-outline-variant text-[11px] font-bold">{d}</span>
            ))}
          </div>
        </div>
        <div className="p-3 bg-surface rounded-lg border border-outline-variant space-y-1">
          <div className="flex justify-between text-[11px] font-bold gap-2">
            <span className="text-outline">Tahapan Saat Ini:</span>
            <span className="text-primary">Aksi &amp; Gelar Karya</span>
          </div>
          <div className="w-full bg-white rounded-full h-2 overflow-hidden border border-outline-variant">
            <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }} />
          </div>
          <span className="text-[11px] font-bold text-outline block pt-1">Koordinator: Tim Guru Rumpun Fase B SDIT</span>
        </div>
      </div>
    </div>
  )
}

export function AdminWidget() {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-outline-variant gap-2">
        <div className="flex items-center gap-2">
          <Icon name="verified_user" className="text-primary text-[22px]" />
          <h3 className="text-[16px] font-semibold text-on-surface">Kelengkapan Administrasi</h3>
        </div>
        <Icon name="check_circle" className="text-tertiary text-[20px]" />
      </div>
      <ul className="space-y-3 text-[13px]">
        <li className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-surface/50 border border-outline-variant">
          <span className="flex items-center gap-2 font-medium text-on-surface"><Icon name="description" className="text-[18px] text-primary" />Modul Ajar Terverifikasi</span>
          <span className="font-bold text-primary whitespace-nowrap">14/14 Selesai</span>
        </li>
        <li className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-surface/50 border border-outline-variant">
          <span className="flex items-center gap-2 font-medium text-on-surface"><Icon name="alt_route" className="text-[18px] text-primary" />Alur Tujuan (ATP)</span>
          <span className="px-2 py-0.5 rounded bg-secondary-container text-[#097169] text-[11px] font-bold whitespace-nowrap">Disetujui Kepsek</span>
        </li>
        <li className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-surface/50 border border-outline-variant">
          <span className="flex items-center gap-2 font-medium text-on-surface"><Icon name="menu_book" className="text-[18px] text-primary" />Buku Pegangan Guru &amp; Santri</span>
          <span className="text-[11px] font-bold text-outline whitespace-nowrap">Terdistribusi 100%</span>
        </li>
      </ul>
    </div>
  )
}

export function CetakRaporWidget({ onGenerate }) {
  const [santri, setSantri] = useState(SANTRI_OPTIONS[0])
  return (
    <div className="bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-5 space-y-4">
      <div className="flex items-center gap-2 pb-2">
        <Icon name="local_printshop" className="text-primary text-[22px]" />
        <h3 className="text-[16px] font-semibold text-on-surface">Pratinjau &amp; Cetak e-Rapor</h3>
      </div>
      <p className="text-[13px] text-outline">Pilih santri untuk validasi Tanda Tangan Elektronik (TTE) dan mencetak lembar rapor kurikulum merdeka.</p>
      <div className="space-y-2">
        <label className="block text-[12px] font-semibold text-on-surface">Pilih Santri Rombel:</label>
        <select value={santri} onChange={(e) => setSantri(e.target.value)} className="w-full px-3 py-2 bg-white rounded-lg border border-outline-variant text-[13px] text-on-surface focus:outline-none focus:border-primary">
          {SANTRI_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="pt-2">
        <button onClick={() => onGenerate?.(santri)} className="w-full py-2.5 px-4 rounded-lg bg-primary text-white text-[14px] font-bold hover:bg-primary-container flex items-center justify-center gap-2 shadow-sm" type="button">
          <Icon name="download_for_offline" className="text-[18px]" />
          <span>Generate e-Rapor PDF (TTE Digital)</span>
        </button>
      </div>
    </div>
  )
}
