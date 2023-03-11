import { Title } from '@/components/Typografy'
import { coffees } from '@/data/coffees'
import { CoffeeCard } from '../Cards/CoffeeCard'

import { CoffeeCardsList, Container } from './styles'

export function OurCoffee() {
  return (
    <Container className="container">
      <Title size="l" color="subtitle" as={'h2'}>
        Nossos Cafés
      </Title>

      <CoffeeCardsList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} data={coffee} />
        ))}
      </CoffeeCardsList>
    </Container>
  )
}
