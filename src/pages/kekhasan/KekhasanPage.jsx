import { useState } from 'react'
import { KekhasanHeader, KekhasanStats } from './KekhasanHeader'
import KekhasanTabs from './KekhasanTabs'
import QuickInput from './QuickInput'
import SetoranTable from './SetoranTable'
import { JuzWidget, YaumiyahWidget, AgendaWidget } from './KekhasanWidgets'

export default function KekhasanPage() {
  const [tab, setTab] = useState(0)
  const [toast, setToast] = useState('')

  const save = (v) => {
    setToast(v?.santri ? `Mutaba'ah ${v.santri} tersimpan.` : "Mutaba'ah tersimpan.")
    setTimeout(() => setToast(''), 2600)
  }

  return (
    <div className="space-y-6">
      <KekhasanHeader />
      <KekhasanStats />
      <KekhasanTabs active={tab} onChange={setTab} />
      {tab === 0 && (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 space-y-6">
            <QuickInput onSave={save} />
            <SetoranTable />
          </div>
          <div className="lg:col-span-4 space-y-6">
            <JuzWidget />
            <YaumiyahWidget />
            <AgendaWidget />
          </div>
        </section>
      )}
      {tab !== 0 && (
        <div className="p-8 rounded-xl bg-surface-container-lowest border border-[#E0ECE9] text-center text-[13px] text-outline">
          Tab ini mengikuti desain — konten penuh menyusul. Saat ini fokus pada tab Jurnal Tahfidz &amp; Tahsin.
        </div>
      )}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-primary text-white text-[12px] font-semibold shadow-lg">
          {toast}
        </div>
      )}
    </div>
  )
}
