import { Icon } from '../../components/ui'
import { SIRKULASI_ROWS } from '../../dataSirkulasi'

export default function SirkulasiTable({ onAksi }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-[#E0ECE9] shadow-sm p-5 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-[14px] font-bold text-on-surface">
          Daftar Peminjaman Aktif &amp; Jatuh Tempo <span className="text-outline text-[13px] font-normal">(5 Transaksi Terbaru)</span>
        </h4>
        <div className="flex items-center gap-2">
          <button className="text-[11px] font-bold text-primary hover:underline flex items-center gap-1"><Icon name="filter_list" className="text-[14px]" /><span>Filter Kelas</span></button>
          <span className="text-outline">•</span>
          <button className="text-[11px] font-bold text-primary hover:underline flex items-center gap-1"><Icon name="download" className="text-[14px]" /><span>Ekspor XLS</span></button>
        </div>
      </div>
      <div className="overflow-x-auto border border-[#E0ECE9] rounded-lg">
        <table className="w-full text-left border-collapse min-w-[820px]">
          <thead>
            <tr className="bg-[#EFF7F5] border-b border-[#E0ECE9] text-[12px] font-semibold text-on-surface-variant">
              <th className="py-2.5 px-3 text-center w-10">No</th>
              <th className="py-2.5 px-3">Peminjam</th>
              <th className="py-2.5 px-3">Judul Buku &amp; Kode</th>
              <th className="py-2.5 px-3">Tgl Pinjam &amp; Tenggat</th>
              <th className="py-2.5 px-3">Status</th>
              <th className="py-2.5 px-3 text-right">Infaq Denda</th>
              <th className="py-2.5 px-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E0ECE9] text-[13px]">
            {SIRKULASI_ROWS.map((r) => (
              <tr key={r.no} className="hover:bg-[#F7FAF9]">
                <td className="py-2.5 px-3 text-center text-outline">{r.no}</td>
                <td className="py-2.5 px-3">
                  <div className="font-bold text-on-surface">{r.nama}</div>
                  <div className="text-[11px] text-outline">{r.kelas}</div>
                </td>
                <td className="py-2.5 px-3">
                  <div className="font-medium text-primary">{r.judul}</div>
                  <div className="text-[11px] font-mono text-outline">{r.kode}</div>
                </td>
                <td className="py-2.5 px-3">
                  <div>{r.pinjam}</div>
                  <div className={r.late || r.no === 1 ? 'text-[11px] text-error font-medium' : 'text-[11px] text-outline'}>{r.tenggat}</div>
                </td>
                <td className="py-2.5 px-3">
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ${r.statusCls}`}>{r.status}</span>
                </td>
                <td className={`py-2.5 px-3 text-right font-mono ${r.dendaCls}`}>
                  {r.denda}
                  {r.note && <div className="text-[9px] text-outline font-normal">{r.note}</div>}
                </td>
                <td className="py-2.5 px-3 text-center">
                  <button onClick={() => onAksi?.(r)} className={`px-2.5 py-1 text-[11px] font-semibold rounded inline-flex items-center gap-1 whitespace-nowrap ${r.aksiCls}`}>
                    {r.aksiIcon && <Icon name={r.aksiIcon} className="text-[13px]" />}
                    <span>{r.aksi}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
