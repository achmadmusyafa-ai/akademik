import { Icon } from '../../components/ui'
import { ADMIN_STATS } from '../../dataAdministrasi'

export function AdministrasiHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2">
      <div>
        <nav className="flex items-center gap-2 text-[11px] font-bold text-outline mb-1.5">
          <span className="hover:text-primary cursor-pointer">Beranda</span>
          <Icon name="chevron_right" className="text-[14px]" />
          <span className="text-outline">Administrasi Keuangan &amp; PPDB</span>
          <Icon name="chevron_right" className="text-[14px]" />
          <span className="text-primary font-bold">Monitoring SPP &amp; Verifikasi Transfer</span>
        </nav>
        <h1 className="text-[22px] md:text-[28px] leading-8 md:leading-9 font-bold text-primary tracking-tight">
          Manajemen Keuangan SPP &amp; Administrasi PPDB TA 2024/2025
        </h1>
        <p className="text-[13px] text-on-surface-variant max-w-3xl mt-1">
          Pusat rekonsiliasi SPP syahriah bulanan, verifikasi bukti transfer wali murid, serta alur seleksi &amp; observasi calon santri baru SDIT Balikpapan.
        </p>
      </div>
      <div className="flex items-center flex-wrap gap-2.5">
        <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant text-primary text-[12px] font-semibold hover:bg-secondary-container/30 transition-all card-shadow-1">
          <Icon name="account_balance" className="text-[18px]" />
          <span>Rekening Bank Syariah</span>
        </button>
        <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant text-primary text-[12px] font-semibold hover:bg-secondary-container/30 transition-all card-shadow-1">
          <Icon name="download" className="text-[18px]" />
          <span>Export Rekap (PDF/Excel)</span>
        </button>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary text-[12px] font-semibold hover:bg-primary transition-all shadow-sm">
          <Icon name="add_circle" className="text-[18px]" />
          <span>+ Buat Invoice Massal</span>
        </button>
      </div>
    </div>
  )
}

export function AdministrasiStats() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {ADMIN_STATS.map((s) => (
        <div key={s.title} className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant card-shadow-1 flex flex-col justify-between relative overflow-hidden">
          <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full pointer-events-none ${s.accent}`} />
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-semibold text-outline">{s.title}</span>
              <span className={`p-1.5 rounded-lg ${s.box}`}>
                <Icon name={s.icon} className="text-[18px]" />
              </span>
            </div>
            <div className="text-[18px] leading-6 font-bold text-on-surface flex items-baseline gap-2">
              <span>{s.value}</span>
              {s.extra && <span className="text-[13px] text-on-surface-variant font-normal">{s.extra}</span>}
              {s.badge && (
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface">{s.badge}</span>
              )}
            </div>
            <div className="text-[13px] text-outline mt-0.5">{s.sub}</div>
          </div>
          <div className="mt-4 pt-3 border-t border-outline-variant/60 relative">
            {s.kind === 'progress' && (
              <>
                <div className="flex items-center justify-between text-[11px] font-bold mb-1.5">
                  <span className="text-primary">{s.pct} {s.pctLabel}</span>
                  <span className="text-outline">{s.foot}</span>
                </div>
                <div className="w-full bg-surface-variant/40 rounded-full h-2 overflow-hidden">
                  <div className={`h-full rounded-full ${s.barColor}`} style={{ width: s.barPct }} />
                </div>
              </>
            )}
            {s.kind === 'link' && (
              <div className="flex items-center justify-between text-[11px] font-semibold">
                <span className="text-outline">{s.foot}</span>
                <span className="text-primary font-bold flex items-center gap-1">
                  {s.linkLabel}
                  <Icon name="arrow_forward" className="text-[14px]" />
                </span>
              </div>
            )}
            {s.kind === 'split' && (
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-primary font-semibold">{s.splitLeft}</span>
                <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-primary font-bold">{s.footBadge}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
