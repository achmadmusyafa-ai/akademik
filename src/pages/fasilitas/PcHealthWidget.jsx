import { Icon } from '../../components/ui'
import { PC_ISSUES } from '../../dataFasilitas'

function pcLabel(n) {
  return String(n).padStart(2, '0')
}

export default function PcHealthWidget() {
  const pcs = Array.from({ length: 36 }, (_, i) => i + 1)
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-[#E0ECE9] shadow-sm p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#E0ECE9] gap-2">
        <div>
          <h3 className="text-[16px] font-semibold text-primary flex items-center gap-2">
            <Icon name="health_and_safety" className="text-[20px] text-tertiary" />
            <span>Status Kesehatan 36 PC Lab</span>
          </h3>
          <p className="text-[13px] text-outline">Realtime ping node switch Lab Komputer 1</p>
        </div>
        <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-ping shrink-0" />
      </div>
      <div>
        <div className="flex items-center justify-between text-[11px] font-bold mb-2 text-outline gap-2">
          <span>Layout Denah Meja (Baris 1 - 6)</span>
          <span className="text-primary">32 Normal • 4 Check</span>
        </div>
        <div className="grid grid-cols-6 gap-1.5 p-3 bg-[#F7FAF9] rounded-lg border border-[#E0ECE9]">
          {pcs.map((n) => {
            const key = pcLabel(n)
            const issue = PC_ISSUES[key] || PC_ISSUES[n]
            return (
              <div
                key={n}
                title={issue ? `PC-${key}: ${issue}` : `PC-${key}: Online`}
                className={`aspect-square rounded flex flex-col items-center justify-center text-[9px] font-bold ${issue ? 'bg-[#FFF8B0] text-[#695E05]' : 'bg-[#AEEED3] text-[#1A5C55]'}`}
              >
                {key}
              </div>
            )
          })}
        </div>
      </div>
      <div className="p-3 bg-[#EFF7F5] rounded-lg border border-[#CFE2DE] space-y-1 text-[12px]">
        <div className="flex items-center justify-between font-bold text-primary gap-2">
          <span className="flex items-center gap-1.5">
            <Icon name="wifi" className="text-[16px]" />
            Dedicated Fiber 200 Mbps
          </span>
          <span className="text-tertiary">Ping: 3ms</span>
        </div>
        <div className="text-outline text-[11px] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary shrink-0" />
          Server CBT Lokal SDIT: Online &amp; Sinkron Pusat Pusmendik
        </div>
      </div>
    </div>
  )
}
