import { Icon } from '../../components/ui'

export function KesiswaanHeader({ onAction }) {
  return (
    <div className="flex flex-col gap-2">
      <nav className="flex items-center gap-2 text-[13px] text-outline">
        <span className="hover:text-primary cursor-pointer">Beranda</span>
        <Icon name="chevron_right" className="text-[12px]" />
        <span className="hover:text-primary cursor-pointer">Kesiswaan &amp; Eskul</span>
        <Icon name="chevron_right" className="text-[12px]" />
        <span className="text-primary font-semibold">Sistem Turnamen Catur &amp; Papan Prestasi</span>
      </nav>
      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-[28px] leading-9 font-bold text-primary tracking-tight">Kesiswaan &amp; Manajemen Ekstrakurikuler</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-[#AEEED3] text-[#1A5C55] text-[11px] font-bold flex items-center gap-1 border border-[#94d3b9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A5C55]" />
              Eskul Unggulan SDIT Balikpapan
            </span>
          </div>
          <p className="text-[14px] text-on-surface-variant">Sistem Manajemen Turnamen Catur Cepat Ramadhan 1445 H &amp; Portofolio Rekap Prestasi Kejuaraan Santri</p>
        </div>
        <div className="flex items-center gap-2.5 flex-wrap">
          <button onClick={() => onAction?.('print')} title="Cetak Rekap Hasil" className="p-2 border border-outline-variant bg-white text-on-surface-variant hover:text-primary hover:border-primary rounded-lg shadow-sm">
            <Icon name="print" className="text-[20px]" />
          </button>
          <button onClick={() => onAction?.('export')} title="Ekspor PDF/Excel" className="p-2 border border-outline-variant bg-white text-on-surface-variant hover:text-primary hover:border-primary rounded-lg shadow-sm">
            <Icon name="download" className="text-[20px]" />
          </button>
          <button onClick={() => onAction?.('pairing')} className="px-3.5 py-2 border border-[#CFE2DE] bg-[#EFF7F5] text-[#287A74] hover:bg-[#E0ECE9] text-[12px] font-semibold rounded-lg flex items-center gap-2">
            <Icon name="social_leaderboard" className="text-[16px]" />
            <span>+ Buat Pairing Babak Baru</span>
          </button>
          <button onClick={() => onAction?.('prestasi')} className="px-4 py-2 bg-primary-container hover:bg-[#216661] text-white text-[12px] font-semibold rounded-lg flex items-center gap-2 shadow-sm">
            <Icon name="military_tech" className="text-[16px]" />
            <span>+ Tambah Prestasi Baru</span>
          </button>
        </div>
      </div>
    </div>
  )
}
