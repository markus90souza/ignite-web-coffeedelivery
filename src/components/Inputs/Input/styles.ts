import styled from 'styled-components'
// ${({ theme }) => theme.}
export const Container = styled.input`
  height: 2.625rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background: ${({ theme }) => theme.colors['base-input']};
  border-radius: 4px;
  padding: 0 0.75rem;
  color: ${({ theme }) => theme.colors['base-text']};
  transition: all 0.4s;

  &:focus {
    border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
