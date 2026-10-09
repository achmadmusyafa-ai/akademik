import { Icon } from '../../components/ui'
import { JADWAL_ESKUL, DISTRIBUSI } from '../../dataTurnamen'

export function JadwalEskul() {
  return (
    <div className="bg-white border border-[#E0ECE9] rounded-xl shadow-sm p-5 flex flex-col gap-3.5">
      <div className="flex items-center justify-between border-b border-[#E0ECE9] pb-3 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-[#EFF7F5] text-primary flex items-center justify-center shrink-0">
            <Icon name="schedule" className="text-[18px]" />
          </span>
          <div>
            <h3 className="text-[16px] text-primary font-bold">Jadwal &amp; Absensi Hari Ini</h3>
            <p className="text-[11px] text-outline">Sesi Latihan Sore • Senin, 25 Maret 2024</p>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[#AEEED3] text-[#1A5C55] font-bold text-[11px]">Live</span>
      </div>
      <div className="flex flex-col gap-3">
        {JADWAL_ESKUL.map((j, i) => (
          <div key={j.nama} className={`p-3 rounded-lg border flex flex-col gap-1.5 ${i === 0 ? 'border-[#CFE2DE] bg-[#F7FAF9]' : 'border-[#E0ECE9] bg-white'}`}>
            <div className="flex items-center justify-between gap-2">
              <span className={`font-bold text-[12px] flex items-center gap-1.5 ${i === 0 ? 'text-primary' : 'text-on-surface'}`}>
                <Icon name={j.icon} className={`text-[16px] ${j.iconCls ?? ''}`} />
                {j.nama}
              </span>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded whitespace-nowrap ${i === 0 ? 'text-[#1A5C55] bg-[#AEEED3]' : 'text-outline bg-[#F7FAF9]'}`}>{j.hadir}</span>
            </div>
            <p className="text-[11px] text-outline">{j.jam}</p>
            <div className="flex items-center justify-between pt-1 border-t border-[#E0ECE9] text-[11px] text-[#5C7A76] gap-2">
              <span>{j.kiri}</span>
              <span className={`font-semibold whitespace-nowrap ${j.kananCls}`}>{j.kanan}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DistribusiEskul() {
  return (
    <div className="bg-white border border-[#E0ECE9] rounded-xl shadow-sm p-5 flex flex-col gap-3.5">
      <div className="flex items-center justify-between border-b border-[#E0ECE9] pb-3 gap-2">
        <div>
          <h3 className="text-[16px] text-primary font-bold">Distribusi Peminatan Eskul</h3>
          <p className="text-[11px] text-outline">Total 342 Santri Terdaftar di Semester Ini</p>
        </div>
        <Icon name="pie_chart" className="text-[#287A74]" />
      </div>
      <div className="flex flex-col gap-3">
        {DISTRIBUSI.map((d) => (
          <div key={d.label} className="flex flex-col gap-1">
            <div className="flex justify-between text-[11px] gap-2">
              <span className="font-bold text-on-surface">{d.label}</span>
              <span className="font-bold text-primary whitespace-nowrap">{d.val}</span>
            </div>
            <div className="w-full bg-[#E0ECE9] h-2 rounded-full overflow-hidden">
              <div className={`${d.bar} h-full rounded-full`} style={{ width: d.w }} />
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 bg-[#EFF7F5] rounded-lg border border-[#CFE2DE] text-[#287A74] flex items-start gap-2 mt-1">
        <Icon name="format_quote" className="text-[18px] shrink-0 mt-0.5" />
        <p className="italic text-[11px] leading-relaxed">
          &quot;Mukmin yang kuat lebih dicintai Allah daripada mukmin yang lemah.&quot; Menumbuhkan jiwa kompetitif yang beradab dan berakhlak mulia.
        </p>
      </div>
    </div>
  )
}
