import { ReactNode } from 'react'

import { Container, IconContainer, InfoText } from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  info: string | ReactNode
  bgIcon: string
}

export function InfoWithIcon({ bgIcon, icon, info }: InfoWithIconProps) {
  return (
    <Container>
      <IconContainer bgIcon={bgIcon}>{icon}</IconContainer>
      {typeof info === 'string' ? <InfoText>{info}</InfoText> : info}
    </Container>
  )
}
