import { Icon } from '../../components/ui'
import { ADMIN_TABS } from '../../dataAdministrasi'

export default function AdministrasiTabs({ active, onChange }) {
  return (
    <section className="border-b border-outline-variant flex items-center gap-2 overflow-x-auto">
      {ADMIN_TABS.map((t, i) => {
        const isActive = (active ?? 0) === i
        return (
          <button
            key={t.label}
            onClick={() => onChange?.(i)}
            className={
              isActive
                ? 'flex items-center gap-2 px-4 py-3 border-b-2 border-primary text-primary text-[12px] font-semibold font-bold whitespace-nowrap'
                : 'flex items-center gap-2 px-4 py-3 border-b-2 border-transparent text-outline hover:text-primary text-[12px] font-semibold whitespace-nowrap transition-colors'
            }
          >
            <Icon name={t.icon} className="text-[18px]" />
            <span>{t.label}</span>
          </button>
        )
      })}
    </section>
  )
}
