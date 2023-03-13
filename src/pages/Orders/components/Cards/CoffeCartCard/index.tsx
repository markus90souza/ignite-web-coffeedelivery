import { InputQuantity } from '@/components/Inputs/InputQuantity'
import { Text } from '@/components/Typografy'
import { Trash } from 'phosphor-react'
import {
  CoffeeImage,
  CoffeeInfoContainer,
  Container,
  CoffeeInfo,
  RemoveCoffee,
  Actions,
} from './styles'

interface CoffeCartCardProps {}

// eslint-disable-next-line no-empty-pattern
export function CoffeCartCard({}: CoffeCartCardProps) {
  return (
    <Container>
      <CoffeeInfoContainer>
        <CoffeeImage src={''} alt={''} />

        <CoffeeInfo>
          <Text color="subtitle">Expresso Tradicional</Text>
          <Actions>
            <InputQuantity size="medium" />
            <RemoveCoffee>
              <Trash size={16} />
              Remover
            </RemoveCoffee>
          </Actions>
        </CoffeeInfo>
      </CoffeeInfoContainer>

      <p>R$ 9,00</p>
    </Container>
  )
}
