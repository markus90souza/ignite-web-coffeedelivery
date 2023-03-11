import {
  HeroCallToAction,
  HeroContainer,
  HeroContent,
  HeroImage,
  HeroSubTitle,
  HeroTitle,
  HeroCallToActionHeader,
  HeroCallToActionFooter,
} from './styles'

import x from './../../../../assets/intro-img.png'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
export function Hero() {
  const { colors } = useTheme()
  return (
    <HeroContainer>
      <HeroContent className="container">
        <HeroCallToAction className="hero_callToAction">
          <HeroCallToActionHeader>
            <HeroTitle size="xl" as={'h1'}>
              Encontre o café perfeito para qualquer hora do dia
            </HeroTitle>

            <HeroSubTitle as={'h3'}>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </HeroSubTitle>
          </HeroCallToActionHeader>

          <HeroCallToActionFooter>
            <InfoWithIcon
              bgIcon={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              info="Compra simples e segura"
            />

            <InfoWithIcon
              bgIcon={colors['base-text']}
              icon={<Package weight="fill" />}
              info="Embalagem mantém o café intacto"
            />

            <InfoWithIcon
              bgIcon={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              info="Entrega rápida e rastreada"
            />

            <InfoWithIcon
              bgIcon={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              info="Compra O café chega fresquinho até você"
            />
          </HeroCallToActionFooter>
        </HeroCallToAction>
        <HeroImage className="hero_image">
          <img src={x} alt="" />
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  )
}
