import { Hero } from './components/Hero'
import { OurCoffee } from './components/OurCoffee'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Hero />
      <OurCoffee />
    </Container>
  )
}
