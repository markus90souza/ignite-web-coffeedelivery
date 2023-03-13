import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;

  p {
    align-self: flex-start;
    font-weight: 700;
  }
`

export const CoffeeImage = styled.img`
  width: 4rem;
  height: 4rem;
`

export const CoffeeInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`
export const CoffeeInfo = styled.div``

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
  margin-top: 0.5rem;

  > div {
    max-width: 4.5rem;
    width: 100%;
  }
`

export const RemoveCoffee = styled.button`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors['base-text']};
  height: 100%;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-button']};
  padding: 0 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`
