import { Icon } from '../../components/ui'
import { STANDINGS } from '../../dataTurnamen'

export default function Standings() {
  return (
    <div className="p-4 bg-[#F7FAF9] border-t border-[#E0ECE9]">
      <div className="flex items-center justify-between mb-3 gap-2">
        <span className="text-[14px] text-primary font-bold flex items-center gap-1.5">
          <Icon name="leaderboard" className="text-[16px]" />
          Klasemen Sementara Babak 4 (Top 5 Standings)
        </span>
        <span className="text-[12px] text-[#287A74] hover:underline cursor-pointer flex items-center gap-0.5">
          Lihat Semua Peserta (32) <Icon name="arrow_forward" className="text-[14px]" />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
        {STANDINGS.map((s) => (
          <div key={s.rank} className={`p-2.5 rounded-lg bg-white border shadow-sm ${s.mid ? 'border-[#AEEED3]' : s.hot ? 'border-[#CFE2DE]' : 'border-[#E0ECE9]'}`}>
            <div className="flex items-center justify-between">
              <span className={`w-5 h-5 rounded-full font-bold text-[11px] flex items-center justify-center ${s.rank === 1 ? 'bg-amber-100 text-amber-800' : s.rank === 2 ? 'bg-slate-200 text-slate-800' : s.rank === 3 ? 'bg-amber-50 text-amber-900' : 'bg-[#EFF7F5] text-outline'}`}>{s.rank}</span>
              <span className={`text-[11px] font-mono font-bold ${s.mid ? 'text-[#1A5C55]' : s.hot ? 'text-primary' : 'text-outline'}`}>Pts: {s.pts}</span>
            </div>
            <p className="text-[12px] font-bold text-on-surface truncate mt-1">{s.nama}</p>
            <p className="text-[11px] text-outline">Buchholz: {s.bh}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
