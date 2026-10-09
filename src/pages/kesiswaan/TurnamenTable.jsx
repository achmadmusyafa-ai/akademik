import { Icon } from '../../components/ui'
import { MATCHES } from '../../dataTurnamen'

function Player({ nama, tag, sub, skor, black }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`w-3 h-3 rounded-full border-2 border-slate-700 shadow-sm ${black ? 'bg-slate-900' : 'bg-white'}`} />
      <div>
        <p className={`font-bold ${black === 'muted' ? 'text-slate-600' : 'text-on-surface'}`}>
          {nama} {tag && <span className="text-xs text-primary font-normal">{tag}</span>}
        </p>
        <p className="text-[11px] font-bold text-outline">{sub} • Skor: <span className="text-primary">{skor}</span></p>
      </div>
    </div>
  )
}

export default function TurnamenTable({ onHasil }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[760px]">
        <thead>
          <tr className="bg-[#EFF7F5] border-b border-[#CFE2DE] text-[12px] font-semibold text-[#5C7A76] uppercase tracking-wider">
            <th className="py-3 px-4 w-16 text-center">Meja</th>
            <th className="py-3 px-4">Pemain Putih (White)</th>
            <th className="py-3 px-3 text-center">Status / Waktu</th>
            <th className="py-3 px-4">Pemain Hitam (Black)</th>
            <th className="py-3 px-4 text-center">Aksi Input Hasil</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E0ECE9] text-[13px]">
          {MATCHES.map((m) => (
            <tr key={m.meja} className={`hover:bg-[#F7FAF9] ${m.mode !== 'live' ? 'bg-[#EFF7F5]/20' : ''}`}>
              <td className="py-3.5 px-4 text-center font-bold text-primary">
                <span className="w-7 h-7 rounded-full bg-[#EFF7F5] border border-[#CFE2DE] inline-flex items-center justify-center">{m.meja}</span>
              </td>
              <td className="py-3.5 px-4"><Player nama={m.putih} tag={m.putihTag} sub={m.putihSub} skor={m.putihSkor} /></td>
              <td className="py-3.5 px-3 text-center">
                {m.mode === 'live' && (
                  <div className="inline-flex flex-col items-center">
                    <span className="px-2 py-0.5 rounded-full bg-[#FFF8B0] text-[#695E05] font-bold text-[11px] border border-[#f1eba4] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                      Bertanding
                    </span>
                    <span className="text-[11px] text-outline mt-1 font-mono">{m.waktu}</span>
                  </div>
                )}
                {m.mode !== 'live' && (
                  <span className={`px-2.5 py-0.5 rounded-full font-bold text-[11px] border whitespace-nowrap ${m.mode === 'done' ? 'bg-[#AEEED3] text-[#1A5C55] border-[#94d3b9]' : 'bg-[#EFF7F5] text-[#287A74] border-[#CFE2DE]'}`}>{m.hasil}</span>
                )}
              </td>
              <td className="py-3.5 px-4"><Player nama={m.hitam} tag={m.hitamTag} sub={m.hitamSub} skor={m.hitamSkor} black={m.hitamMuted ? 'muted' : true} /></td>
              <td className="py-3.5 px-4 text-center">
                {m.mode === 'live' ? (
                  <div className="inline-flex items-center gap-1 bg-[#F7FAF9] p-1 rounded-lg border border-[#E0ECE9]">
                    {['1 - 0', '½ - ½', '0 - 1'].map((h) => (
                      <button key={h} onClick={() => onHasil?.(m, h)} className="px-2 py-1 rounded hover:bg-white text-[11px] font-bold text-primary border border-transparent hover:border-[#CFE2DE]">{h}</button>
                    ))}
                  </div>
                ) : (
                  <span className="text-[11px] text-[#1A5C55] font-semibold inline-flex items-center gap-1">
                    <Icon name="verified" className="text-[16px]" />
                    Terverifikasi
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
