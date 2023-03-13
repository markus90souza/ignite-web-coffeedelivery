import { Minus, Plus } from 'phosphor-react'

import { Container, IconContainer } from './styles'

type InputQuantityProps = {
  size: 'small' | 'medium'
}

export const InputQuantity = ({ size = 'medium' }: InputQuantityProps) => {
  return (
    <Container size={size}>
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
