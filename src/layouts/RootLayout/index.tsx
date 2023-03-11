import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'

import { Container } from './styles'

export function RootLayout() {
  return (
    <Container className="container">
      <Header />
      <Outlet />
    </Container>
  )
}
