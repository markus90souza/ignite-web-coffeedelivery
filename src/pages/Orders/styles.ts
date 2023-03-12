import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2.5rem;
`

export const Section = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
