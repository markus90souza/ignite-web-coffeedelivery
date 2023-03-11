import { Text, Title } from '../../../../../components/Typografy'
import { FormatMoney } from '../../../../../utils/formatMoney'
import {
  Container,
  Image,
  Tags,
  Description,
  Footer,
  FooterHeader,
  Name,
} from './styles'

export type CoffeeData = {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeCardProps {
  data: CoffeeData
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const { name, price, description, id, photo, tags } = data
  return (
    <Container>
      <Image src={`/coffees/${photo}`} alt={name} />
      <Tags>
        {tags.map((tag) => (
          <span key={`${tag}-${id}`}>{tag}</span>
        ))}
      </Tags>
      <Name color="subtitle" size="s" weight={700}>
        {name}
      </Name>
      <Description color="label" size="s">
        {description}
      </Description>
      <Footer>
        <FooterHeader>
          <Text size="s">R$</Text>
          <Title size="m" color="title" as={'strong'}>
            {FormatMoney(price)}
          </Title>
        </FooterHeader>
      </Footer>
    </Container>
  )
}
