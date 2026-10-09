import { Link, useLocation } from 'react-router-dom'
import { Icon } from './ui'

const NAV = [
  { label: 'Akademik & KBM', icon: 'menu_book', to: '/akademik', match: ['/', '/akademik', '/manajemen-kbm'] },
  { label: 'Kekhasan SDIT', icon: 'auto_stories', to: '/kekhasan' },
  { label: 'Fasilitas Sekolah', icon: 'domain', to: '/fasilitas' },
  { label: 'Kesiswaan & Eskul', icon: 'emoji_events', to: '/kesiswaan' },
  { label: 'PPDB & Keuangan', icon: 'payments', to: '/administrasi', match: ['/administrasi', '/keuangan'], dot: true },
  { label: 'Pengaturan Sistem', icon: 'settings', to: '/pengaturan' }
]

export default function Sidebar({ open, onClose }) {
  const { pathname } = useLocation()
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
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-2 py-1">
            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-white shadow-sm">
              <Icon name="auto_stories" className="text-[24px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] leading-6 font-semibold text-primary tracking-tight">SDIT Balikpapan</span>
              <span className="text-[13px] text-outline font-medium">Islamic School Portal</span>
            </div>
          </div>

          <div>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary-container hover:bg-primary text-white text-[12px] font-semibold transition-all shadow-sm">
              <Icon name="edit_note" className="text-[18px]" />
              <span>Input Mutaba&apos;ah</span>
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {NAV.map((item) => {
              const active = item.match ? item.match.includes(pathname) : pathname === item.to
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={onClose}
                  className={
                    active
                      ? 'flex items-center gap-3 px-3 py-2.5 rounded-lg bg-secondary-container text-primary text-[12px] font-semibold border-l-4 border-primary'
                      : 'flex items-center justify-between px-3 py-2.5 rounded-lg text-on-surface-variant text-[12px] font-semibold hover:bg-surface-container-low hover:text-primary transition-colors'
                  }
                >
                  <span className="flex items-center gap-3">
                    <Icon name={item.icon} filled={active} className="text-[20px]" />
                    <span className={active ? 'font-bold' : ''}>{item.label}</span>
                  </span>
                  {item.dot && <span className="w-2 h-2 rounded-full bg-error" />}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="border-t border-outline-variant pt-3 flex flex-col gap-1">
          <Link to="/panduan" className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant text-[12px] font-semibold hover:bg-surface-container-low hover:text-primary transition-colors">
            <Icon name="help_outline" className="text-[20px]" />
            <span>Bantuan &amp; Panduan</span>
          </Link>
          <Link to="/keluar" className="flex items-center gap-3 px-3 py-2 rounded-lg text-error text-[12px] font-semibold hover:bg-error-container transition-colors">
            <Icon name="logout" className="text-[20px]" />
            <span>Keluar</span>
          </Link>
        </div>
      </aside>
    </>
  )
}
