import { Icon } from './ui'
import { STATS } from '../data'

export default function Stats() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {STATS.map((s) => (
        <div
          key={s.title}
          className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/60 shadow-[0px_2px_8px_-2px_rgba(40,122,116,0.06)] hover:shadow-[0px_8px_24px_-4px_rgba(40,122,116,0.10)] transition-all"
        >
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-semibold text-on-surface-variant">{s.title}</span>
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.iconBox}`}>
              <Icon name={s.icon} filled={s.filled} className="text-[20px]" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-[28px] leading-9 font-bold text-on-surface">
              {s.value}{' '}
              {s.extra && <span className="text-[18px] text-outline font-normal">{s.extra}</span>}
            </span>
            <span className={`text-[12px] font-semibold ${s.suffixMuted ? 'text-outline' : 'text-primary'}`}>
              {s.suffix}
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] font-bold">
            <span className={`px-2 py-0.5 rounded-full ${s.badgeCls}`}>{s.badge}</span>
            {s.foot && <span className="text-outline font-normal">{s.foot}</span>}
          </div>
        </div>
      ))}
    </section>
  )
}
