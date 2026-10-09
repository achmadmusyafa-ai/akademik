import { Icon } from '../../components/ui'
import { AUDIT, PPDB, REKENING } from '../../dataAdministrasi'

export function AuditWidget({ onAction }) {
  return (
    <div className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant card-shadow-2">
      <div className="flex items-center justify-between pb-3 border-b border-outline-variant">
        <div className="flex items-center gap-2">
          <Icon name="policy" className="text-primary text-[20px]" />
          <h2 className="text-[16px] font-semibold text-on-surface">Audit Cepat Bukti Transfer</h2>
        </div>
        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-secondary-container text-primary">
          {AUDIT.badge}
        </span>
      </div>
      {/* Receipt Visual Preview Box */}
      <div className="mt-4 p-4 rounded-xl bg-surface border border-outline-variant relative">
        <div className="flex items-center justify-between text-[11px] font-bold text-outline border-b border-outline-variant/60 pb-2">
          <span>{AUDIT.receiptHeader}</span>
          <span className="text-primary">{AUDIT.receiptStatus}</span>
        </div>
        <div className="py-3 space-y-2 text-[13px]">
          {AUDIT.rows.map((r) => (
            <div key={r.label} className="flex justify-between items-baseline gap-3">
              <span className="text-outline">{r.label}</span>
              <span
                className={
                  r.mono
                    ? 'font-mono text-[12px] bg-secondary-container/40 px-1.5 py-0.5 rounded text-primary text-right'
                    : r.big
                      ? 'text-[18px] font-bold text-primary'
                      : `${r.cls || ''} text-right`
                }
              >
                {r.value}
              </span>
            </div>
          ))}
        </div>
        {/* Automated Reconciliation Checklist */}
        <div className="mt-2 p-2.5 rounded-lg bg-surface-container-lowest border border-secondary-container space-y-1.5">
          {AUDIT.checklist.map((c) => (
            <div key={c} className="flex items-center gap-2 text-[11px] font-bold text-primary">
              <Icon name="check_circle" className="text-[16px] text-primary" />
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Audit Action Buttons */}
      <div className="mt-4 space-y-2">
        <button
          onClick={() => onAction?.('Kwitansi PDF terbit • Bukti transfer tervalidasi')}
          className="w-full py-2.5 px-4 rounded-lg bg-primary-container text-on-primary text-[12px] font-bold hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          <Icon name="verified" className="text-[18px]" />
          <span>Validasi &amp; Terbitkan Kwitansi PDF</span>
        </button>
        <button
          onClick={() => onAction?.('Permintaan upload ulang dikirim via WhatsApp')}
          className="w-full py-2 px-4 rounded-lg bg-surface border border-outline-variant text-on-surface text-[12px] font-semibold hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2"
        >
          <Icon name="chat" className="text-[18px]" />
          <span>Minta Upload Ulang via WA</span>
        </button>
      </div>
    </div>
  )
}


export function PpdbWidget() {
  return (
    <div className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant card-shadow-1">
      <div className="flex items-center justify-between pb-3 border-b border-outline-variant">
        <div className="flex items-center gap-2">
          <Icon name="domain_verification" className="text-primary text-[20px]" />
          <h2 className="text-[16px] font-semibold text-on-surface">{PPDB.title}</h2>
        </div>
        <span className="text-[11px] text-outline">{PPDB.targetLabel}</span>
      </div>
      <div className="mt-4">
        <div className="flex items-baseline justify-between mb-1.5">
          <span className="text-[18px] font-bold text-on-surface">{PPDB.headline}</span>
          <span className="text-[16px] font-bold text-primary">{PPDB.pct}</span>
        </div>
        <div className="w-full bg-surface-variant/40 rounded-full h-2.5 overflow-hidden">
          <div className="bg-primary-container h-full rounded-full" style={{ width: PPDB.barPct }} />
        </div>
        <p className="text-[12px] text-outline mt-1.5">{PPDB.note}</p>
      </div>
      {/* Breakdown PPDB Status */}
      <div className="mt-4 space-y-2.5 pt-3 border-t border-outline-variant/60 text-[13px]">
        {PPDB.breakdown.map((b) => (
          <div key={b.label} className="flex items-center justify-between p-2 rounded-lg bg-surface">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${b.dot}`} />
              <span>{b.label}</span>
            </div>
            <span className="font-bold text-on-surface">{b.value}</span>
          </div>
        ))}
      </div>
      <a className="mt-4 inline-flex items-center gap-1.5 text-primary text-[12px] font-bold hover:underline cursor-pointer" href="#">
        <span>{PPDB.linkLabel}</span>
        <Icon name="arrow_forward" className="text-[16px]" />
      </a>
    </div>
  )
}

export function RekeningWidget() {
  return (
    <div className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant card-shadow-1">
      <div className="flex items-center gap-2 pb-3 border-b border-outline-variant">
        <Icon name="account_balance" className="text-primary text-[20px]" />
        <h2 className="text-[16px] font-semibold text-on-surface">Rekening Kas Yayasan SDIT</h2>
      </div>
      <div className="mt-4 space-y-3">
        {REKENING.map((r) => (
          <div key={r.number} className={`p-3.5 rounded-xl border ${r.cls}`}>
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-bold ${r.bankCls}`}>{r.bank}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${r.tagCls}`}>{r.tag}</span>
            </div>
            <div className="text-[16px] font-mono font-bold text-on-surface mt-1 tracking-wider">{r.number}</div>
            <div className="text-[12px] text-outline mt-0.5">{r.holder}</div>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-2 text-[12px] text-primary font-semibold">
          <Icon name="sync" className="text-[16px]" />
          <span>API Gateway BSI &amp; BMI Sinkronisasi Real-time Aktif</span>
        </div>
      </div>
    </div>
  )
}
