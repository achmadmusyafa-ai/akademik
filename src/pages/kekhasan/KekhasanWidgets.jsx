import { Icon } from '../../components/ui'
import { JUZ_DIST, YAUMIYAH } from '../../dataKekhasan'

export function JuzWidget() {
  return (
    <div className="p-5 rounded-xl bg-surface-container-lowest border border-[#E0ECE9] shadow-sm">
      <div className="flex items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-2">
          <Icon name="bar_chart" className="text-primary text-[20px]" />
          <h3 className="text-[16px] font-semibold text-primary">Distribusi Capaian Juz Rombel 4</h3>
        </div>
        <span className="text-[11px] font-bold text-outline whitespace-nowrap">28 Santri</span>
      </div>
      <div className="space-y-4">
        {JUZ_DIST.map((j) => (
          <div key={j.label}>
            <div className="flex justify-between items-center text-[12px] font-semibold mb-1.5 gap-2">
              <span className="text-on-surface">{j.label}</span>
              <span className={`font-bold whitespace-nowrap ${j.pctCls}`}>{j.pct}</span>
            </div>
            <div className="w-full h-2.5 bg-[#E0ECE9] rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${j.bar}`} style={{ width: j.w }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-[#E0ECE9] flex items-center justify-between gap-2">
        <span className="text-[11px] font-bold text-outline">Target Kelulusan SDIT: Minimal 3 Juz</span>
        <span className="text-[11px] text-primary font-bold hover:underline cursor-pointer whitespace-nowrap">Lihat Detail Matriks →</span>
      </div>
    </div>
  )
}

export function YaumiyahWidget() {
  return (
    <div className="p-5 rounded-xl bg-surface-container-lowest border border-[#E0ECE9] shadow-sm">
      <div className="flex items-center justify-between mb-3 gap-2">
        <div className="flex items-center gap-2">
          <Icon name="task_alt" className="text-[#20604b] text-[20px]" />
          <h3 className="text-[16px] font-semibold text-primary">Buku Penghubung Yaumiyah</h3>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#FFF8B0] text-[#695E05] whitespace-nowrap">Ramadhan 1445 H</span>
      </div>
      <p className="text-[13px] text-outline mb-4">Rekap sinkronisasi checklist aplikasi wali murid harian</p>
      <div className="space-y-3">
        {YAUMIYAH.map((y) => (
          <div key={y.label} className="flex items-center justify-between p-2 rounded-lg bg-[#F7FAF9] gap-2">
            <div className="flex items-center gap-2.5">
              <Icon name={y.icon} className="text-primary text-[18px]" />
              <span className="text-[13px] text-on-surface">{y.label}</span>
            </div>
            <span className={`text-[12px] font-bold whitespace-nowrap ${y.hot ? 'text-[#1A5C55]' : 'text-primary'}`}>{y.val}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-[#FFF8B0]/40 border border-[#FFF8B0] flex flex-col gap-2.5">
        <div className="flex items-start gap-2">
          <Icon name="info" className="text-[#695E05] text-[18px] shrink-0 mt-0.5" />
          <span className="text-[13px] text-[#695E05]">2 santri belum mengirim konfirmasi buku penghubung hari ini.</span>
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg bg-[#20604b] hover:bg-primary text-white text-[12px] font-semibold shadow-sm">
          <Icon name="send" className="text-[16px]" />
          <span>Kirim Pengingat WhatsApp ke Wali</span>
        </button>
      </div>
    </div>
  )
}

export function AgendaWidget() {
  return (
    <div className="p-5 rounded-xl bg-surface-container-lowest border border-[#E0ECE9] shadow-sm">
      <div className="flex items-center justify-between mb-3 gap-2">
        <div className="flex items-center gap-2">
          <Icon name="event_upcoming" className="text-primary text-[20px]" />
          <h3 className="text-[16px] font-semibold text-primary">Agenda Ujian Tahfidz</h3>
        </div>
        <span className="text-[11px] text-primary font-bold">Maret 2024</span>
      </div>
      <div className="p-3.5 rounded-lg border border-[#CFE2DE] bg-[#EFF7F5] flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] px-2 py-0.5 rounded bg-primary text-white font-bold">Tasmi&apos; Akbar</span>
          <span className="text-[11px] text-outline font-medium">Kamis, 28 Maret 2024</span>
        </div>
        <div className="font-bold text-on-surface text-[14px]">Simaan 1 Juz Sekali Duduk (Juz 30)</div>
        <p className="text-[13px] text-on-surface-variant">Pelaksanaan di Masjid Ulul Albab SDIT Balikpapan disimak bersama Asatidz &amp; disaksikan wali murid.</p>
        <div className="flex items-center justify-between pt-2 border-t border-[#CFE2DE]/70 text-[11px] font-bold gap-2">
          <span className="text-outline">Peserta: <strong className="text-primary">5 Santri Terpilih</strong></span>
          <span className="text-primary hover:underline cursor-pointer">Lihat Daftarnya →</span>
        </div>
      </div>
    </div>
  )
}
