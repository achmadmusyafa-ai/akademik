import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Schedule from './components/Schedule'
import Tahfidz from './components/Tahfidz'
import SideWidgets from './components/SideWidgets'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-[#F7FAF9] text-on-surface antialiased text-[14px] leading-5 flex min-h-screen">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="lg:ml-[260px] flex-1 flex flex-col min-w-0">
        <Topbar onMenu={() => setMenuOpen(true)} />

        <main className="p-4 sm:p-8 max-w-[1440px] w-full mx-auto space-y-7">
          <Hero />
          <Stats />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            <div className="lg:col-span-8 space-y-7">
              <Schedule />
              <Tahfidz />
            </div>
            <div className="lg:col-span-4">
              <SideWidgets />
            </div>
          </div>

          <footer className="pt-6 border-t border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold text-outline gap-3 pb-4">
            <div>© 2024 SDIT Balikpapan Islamic School • Sistem Informasi Akademik &amp; Portal Mutaba&apos;ah Islami Terpadu.</div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed" />
                Server Balikpapan: Optimal (Ping 14ms)
              </span>
              <span>Versi 4.8.2-Merdeka</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
