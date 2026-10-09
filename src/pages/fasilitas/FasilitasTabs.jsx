import { Icon } from '../../components/ui'
import { FASILITAS_TABS } from '../../dataFasilitas'

export default function FasilitasTabs({ active, onChange }) {
  return (
    <div className="flex items-center gap-2 border-b border-[#E0ECE9] overflow-x-auto pb-1 text-[12px] font-semibold">
      {FASILITAS_TABS.map((t, i) => (
        <button
          key={t.label}
          onClick={() => onChange?.(i)}
          className={(active ?? 0) === i
            ? 'px-4 py-2 border-b-2 border-primary text-primary font-bold flex items-center gap-2 whitespace-nowrap bg-surface-container-lowest rounded-t-lg'
            : 'px-4 py-2 text-on-surface-variant hover:text-primary flex items-center gap-2 whitespace-nowrap'}
        >
          <Icon name={t.icon} className="text-[18px]" />
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  )
}
