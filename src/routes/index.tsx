import { BrowserRouter, Route, Routes } from 'react-router-dom'
// LAYOUT
import { RootLayout } from '@/layouts/RootLayout'
// PAGES
import { Home } from '@/pages/Home'
import { Orders } from '@/pages/Orders'
export const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pedidos" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
