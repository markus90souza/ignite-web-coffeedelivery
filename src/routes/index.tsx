import { BrowserRouter, Route, Routes } from 'react-router-dom'
// LAYOUT
import { RootLayout } from '@/layouts/RootLayout'
// PAGES
import { Home } from '@/pages/Home'
import { Order } from '@/pages/Order'
export const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
