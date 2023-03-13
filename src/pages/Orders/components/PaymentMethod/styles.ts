import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  user-select: none;
  transition: all 0.4s;

  p {
    font-size: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors['brand-purple']};
    background: ${({ theme }) => theme.colors['brand-purple-light']};
  }
`
