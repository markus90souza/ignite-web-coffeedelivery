import { Section } from '@/pages/Orders/styles'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const Box = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FormContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-auto-flow: dense;
  row-gap: 1rem;
  column-gap: 0.75rem;

  .zipcode {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`

export const PaymentMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  > div {
    padding: 0 1rem;
  }
`
