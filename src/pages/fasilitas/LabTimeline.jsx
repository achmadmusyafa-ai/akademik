import { Icon } from '../../components/ui'
import { LAB_SESI } from '../../dataSirkulasi'

export default function LabTimeline({ onPantau, onSetuju }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-[#E0ECE9] shadow-sm p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E0ECE9]">
        <div>
          <h3 className="text-[16px] font-semibold text-primary flex items-center gap-2">
            <Icon name="calendar_view_day" className="text-[20px] text-tertiary" />
            <span>Jadwal Pemakaian &amp; Booking Lab Komputer Hari Ini</span>
          </h3>
          <p className="text-[13px] text-outline">Ruang Lab Komputer 1 (36 Client PC &amp; AC Sentral) • 25 Maret 2024</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-secondary-container text-[#097169] text-[11px] font-bold">Live Timeline</span>
      </div>
      <div className="space-y-3">
        {LAB_SESI.map((s) => {
          if (s.mode === 'active') {
            return (
              <div key={s.tag} className="p-4 rounded-lg border-2 border-primary bg-gradient-to-r from-[#EFF7F5] to-white flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-lg bg-primary text-white flex flex-col items-center justify-center shrink-0">
                    <span className="text-[11px] font-bold">{s.tag}</span>
                    <span className="text-[9px] text-tertiary-fixed font-bold animate-pulse">{s.sub}</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[12px] text-primary font-bold">{s.jam}</span>
                      <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-[#0b513d] text-[10px] font-bold">Sedang Berlangsung</span>
                    </div>
                    <div className="text-[14px] font-bold text-primary mt-0.5">{s.judul}</div>
                    <div className="text-[12px] text-on-surface-variant">{s.desc}</div>
                  </div>
                </div>
                <button onClick={() => onPantau?.(s)} className="px-3 py-1.5 bg-primary text-white rounded-lg text-[11px] font-bold hover:bg-[#216661] flex items-center gap-1 self-start md:self-center shrink-0">
                  <Icon name="monitor_heart" className="text-[15px]" />
                  <span>Pantau Klien</span>
                </button>
              </div>
            )
          }
          if (s.mode === 'pending') {
            return (
              <div key={s.tag} className="p-3.5 rounded-lg border border-[#E0ECE9] bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low/50 text-[#695E05] border border-[#e8df9b] flex flex-col items-center justify-center shrink-0">
                    <span className="text-[11px] font-bold">{s.tag}</span>
                    <span className="text-[9px]">{s.sub}</span>
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-outline">{s.jam}</div>
                    <div className="text-[14px] font-bold text-on-surface">{s.judul}</div>
                    <div className="text-[12px] text-outline">{s.desc}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                  <button onClick={() => onSetuju?.(s, true)} className="px-2.5 py-1 bg-tertiary-fixed text-[#0b513d] text-[11px] font-bold rounded hover:bg-[#9fe2c7]">Setujui</button>
                  <button onClick={() => onSetuju?.(s, false)} className="px-2 py-1 text-error text-[11px] font-semibold rounded hover:bg-error-container/40">Tolak</button>
                </div>
              </div>
            )
          }
          return (
            <div key={s.tag} className={`p-3.5 rounded-lg border border-[#E0ECE9] flex flex-col md:flex-row md:items-center justify-between gap-4 ${s.mode === 'done' ? 'bg-[#F7FAF9] opacity-80' : 'bg-white'}`}>
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center shrink-0 border ${s.mode === 'done' ? 'bg-white text-outline border-[#E0ECE9]' : 'bg-[#EFF7F5] text-primary border-[#CFE2DE]'}`}>
                  <span className="text-[11px] font-bold">{s.tag}</span>
                  <span className="text-[9px]">{s.sub}</span>
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-outline">{s.jam}</div>
                  <div className="text-[14px] font-bold text-on-surface">{s.judul}</div>
                  <div className="text-[12px] text-outline">{s.desc}</div>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold self-start md:self-center shrink-0 ${s.mode === 'done' ? 'bg-outline-variant/30 text-on-surface-variant' : 'bg-[#E0F2F0] text-[#287A74]'}`}>
                {s.mode === 'done' ? 'Selesai' : 'Terjadwal'}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
