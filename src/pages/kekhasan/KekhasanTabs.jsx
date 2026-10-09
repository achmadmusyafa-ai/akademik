import { useState } from 'react'
import { Icon } from '../../components/ui'
import { KEKHASAN_TABS } from '../../dataKekhasan'

export default function KekhasanTabs({ active, onChange }) {
  return (
    <section className="border-b border-outline-variant">
      <div className="flex items-center gap-2 overflow-x-auto pb-[-1px]">
        {KEKHASAN_TABS.map((t, i) => {
          const isActive = (active ?? 0) === i
          return (
            <button
              key={t.label}
              onClick={() => onChange?.(i)}
              className={isActive
                ? 'flex items-center gap-2 px-4 py-2.5 text-[12px] font-semibold text-primary border-b-2 border-primary bg-surface-container-lowest rounded-t-lg whitespace-nowrap'
                : 'flex items-center gap-2 px-4 py-2.5 text-[12px] font-semibold text-on-surface-variant hover:text-primary hover:bg-surface-container-lowest/60 rounded-t-lg whitespace-nowrap'}
            >
              <Icon name={t.icon} filled={isActive} className="text-[18px]" />
              <span>{t.label}</span>
              {t.count && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-secondary-container text-on-secondary-container font-bold">{t.count}</span>
              )}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export function useKekhasanTab() {
  const [active, setActive] = useState(0)
  return { active, setActive }
}
