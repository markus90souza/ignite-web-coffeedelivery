import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  flex: 1;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-button']};
  padding: 0.5rem;

  input {
    width: 100%;
    border: none;
    background: none;
    text-align: center;
    color: ${({ theme }) => theme.colors['base-title']};

    &:focus {
      outline: none;
    }
  }
`

export const IconContainer = styled.button.attrs({
  type: 'button',
})`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors['brand-purple']};
  width: 0.875rem;
  height: 0.875rem;
  transition: 0.4s all;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors['brand-purple-dark']};
  }
`
