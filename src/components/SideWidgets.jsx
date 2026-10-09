import { Icon } from './ui'
import { ACTIVITY } from '../data'
export default function SideWidgets() {
  return (
    <div className="space-y-7">
      <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/60 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
          <div className="flex items-center gap-2.5">
            <Icon name="domain" className="text-primary text-[22px]" />
            <h3 className="font-semibold text-on-surface">Manajemen Fasilitas</h3>
          </div>
          <a className="text-[11px] font-bold text-primary hover:underline" href="#fasilitas">Kelola</a>
        </div>
        <div className="p-3.5 rounded-xl border border-outline-variant/50 bg-[#F9FBFA] space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-[12px] font-semibold text-on-surface"><Icon name="computer" className="text-primary text-[18px]" /> Lab Komputer Utama</span>
            <span className="px-2 py-0.5 rounded-full bg-error-container text-error text-[11px] font-bold whitespace-nowrap">Sedang Dipakai</span>
          </div>
          <p className="text-[13px] text-on-surface-variant">Kelas 6 Umar - Simulasi CBT (08.00-10.00 WITA)</p>
          <div className="flex justify-between text-[11px] font-bold text-outline pt-1"><span>32 PC Aktif</span><span className="text-primary">Tersedia 10.15</span></div>
        </div>
        <div className="p-3.5 rounded-xl border border-outline-variant/50 bg-[#F9FBFA] space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-[12px] font-semibold text-on-surface"><Icon name="local_library" className="text-secondary text-[18px]" /> Khizanah Al-Hikmah</span>
            <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-[#1A5C55] text-[11px] font-bold whitespace-nowrap">Buka</span>
          </div>
          <p className="text-[13px] text-on-surface-variant">Sirah Nabawiyah &amp; Tematik Fase B</p>
          <div className="flex justify-between text-[11px] font-bold text-outline pt-1"><span>15 Kembali</span><span className="text-error">4 Jatuh Tempo</span></div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/60 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
          <div className="flex items-center gap-2.5">
            <Icon name="emoji_events" className="text-primary text-[22px]" />
            <h3 className="font-semibold text-on-surface">Kesiswaan &amp; Eskul</h3>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold">Prestasi</span>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#F7FAF9] to-[#EAF5F3] border border-outline-variant/60 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0"><Icon name="military_tech" className="text-[22px]" /></div>
            <div><h4 className="font-semibold text-on-surface">Klub Catur SDIT</h4><span className="text-[11px] font-bold text-outline">Seleksi O2SN Balikpapan</span></div>
          </div>
          <p className="text-[13px] text-on-surface-variant">Try-out catur cepat 15 menit. Latihan gabungan Rabu sore di Aula Utama.</p>
          <div className="pt-1 flex items-center justify-between gap-2">
            <span className="text-[11px] font-semibold text-primary">6 Siswa Seleksi</span>
            <button className="px-3 py-1 rounded-lg border border-outline-variant text-primary text-[11px] font-bold">Lihat Roster</button>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/60 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
          <div className="flex items-center gap-2.5">
            <Icon name="bolt" className="text-primary text-[22px]" />
            <h3 className="font-semibold text-on-surface">Aktivitas Realtime</h3>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Live</span>
        </div>
        <div className="space-y-3">
          {ACTIVITY.map((a) => (
            <div key={a.time} className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F7FAF9]">
              <div className={'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ' + a.box}><Icon name={a.icon} className="text-[16px]" /></div>
              <div className="flex-1">
                <p className="text-[13px] text-on-surface" dangerouslySetInnerHTML={{ __html: a.html }} />
                <span className="text-[11px] font-bold text-outline">{a.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-2 text-center"><button className="text-[11px] font-semibold text-primary hover:underline">Lihat Log Audit &amp; RLS</button></div>
      </div>
    </div>
  )
}
