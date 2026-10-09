import { useState } from 'react'
import { Icon } from '../../components/ui'
import { FasilitasHero, FasilitasStats } from './FasilitasHero'
import FasilitasTabs from './FasilitasTabs'
import SirkulasiForm from './SirkulasiForm'
import SirkulasiTable from './SirkulasiTable'
import LabTimeline from './LabTimeline'
import BookingWidget from './BookingWidget'
import PcHealthWidget from './PcHealthWidget'
import KoleksiWidget from './KoleksiWidget'

export default function FasilitasPage() {
  const [tab, setTab] = useState(0)
  const [toast, setToast] = useState('')

  const notify = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2600)
  }

  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-2 text-[12px] font-semibold text-outline">
        <span className="hover:text-primary cursor-pointer flex items-center gap-1">
          <Icon name="home" className="text-[16px]" />
          <span>Beranda</span>
        </span>
        <span>/</span>
        <span className="hover:text-primary cursor-pointer">Modul Manajemen Fasilitas</span>
        <span>/</span>
        <span className="text-primary font-bold">Sirkulasi Perpustakaan &amp; Lab Komputer</span>
      </nav>

      <FasilitasHero onAction={(a) => notify(a === 'booking' ? 'Form booking lab siap diisi.' : a === 'print' ? 'Barcode & laporan disiapkan.' : 'Form sirkulasi baru siap diisi.')} />
      <FasilitasStats />
      <FasilitasTabs active={tab} onChange={setTab} />

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 space-y-6">
          <SirkulasiForm onTransaksi={(v) => notify(`Transaksi ${v.barcode} diproses.`)} />
          <SirkulasiTable onAksi={(r) => notify(`${r.aksi}: ${r.nama}.`)} />
          <LabTimeline
            onPantau={() => notify('Membuka pantauan klien lab...')}
            onSetuju={(_, ok) => notify(ok ? 'Booking sesi 4 disetujui.' : 'Booking sesi 4 ditolak.')}
          />
        </div>
        <div className="lg:col-span-4 space-y-6">
          <BookingWidget onConfirm={(v) => notify(`Reservasi ${v.rombel} tersimpan.`)} />
          <PcHealthWidget />
          <KoleksiWidget />
        </div>
      </section>

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-primary text-white text-[12px] font-semibold shadow-lg">
          {toast}
        </div>
      )}
    </div>
  )
}
