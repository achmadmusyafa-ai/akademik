import { Icon } from '../../components/ui'
import { AKADEMIK_TABS, AKADEMIK_KPI } from '../../dataAkademik'

export function AkademikTabs({ active, onChange }) {
  return (
    <div className="flex items-center border-b border-outline-variant gap-2 overflow-x-auto pb-px">
      {AKADEMIK_TABS.map((t, i) => (
        <button
          key={t.label}
          onClick={() => onChange?.(i)}
          className={(active ?? 0) === i
            ? 'flex items-center gap-2 px-4 py-2.5 border-b-2 border-primary text-primary text-[14px] font-semibold bg-surface-container-lowest/60 rounded-t-lg whitespace-nowrap'
            : 'flex items-center gap-2 px-4 py-2.5 border-b-2 border-transparent text-outline text-[14px] font-semibold hover:text-primary hover:border-outline-variant whitespace-nowrap'}
        >
          <Icon name={t.icon} filled={(active ?? 0) === i} className="text-[18px]" />
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  )
}

export function AkademikKpi() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {AKADEMIK_KPI.map((k) => (
        <div key={k.title} className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm hover:border-primary/40 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3 gap-2">
            <span className="text-[12px] font-semibold text-outline">{k.title}</span>
            <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ${k.badgeCls}`}>{k.badge}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[28px] font-bold text-primary">{k.value}</span>
            <span className="text-[13px] text-outline">{k.unit}</span>
          </div>
          <div className="w-full bg-surface-variant/40 rounded-full h-1.5 mt-3 overflow-hidden">
            <div className={`${k.bar} h-1.5 rounded-full`} style={{ width: k.w }} />
          </div>
          <span className={`text-[11px] font-bold mt-2 flex items-center gap-1 ${k.footCls}`}>
            <Icon name={k.footIcon} className="text-[14px]" />
            {k.foot}
          </span>
        </div>
      ))}
    </div>
  )
}
