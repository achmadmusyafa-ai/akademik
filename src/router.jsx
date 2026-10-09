import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import DashboardPage from './pages/DashboardPage'
import KekhasanPage from './pages/kekhasan/KekhasanPage'
import FasilitasPage from './pages/fasilitas/FasilitasPage'
import KesiswaanPage from './pages/kesiswaan/KesiswaanPage'

function Placeholder({ title }) {
  return (
    <div className="p-8 rounded-xl bg-surface-container-lowest border border-[#E0ECE9] text-center">
      <h1 className="text-[18px] font-semibold text-primary">{title}</h1>
      <p className="text-[13px] text-outline mt-1">Halaman ini mengikuti desain — konten penuh menyusul.</p>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'kekhasan', element: <KekhasanPage /> },
      { path: 'fasilitas', element: <FasilitasPage /> },
      { path: 'kesiswaan', element: <KesiswaanPage /> },
      { path: 'keuangan', element: <Placeholder title="PPDB & Keuangan" /> },
      { path: 'pengaturan', element: <Placeholder title="Pengaturan Sistem" /> },
      { path: 'panduan', element: <Placeholder title="Bantuan & Panduan" /> },
      { path: 'keluar', element: <Placeholder title="Keluar" /> }
    ]
  }
])
