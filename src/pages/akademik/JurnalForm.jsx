import { useState } from 'react'
import { Icon } from '../../components/ui'
import { ROMBEL_OPTIONS, MAPEL_OPTIONS } from '../../dataAkademik'

const fieldCls = 'w-full px-3 py-2 bg-white rounded-lg border border-outline-variant text-[13px] text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none'

export default function JurnalForm({ onSave }) {
  const [rombel, setRombel] = useState(ROMBEL_OPTIONS[0])
  const [mapel, setMapel] = useState(MAPEL_OPTIONS[0])
  const [cp, setCp] = useState("Al-Qur'an Hadits & Fiqih Ibadah Ramadhan (Fase B Elemen Fiqih)")
  const [materi, setMateri] = useState('Memahami Ketentuan Puasa Ramadhan & Zakat Fitrah sesuai Sunnah Nabi serta mempraktikkan niat dan doa berbuka dengan fasih dan benar.')

  return (
    <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
      <div className="px-6 py-4 bg-surface/50 border-b border-outline-variant flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary-container text-white flex items-center justify-center shrink-0">
            <Icon name="edit_note" className="text-[20px]" />
          </div>
          <div>
            <h2 className="text-[16px] font-semibold text-primary">Input Jurnal Mengajar &amp; Presensi KBM Harian</h2>
            <p className="text-[13px] text-outline">Pencatatan real-time KBM sesuai modul Kurikulum Merdeka Fase B</p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-secondary-container text-primary text-[11px] font-semibold">Sesi Berjalan: Jam Ke 1-2</span>
      </div>
      <div className="p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="block text-[12px] font-semibold text-on-surface">Rombongan Belajar (Rombel)</label>
            <select value={rombel} onChange={(e) => setRombel(e.target.value)} className={fieldCls}>
              {ROMBEL_OPTIONS.map((r) => <option key={r}>{r}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="block text-[12px] font-semibold text-on-surface">Mata Pelajaran</label>
            <select value={mapel} onChange={(e) => setMapel(e.target.value)} className={fieldCls}>
              {MAPEL_OPTIONS.map((m) => <option key={m}>{m}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="block text-[12px] font-semibold text-on-surface">Jam Ke &amp; Rentang Waktu</label>
            <input readOnly value="Jam Ke 1-2 (07.30 - 08.45 WITA)" className={`${fieldCls} bg-surface font-semibold`} type="text" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="block text-[12px] font-semibold text-on-surface">Elemen / Capaian Pembelajaran (CP)</label>
          <input value={cp} onChange={(e) => setCp(e.target.value)} className={fieldCls} type="text" />
        </div>
        <div className="space-y-1.5">
          <label className="block text-[12px] font-semibold text-on-surface">Materi Pokok / Tujuan Pembelajaran (TP) Hari Ini</label>
          <textarea value={materi} onChange={(e) => setMateri(e.target.value)} className={fieldCls} rows="2" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-3.5 rounded-lg border border-outline-variant bg-surface/40 flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <Icon name="picture_as_pdf" className="text-[28px] text-primary shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-[12px] font-bold text-on-surface truncate max-w-[180px]">RPP-FaseB-PAI-Pekan10.pdf</span>
                <span className="text-[11px] text-outline">Supabase Storage • 1.4 MB</span>
              </div>
            </div>
            <button onClick={() => onSave?.({ aksi: 'modul' })} className="px-2.5 py-1 text-[11px] font-bold text-primary border border-outline-variant rounded bg-white hover:bg-surface-container shrink-0" type="button">Ganti Modul</button>
          </div>
          <div className="p-3.5 rounded-lg border border-outline-variant bg-surface/40 flex flex-col justify-between gap-2">
            <div className="flex items-center justify-between text-[11px] font-bold gap-2">
              <span className="text-on-surface">Presensi Rombel (28 Santri)</span>
              <span className="text-primary">27 Hadir • 1 Izin Sakit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-secondary-container text-primary">96.4% Kehadiran Kelas</span>
              <span className="text-[13px] text-outline truncate">Sakit: <strong className="text-on-surface">Raffasya Dwi Putra</strong></span>
            </div>
          </div>
        </div>
        <div className="pt-3 border-t border-outline-variant flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] font-bold text-outline flex items-center gap-1">
            <Icon name="lock" className="text-[16px] text-tertiary" />
            Kunci presensi otomatis menerbitkan rekap kehadiran ke aplikasi wali santri.
          </span>
          <button onClick={() => onSave?.({ rombel, mapel, cp, materi })} className="px-5 py-2.5 rounded-lg bg-primary-container text-white text-[14px] font-semibold hover:bg-primary shadow-sm flex items-center gap-2" type="button">
            <Icon name="save" className="text-[18px]" />
            <span>Simpan Jurnal &amp; Kunci Presensi</span>
          </button>
        </div>
      </div>
    </section>
  )
}
