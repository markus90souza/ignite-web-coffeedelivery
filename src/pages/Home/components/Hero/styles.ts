import { rgba } from 'polished'
import styled from 'styled-components'

import herobg from '../../../../assets/intro-background.png'
import { Text, Title } from '../../../../components/Typografy'
export const HeroContainer = styled.section`
  width: 100%;
  min-height: 34rem;
  background: ${({ theme }) => `url(${herobg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    align-items: flex-start;
  }
`

export const HeroCallToAction = styled.div``

export const HeroImage = styled.div``

export const HeroContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 1rem;
    padding: 2rem 1rem;

    .hero_callToAction {
      h1 {
        font-size: ${({ theme }) => theme.textSizes['title-title-m']};
        text-align: center;
      }

      h3 {
        text-align: center;
      }
    }

    .hero_image {
      img {
        display: block;
        max-width: 100%;
      }
    }
  }
`

export const HeroTitle = styled(Title)`
  margin-bottom: 1rem;
`

export const HeroSubTitle = styled(Text)`
  margin-bottom: 1rem;
`
export const HeroCallToActionHeader = styled.div``

export const HeroCallToActionFooter = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`
