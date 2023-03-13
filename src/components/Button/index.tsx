import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string | number
}

export function Button({ title, ...rest }: ButtonProps) {
  return <Container {...rest}>{title}</Container>
}
