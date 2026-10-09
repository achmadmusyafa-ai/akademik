import { Icon } from '../../components/ui'
import { ROMBEL_OPTIONS, STATUS_OPTIONS } from '../../dataAdministrasi'

export default function FilterToolbar({ query, setQuery, rombel, setRombel, status, setStatus }) {
  return (
    <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant card-shadow-1 flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-2 w-full md:w-auto flex-1">
        <div className="relative w-full">
          <Icon name="filter_list" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]" />
          <input
            value={query}
            onChange={(e) => setQuery?.(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-surface border border-outline-variant text-[13px] text-on-surface placeholder:text-outline focus:outline-none focus:border-primary"
            placeholder="Filter nama santri, NISN, atau no invoice..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 w-full md:w-auto">
        <select
          value={rombel}
          onChange={(e) => setRombel?.(e.target.value)}
          className="px-3 py-1.5 rounded-lg bg-surface border border-outline-variant text-[13px] text-on-surface focus:outline-none focus:border-primary"
        >
          {ROMBEL_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <select
          value={status}
          onChange={(e) => setStatus?.(e.target.value)}
          className="px-3 py-1.5 rounded-lg bg-surface border border-outline-variant text-[13px] text-on-surface focus:outline-none focus:border-primary"
        >
          {STATUS_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
