import { Icon } from '../../components/ui'

export function AkademikHeader({ onAction }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm">
      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-2.5">
          <h1 className="text-[22px] leading-[30px] font-semibold text-primary">Manajemen KBM &amp; e-Rapor Kurikulum Merdeka</h1>
          <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-[#097169] text-[11px] font-bold">Fase B • Semester Genap</span>
        </div>
        <p className="text-[13px] text-outline max-w-3xl">
          Pencatatan jurnal mengajar harian terintegrasi presensi, pengunggahan modul ajar/RPP, asesmen formatif-sumatif, proyek P5, dan cetak e-rapor otomatis.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2.5">
        <button onClick={() => onAction?.('ledger')} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface border border-outline-variant text-[14px] font-semibold text-primary hover:bg-surface-container">
          <Icon name="table_view" className="text-[18px]" />
          <span>Unduh Ledger Nilai (Excel)</span>
        </button>
        <button onClick={() => onAction?.('cetak')} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface border border-outline-variant text-[14px] font-semibold text-primary hover:bg-surface-container">
          <Icon name="print" className="text-[18px]" />
          <span>Cetak e-Rapor PDF</span>
        </button>
        <button onClick={() => onAction?.('jurnal')} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container hover:bg-primary text-[14px] font-semibold text-white shadow-sm">
          <Icon name="add_circle" className="text-[18px]" />
          <span>+ Isi Jurnal &amp; Presensi Hari Ini</span>
        </button>
      </div>
    </div>
  )
}
