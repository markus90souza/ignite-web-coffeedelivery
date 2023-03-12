import { Text } from '@/components/Typografy'
import { ReactNode } from 'react'

import { Container } from './styles'

interface SectionTitleProps {
  icon: ReactNode
  title: string
  subtitle: string
}

export function SectionTitle({ title, icon, subtitle }: SectionTitleProps) {
  return (
    <Container>
      {icon}
      <div>
        <Text color="subtitle">{title}</Text>
        <Text size="s">{subtitle}</Text>
      </div>
    </Container>
  )
}
