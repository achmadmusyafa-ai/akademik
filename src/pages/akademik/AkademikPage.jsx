import { useState } from 'react'
import { Icon } from '../../components/ui'
import { AkademikHeader } from './AkademikHeader'
import { AkademikTabs, AkademikKpi } from './AkademikTabs'
import JurnalForm from './JurnalForm'
import NilaiTable from './NilaiTable'
import { P5Widget, AdminWidget, CetakRaporWidget } from './AkademikWidgets'

export default function AkademikPage() {
  const [tab, setTab] = useState(0)
  const [toast, setToast] = useState('')
  const notify = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2600)
  }

  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-2 text-[11px] font-bold text-outline">
        <span className="hover:text-primary cursor-pointer flex items-center gap-1">
          <Icon name="home" className="text-[14px]" />
          <span>Beranda</span>
        </span>
        <span>/</span>
        <span className="hover:text-primary cursor-pointer">Akademik &amp; KBM</span>
        <span>/</span>
        <span className="text-primary font-bold">Jurnal Mengajar &amp; e-Rapor Kurikulum Merdeka</span>
      </nav>

      <AkademikHeader
        onAction={(a) => notify(
          a === 'ledger' ? 'Ledger nilai Excel diunduh.' :
          a === 'cetak' ? 'e-Rapor PDF disiapkan.' : 'Form jurnal & presensi dibuka.'
        )}
      />
      <AkademikTabs active={tab} onChange={setTab} />
      <AkademikKpi />

      {tab === 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 space-y-6">
            <JurnalForm
              onSave={(v) => notify(v?.aksi === 'modul' ? 'Pilih modul pengganti dibuka.' : `Jurnal ${v.mapel} tersimpan & presensi dikunci.`)}
            />
            <NilaiTable onDetail={(r) => notify(`Detail nilai ${r.nama} dibuka.`)} />
          </div>
          <div className="lg:col-span-4 space-y-6">
            <P5Widget />
            <AdminWidget />
            <CetakRaporWidget onGenerate={(s) => notify(`e-Rapor ${s} digenerate (TTE).`)} />
          </div>
        </div>
      )}
      {tab !== 0 && (
        <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant text-center text-[13px] text-outline">
          Konten tab ini mengikuti desain — fokus saat ini pada tab Jurnal Mengajar &amp; Presensi KBM.
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
