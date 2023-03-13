import styled from 'styled-components'

export const Container = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${({ theme }) => theme.colors['base-white']};
  background: ${({ theme }) => theme.colors['brand-yellow']};
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  line-height: 1.3rem;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.4s;
  text-transform: uppercase;
  border-radius: 6px;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`
