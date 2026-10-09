import { Icon } from '../../components/ui'
import { TRANSAKSI } from '../../dataAdministrasi'

export default function TransaksiList({ items = TRANSAKSI, onAction }) {
  if (!items.length) {
    return (
      <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant card-shadow-1 text-center text-[13px] text-outline">
        Tidak ada transaksi yang cocok dengan filter saat ini.
      </div>
    )
  }
  return (
    <div className="space-y-3">
      {items.map((t) => (
        <div
          key={t.id}
          className={
            t.active
              ? 'p-4 rounded-xl bg-surface-container-lowest border-2 border-primary/40 card-shadow-2 transition-all'
              : 'p-4 rounded-xl bg-surface-container-lowest border border-outline-variant card-shadow-1'
          }
        >
          {/* Top: identity + nominal */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-outline-variant/60">
            <div className="flex items-start gap-3">
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-primary font-bold flex-shrink-0 ${t.iconCls}`}>
                <Icon name={t.icon} className="text-[22px]" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-[16px] font-semibold text-on-surface">{t.nama}</h3>
                  <span className={t.statusCls}>
                    {t.statusIcon && <Icon name={t.statusIcon} className="text-[14px]" />}
                    {t.status}
                  </span>
                </div>
                <div className="text-[13px] text-outline flex items-center gap-2 mt-0.5 flex-wrap">
                  <span>{t.meta}</span>
                  <span>•</span>
                  <span className="text-primary font-semibold">{t.rombel}</span>
                  <span>•</span>
                  <span>{t.waktu}</span>
                </div>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className={`text-[18px] leading-6 font-bold ${t.nominalCls}`}>{t.nominal}</div>
              <div className="text-[11px] text-outline">{t.metode}</div>
            </div>
          </div>
          {/* Bottom: tagihan pills + actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-3">
            <div className="flex items-center gap-2 flex-wrap">
              {t.tagihan.map((tag) => (
                <span key={tag.text} className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${tag.cls}`}>
                  {tag.text}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {t.actions.map((a) => (
                <button
                  key={a.label + a.icon}
                  onClick={() => onAction?.(a.label, t)}
                  className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-colors flex items-center gap-1.5 ${a.cls}`}
                >
                  <Icon name={a.icon} className="text-[16px]" />
                  {!a.iconOnly && <span>{a.label}</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
