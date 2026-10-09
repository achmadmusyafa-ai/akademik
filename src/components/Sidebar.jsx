import { Icon } from './ui'
import { NAV_MAIN } from '../data'

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <button
          aria-label="Tutup menu"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
        />
      )}
      <aside
        className={`fixed left-0 top-0 h-full w-[260px] flex flex-col justify-between p-4 z-40 bg-surface-container-lowest border-r border-outline-variant select-none transition-transform duration-200 ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 px-2 pt-1">
            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
              <Icon name="auto_stories" className="text-[24px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] leading-6 font-semibold text-primary tracking-tight">SDIT Balikpapan</span>
              <span className="text-[11px] font-bold tracking-wider text-outline">Islamic School Portal</span>
            </div>
          </div>

          <button className="w-full py-2.5 px-3 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-[12px] font-semibold transition-all duration-150 flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]">
            <Icon name="add_circle" className="text-[18px]" />
            <span>Input Mutaba&apos;ah</span>
          </button>

          <nav className="flex flex-col gap-1.5 mt-1">
            {NAV_MAIN.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  item.active
                    ? 'flex items-center gap-3 px-3 py-2.5 rounded-lg bg-secondary-container text-primary text-[12px] font-semibold border-l-4 border-primary'
                    : 'flex items-center justify-between px-3 py-2.5 rounded-lg text-on-surface-variant text-[12px] font-semibold hover:bg-surface-container-low hover:text-primary transition-colors'
                }
              >
                <span className="flex items-center gap-3">
                  <Icon name={item.icon} filled={item.active} className="text-[20px]" />
                  <span className={item.active ? 'flex-1' : ''}>{item.label}</span>
                </span>
                {item.tag && (
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold">
                    {item.tag}
                  </span>
                )}
                {item.dot && <span className="w-2 h-2 rounded-full bg-error" />}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-outline-variant pt-3 flex flex-col gap-1">
          <a href="#panduan" className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant text-[12px] font-semibold hover:bg-surface-container-low hover:text-primary transition-colors">
            <Icon name="help_outline" className="text-[20px]" />
            <span>Bantuan &amp; Panduan</span>
          </a>
          <a href="#keluar" className="flex items-center gap-3 px-3 py-2 rounded-lg text-error text-[12px] font-semibold hover:bg-error-container transition-colors">
            <Icon name="logout" className="text-[20px]" />
            <span>Keluar</span>
          </a>
        </div>
      </aside>
    </>
  )
}
