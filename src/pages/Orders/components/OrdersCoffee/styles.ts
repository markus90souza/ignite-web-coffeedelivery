import styled from 'styled-components'
import { Section } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`
export const OrdersConatainer = styled(Section)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
