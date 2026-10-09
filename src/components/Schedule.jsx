import { Icon } from './ui'
export default function Schedule() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/60 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-outline-variant/40">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#EFF7F5] text-primary">
            <Icon name="schedule" className="text-[22px]" />
          </div>
          <div>
            <h2 className="text-[18px] leading-[26px] font-semibold text-on-surface">Jadwal KBM &amp; Agenda Hari Ini</h2>
            <p className="text-[13px] text-outline">Kurikulum Merdeka Terintegrasi Muatan Kekhasan Islam</p>
          </div>
        </div>
        <button className="self-start sm:self-auto px-3 py-1.5 rounded-lg border border-outline-variant text-primary hover:bg-[#EFF7F5] text-[12px] font-semibold flex items-center gap-1.5">
          <Icon name="download" className="text-[16px]" />
          <span>Unduh Jadwal</span>
        </button>
      </div>
      <div className="space-y-3.5">
        <div className="p-4 rounded-xl border border-outline-variant/50 bg-[#F9FBFA] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="px-3 py-2 rounded-lg bg-[#EFF7F5] text-primary text-center shrink-0">
              <span className="text-[12px] font-semibold block">07.30</span>
              <span className="text-[11px] font-bold text-outline block">08.45</span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[16px] font-semibold text-on-surface">Al-Qur'an Hadits</h3>
                <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-[#1A5C55] text-[11px] font-bold">Selesai</span>
              </div>
              <p className="text-[13px] text-on-surface-variant mt-0.5">Kelas 4 Ali bin Abi Thalib - Adab &amp; Makharijul Huruf</p>
              <div className="flex flex-wrap items-center gap-2 mt-2 text-[11px] font-bold text-outline">
                <span className="flex items-center gap-1 text-primary"><Icon name="task_alt" className="text-[14px]" /> Jurnal Terisi</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-primary"><Icon name="file_present" className="text-[14px]" /> RPP Terunggah</span>
                <span>•</span><span>Presensi: 28 Hadir</span>
              </div>
            </div>
          </div>
          <button className="px-3 py-1.5 rounded-lg border border-outline-variant text-[12px] font-semibold self-end md:self-center">Lihat Jurnal</button>
        </div>
        <div className="p-4 rounded-xl border-2 border-primary bg-secondary-container/20 relative flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-primary text-on-primary text-[11px] font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping" /> SEDANG BERLANGSUNG
          </div>
          <div className="flex items-start gap-4 pt-1">
            <div className="px-3 py-2 rounded-lg bg-primary text-on-primary text-center shrink-0">
              <span className="text-[12px] font-semibold block">09.00</span>
              <span className="text-[11px] font-bold block">10.15</span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[16px] font-semibold text-primary">PAI &amp; Budi Pekerti</h3>
                <span className="px-2 py-0.5 rounded-full bg-[#FFF8B0] text-[#695E05] text-[11px] font-bold">Kelas 5 Utsman</span>
              </div>
              <p className="text-[13px] text-on-surface-variant mt-0.5">Khulafaur Rasyidin &amp; Refleksi Ramadhan - Ruang 5B Lt.2</p>
              <div className="flex items-center gap-2 mt-2 text-[11px] font-bold text-primary">
                <Icon name="how_to_reg" className="text-[14px]" /><span>Presensi: 27/28 (1 Izin Umrah)</span>
              </div>
            </div>
          </div>
          <button className="px-3.5 py-2 rounded-lg bg-primary text-on-primary text-[12px] font-semibold self-end md:self-center">Input Nilai KBM</button>
        </div>
        <div className="p-4 rounded-xl border border-outline-variant/50 bg-[#F9FBFA] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="px-3 py-2 rounded-lg bg-surface-container-low text-center shrink-0">
              <span className="text-[12px] font-semibold block">10.30</span>
              <span className="text-[11px] font-bold text-outline block">11.45</span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[16px] font-semibold text-on-surface">Matematika Tematik</h3>
                <span className="px-2 py-0.5 rounded-full bg-surface-container text-[#5C7A76] text-[11px] font-semibold">Mendatang</span>
              </div>
              <p className="text-[13px] text-on-surface-variant mt-0.5">Kelas 4 Ali - Luas &amp; Keliling Bangun Datar (LKPD)</p>
            </div>
          </div>
          <button className="px-3 py-1.5 rounded-lg border border-outline-variant text-[12px] font-semibold self-end md:self-center">Siapkan Modul</button>
        </div>
        <div className="p-4 rounded-xl border border-secondary-container bg-[#F0FAF7] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="px-3 py-2 rounded-lg bg-secondary text-on-secondary text-center shrink-0">
              <span className="text-[12px] font-semibold block">12.30</span>
              <span className="text-[11px] font-bold block">13.15</span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[16px] font-semibold text-secondary">Dzuhur Berjamaah &amp; Kultum</h3>
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold">Ibadah Sentral</span>
              </div>
              <p className="text-[13px] text-on-surface-variant mt-0.5">Masjid Al-Ikhlas - Imam: Ustadz Ahmad Fauzi</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-white border border-secondary/20 text-secondary text-[11px] font-semibold self-end md:self-center">Wajib Seluruh Jenjang</span>
        </div>
      </div>
    </div>
  )
}

