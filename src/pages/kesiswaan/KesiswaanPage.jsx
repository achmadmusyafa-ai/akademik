import { useState } from 'react'
import { KesiswaanHeader } from './KesiswaanHeader'
import { KesiswaanTabs, KesiswaanStats } from './KesiswaanTabs'
import TurnamenHead from './TurnamenHead'
import TurnamenTable from './TurnamenTable'
import Standings from './Standings'
import PrestasiGrid from './PrestasiGrid'
import SkorForm from './SkorForm'
import { JadwalEskul, DistribusiEskul } from './KesiswaanWidgets'

export default function KesiswaanPage() {
  const [tab, setTab] = useState(0)
  const [toast, setToast] = useState('')
  const notify = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2600)
  }

  return (
    <div className="flex flex-col gap-6">
      <KesiswaanHeader
        onAction={(a) => notify(
          a === 'pairing' ? 'Pairing babak baru dibuat.' :
          a === 'prestasi' ? 'Form prestasi baru dibuka.' :
          a === 'print' ? 'Rekap hasil disiapkan untuk cetak.' : 'Rekap diekspor.'
        )}
      />
      <KesiswaanTabs active={tab} onChange={setTab} />
      <KesiswaanStats />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-white border border-[#E0ECE9] rounded-xl shadow-sm overflow-hidden">
            <TurnamenHead onGenerate={() => notify('Pairing Swiss otomatis dibuat.')} />
            <TurnamenTable onHasil={(m, h) => notify(`Hasil Meja ${m.meja} (${h}) tersimpan.`)} />
            <Standings />
          </div>
          <PrestasiGrid />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
          <SkorForm onSave={(v) => notify(v.hasil ? `Skor ${v.hasil} tersimpan.` : 'Pilih hasil pertandingan dulu.')} />
          <JadwalEskul />
          <DistribusiEskul />
        </div>
      </div>
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-primary text-white text-[12px] font-semibold shadow-lg">
          {toast}
        </div>
      )}
    </div>
  )
}
