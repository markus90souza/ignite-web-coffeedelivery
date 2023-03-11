import { Minus, Plus } from 'phosphor-react'

import { Container, IconContainer } from './styles'

export const InputQuantity = () => {
  return (
    <Container>
      <IconContainer>
        <Minus size={14} weight="fill" />
      </IconContainer>

      <input type="number" readOnly value={1} />

      <IconContainer>
        <Plus size={14} weight="fill" />
      </IconContainer>
    </Container>
  )
}
