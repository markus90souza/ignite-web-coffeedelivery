import styled from 'styled-components'
import { Text, Title } from '../../../../../components/Typografy'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 0;
  text-align: center;
`

export const Image = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -1.25rem;
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background-color: ${({ theme }) => theme.colors['brand-yellow-light']};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    text-transform: uppercase;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
  }
`

export const Name = styled(Title)`
  margin-bottom: 0.5rem;
`

export const Description = styled(Text)`
  margin-bottom: 2rem;
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FooterHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    line-height: 0.75rem;
  }
`
export const AddCartContainer = styled.div`
  width: 7.5rem;
  display: flex;
  align-items: center;
  > button {
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: ${({ theme }) => theme.colors['base-card']};
    background-color: ${({ theme }) => theme.colors['brand-purple-dark']};
    margin-left: 0.3rem;
    border-radius: 6px;
    transition: all 0.4s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`
