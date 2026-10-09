import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const placeholder = pathname === '/akademik' || pathname === '/manajemen-kbm' ? 'Cari santri, NISN, rombel, materi KBM...' : pathname === '/kekhasan' ? 'Cari santri, surah, atau juz...' : pathname === '/fasilitas' ? 'Cari judul buku, barcode ISBN, jadwal lab, ID PC...' : pathname === '/kesiswaan' ? 'Cari santri, NISN, turnamen catur, atau eskul...' : undefined
  return (
    <div className="bg-[#F7FAF9] text-on-surface antialiased text-[14px] leading-5 flex min-h-screen selection:bg-secondary-container selection:text-primary">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="lg:ml-[260px] flex-1 flex flex-col min-w-0">
        <Topbar onMenu={() => setMenuOpen(true)} placeholder={placeholder} />
        <main className="p-4 sm:p-8 max-w-[1440px] w-full mx-auto space-y-7">
          <Outlet />
        </main>
        <footer className="mt-auto px-4 sm:px-8 py-4 bg-surface-container-lowest border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-outline">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#1A5C55]">
              <span className="w-2 h-2 rounded-full bg-[#1A5C55] animate-pulse" />
              Server SDIT Balikpapan Online
            </span>
            <span>•</span>
            <span>SIAKAD SDIT Balikpapan Islamic School v4.12.0</span>
          </div>
          <div>
            <span>Sistem Penjaminan Mutu Tahfidz &amp; Karakter Qur&apos;ani © 2024</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

