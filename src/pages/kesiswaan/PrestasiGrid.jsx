import { Icon } from '../../components/ui'
import { PRESTASI } from '../../dataTurnamen'

export default function PrestasiGrid() {
  return (
    <div className="bg-white border border-[#E0ECE9] rounded-xl shadow-sm p-5 flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-[18px] font-semibold text-primary flex items-center gap-2">
            <Icon name="trophy" className="text-[#287A74]" />
            Papan Galeri Prestasi Siswa &amp; Kontingen SDIT Balikpapan
          </h3>
          <p className="text-[13px] text-[#5C7A76]">Dokumentasi raihan piala, medali, dan sertifikat resmi tingkat Kota &amp; Provinsi</p>
        </div>
        <button className="text-[12px] text-primary font-bold hover:underline flex items-center gap-1">
          <span>Arsip Lengkap</span>
          <Icon name="open_in_new" className="text-[16px]" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PRESTASI.map((p) => (
          <div key={p.judul} className="p-4 rounded-xl border border-[#CFE2DE] bg-gradient-to-br from-white to-[#EFF7F5] flex flex-col justify-between gap-3 hover:border-primary">
            <div className="flex items-start justify-between gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1 ${p.badgeCls}`}>
                <Icon name={p.icon} filled className={`text-[14px] ${p.iconCls}`} />
                {p.badge}
              </span>
              <span className="text-[11px] text-outline">{p.date}</span>
            </div>
            <div>
              <h4 className="font-bold text-[16px] text-on-surface leading-snug">{p.judul}</h4>
              <p className="text-[13px] text-[#5C7A76] mt-1">Santri: <strong className="text-primary">{p.desc}</strong> {p.extra}</p>
            </div>
            <div className="pt-2 border-t border-[#CFE2DE] flex items-center justify-between text-[11px] text-outline gap-2">
              <span>{p.foot1}</span>
              <span className="text-[#287A74] font-semibold flex items-center gap-0.5 whitespace-nowrap">
                <Icon name={p.footIcon} className="text-[12px]" />
                {p.foot2}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
