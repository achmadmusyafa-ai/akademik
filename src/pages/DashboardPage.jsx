import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Schedule from '../components/Schedule'
import Tahfidz from '../components/Tahfidz'
import SideWidgets from '../components/SideWidgets'

export default function DashboardPage() {
  return (
    <>
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
    </>
  )
}
