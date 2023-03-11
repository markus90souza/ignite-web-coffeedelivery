import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 2rem;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    padding: 0 1rem;
  }
`

export const CoffeeCardsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`
