import { Text } from '@/components/Typografy'
import { ReactNode } from 'react'

import { Container } from './styles'

interface PaymentMethodProps {
  icon: ReactNode
  title: string
}

export function PaymentMethod({ title, icon }: PaymentMethodProps) {
  return (
    <Container>
      {icon}
      <Text size="s" color="subtitle">
        {title}
      </Text>
    </Container>
  )
}
