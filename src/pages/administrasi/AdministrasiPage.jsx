import { useState } from 'react'
import { Icon } from '../../components/ui'
import { AdministrasiHeader, AdministrasiStats } from './AdministrasiHeader'
import AdministrasiTabs from './AdministrasiTabs'
import FilterToolbar from './FilterToolbar'
import TransaksiList from './TransaksiList'
import { AuditWidget, PpdbWidget, RekeningWidget } from './AdministrasiWidgets'
import { TRANSAKSI, ROMBEL_OPTIONS, STATUS_OPTIONS } from '../../dataAdministrasi'

export default function AdministrasiPage() {
  const [tab, setTab] = useState(0)
  const [toast, setToast] = useState('')
  const [query, setQuery] = useState('')
  const [rombel, setRombel] = useState(ROMBEL_OPTIONS[0])
  const [status, setStatus] = useState(STATUS_OPTIONS[0])

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2600)
  }

  const filtered = TRANSAKSI.filter((t) => {
    const q = query.trim().toLowerCase()
    const matchQ =
      !q ||
      t.nama.toLowerCase().includes(q) ||
      t.meta.toLowerCase().includes(q) ||
      t.metode.toLowerCase().includes(q) ||
      t.nominal.toLowerCase().includes(q)
    const matchR =
      rombel === ROMBEL_OPTIONS[0] || rombel === ROMBEL_OPTIONS[1]
        ? true
        : rombel === ROMBEL_OPTIONS[5]
          ? t.rombel.includes('Jalur')
          : t.rombel === rombel
    let matchS
    if (status === STATUS_OPTIONS[0] || status === STATUS_OPTIONS[1]) {
      matchS = true
    } else if (status === STATUS_OPTIONS[2]) {
      matchS = t.status === 'Terverifikasi Otomatis' || t.status === 'Terverifikasi Bendahara'
    } else {
      matchS = t.status === 'Ditolak'
    }
    return matchQ && matchR && matchS
  })

  return (
    <div className="space-y-6">
      <AdministrasiHeader />
      <AdministrasiStats />
      <AdministrasiTabs active={tab} onChange={setTab} />
      {tab === 0 && (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 space-y-4">
            <FilterToolbar
              query={query}
              setQuery={setQuery}
              rombel={rombel}
              setRombel={setRombel}
              status={status}
              setStatus={setStatus}
            />
            <TransaksiList items={filtered} onAction={(label, t) => showToast(`${label} — ${t.nama}`)} />
            {/* Pagination bar */}
            <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant card-shadow-1 flex items-center justify-between text-[13px] gap-3">
              <span className="text-outline">Menampilkan {filtered.length} dari {TRANSAKSI.length} antrean transfer masuk</span>
              <div className="flex items-center gap-1.5">
                <button disabled className="p-1 rounded-md border border-outline-variant text-outline hover:text-primary disabled:opacity-50">
                  <Icon name="chevron_left" className="text-[18px]" />
                </button>
                <button className="px-3 py-1 rounded-md bg-primary text-on-primary font-bold text-[12px]">1</button>
                <button className="px-3 py-1 rounded-md hover:bg-surface border border-outline-variant text-on-surface text-[12px]">2</button>
                <button className="px-3 py-1 rounded-md hover:bg-surface border border-outline-variant text-on-surface text-[12px]">3</button>
                <button className="p-1 rounded-md border border-outline-variant text-outline hover:text-primary">
                  <Icon name="chevron_right" className="text-[18px]" />
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <AuditWidget onAction={(m) => showToast(m)} />
            <PpdbWidget />
            <RekeningWidget />
          </div>
        </section>
      )}
      {tab !== 0 && (
        <div className="p-8 rounded-xl bg-surface-container-lowest border border-[#E0ECE9] text-center text-[13px] text-outline">
          Tab ini mengikuti desain — konten penuh menyusul. Saat ini fokus pada tab Verifikasi Transfer &amp; Pembayaran SPP.
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
