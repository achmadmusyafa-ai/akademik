import { useState } from 'react'
import { KesiswaanHeader } from './KesiswaanHeader'
import { KesiswaanTabs, KesiswaanStats } from './KesiswaanTabs'
import TurnamenHead from './TurnamenHead'
import TurnamenTable from './TurnamenTable'
import Standings from './Standings'
import PrestasiGrid from './PrestasiGrid'
import SkorForm from './SkorForm'
import { JadwalEskul, DistribusiEskul } from './KesiswaanWidgets'
import EskulSection, { useEskul } from './EskulSection'
import TalentSection, { useTalent } from './TalentSection'
import EskulModal from './EskulModal'
import TalentModal from './TalentModal'

export default function KesiswaanPage() {
  const [tab, setTab] = useState(0)
  const [toast, setToast] = useState('')
  const [eskulOpen, setEskulOpen] = useState(false)
  const [talentOpen, setTalentOpen] = useState(false)
  const { list: eskul, tambah: tambahEskul, hapus: hapusEskul } = useEskul()
  const { list: talent, tambah: tambahTalent, hapus: hapusTalent } = useTalent()
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
      {tab === 1 && (
        <div className="flex flex-col gap-6">
          <EskulSection
            list={eskul}
            onTambah={() => setEskulOpen(true)}
            onHapus={(e) => {
              hapusEskul(e.id)
              notify(`Eskul ${e.nama} dihapus.`)
            }}
            onLihat={(e) => notify(`Kelola anggota ${e.nama} (${e.anggota}/${e.kuota}).`)}
          />
          <TalentSection
            list={talent}
            onTambah={() => setTalentOpen(true)}
            onHapus={(t) => {
              hapusTalent(t.id)
              notify(`Pemetaan ${t.nama} dihapus.`)
            }}
          />
        </div>
      )}
      {tab !== 1 && <KesiswaanStats />}
      {tab === 0 && (
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
      )}
      {tab !== 0 && tab !== 1 && (
        <div className="p-8 rounded-xl bg-white border border-[#E0ECE9] text-center text-[13px] text-outline">
          Konten tab ini mengikuti desain — fokus saat ini pada tab Turnamen Catur &amp; Daftar Eskul + Supertalent.
        </div>
      )}
      <EskulModal
        open={eskulOpen}
        onClose={() => setEskulOpen(false)}
        onSave={(v) => {
          tambahEskul(v)
          setEskulOpen(false)
          notify(`Eskul ${v.nama} ditambahkan.`)
        }}
      />
      <TalentModal
        open={talentOpen}
        onClose={() => setTalentOpen(false)}
        onSave={(v) => {
          tambahTalent(v)
          setTalentOpen(false)
          notify(`${v.nama} dipetakan sebagai ${v.level}.`)
        }}
      />
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-primary text-white text-[12px] font-semibold shadow-lg">
          {toast}
        </div>
      )}
    </div>
  )
}
