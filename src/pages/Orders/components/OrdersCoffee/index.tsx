import { Title } from '@/components/Typografy'
import { CoffeCartCard } from '../Cards/CoffeCartCard'
import { Container, OrdersConatainer } from './styles'

export function OrdersCoffee() {
  return (
    <Container>
      <Title size="xs" color="subtitle">
        Cafés selecionados
      </Title>
      <OrdersConatainer>
        <CoffeCartCard />
        <CoffeCartCard />
        <CoffeCartCard />
        <CoffeCartCard />
      </OrdersConatainer>
    </Container>
  )
}
