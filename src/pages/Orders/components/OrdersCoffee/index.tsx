import { Button } from '@/components/Button'
import { Text, Title } from '@/components/Typografy'
import { CoffeCartCard } from '../Cards/CoffeCartCard'
import { Container, OrdersConatainer, TotalContainer } from './styles'

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

        <TotalContainer>
          <div>
            <Text size="s">Total de itens</Text>
            <Text>R$ 29,70</Text>
          </div>

          <div>
            <Text size="s">Entrega</Text>
            <Text>R$ 3,50</Text>
          </div>

          <div>
            <Text weight="700" color="subtitle" size="l">
              Total
            </Text>
            <Text weight="700" color="subtitle" size="l">
              R$ 33,20
            </Text>
          </div>

          <Button title="Confirmar pedido" />
        </TotalContainer>
      </OrdersConatainer>
    </Container>
  )
}
