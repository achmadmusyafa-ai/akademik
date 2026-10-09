import { Icon } from '../../components/ui'
import { KOLEKSI } from '../../dataFasilitas'

export default function KoleksiWidget() {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-[#E0ECE9] shadow-sm p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#E0ECE9] gap-2">
        <div>
          <h3 className="text-[16px] font-semibold text-primary flex items-center gap-2">
            <Icon name="local_fire_department" className="text-[20px] text-tertiary" />
            <span>Koleksi Populer Ramadhan</span>
          </h3>
          <p className="text-[13px] text-outline">Buku paling diminati santri bulan ini</p>
        </div>
        <span className="text-[12px] font-semibold text-primary hover:underline cursor-pointer">Semua</span>
      </div>
      <div className="space-y-3">
        {KOLEKSI.map((b) => (
          <div key={b.judul} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F7FAF9] border border-[#E0ECE9]">
            <div className={`w-11 h-14 bg-gradient-to-br ${b.grad} text-white rounded flex flex-col items-center justify-center font-bold text-[10px] text-center p-1 shrink-0`}>
              <Icon name={b.icon} className="text-[16px]" />
              <span>{b.tag}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-[13px] text-on-surface truncate">{b.judul}</div>
              <div className="text-[11px] text-outline">{b.meta}</div>
              <div className="w-full bg-[#E0ECE9] h-1.5 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-[#55A9A0] h-full rounded-full" style={{ width: b.bar }} />
              </div>
            </div>
            <div className="shrink-0">
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${b.stokCls}`}>{b.stok}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
