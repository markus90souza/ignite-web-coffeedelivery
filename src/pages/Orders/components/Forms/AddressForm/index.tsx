import { Input } from '@/components/Inputs/Input'
import { Title } from '@/components/Typografy'
import { CreditCard, CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { PaymentMethod } from '../../PaymentMethod'
import { SectionTitle } from '../../SectionTitle'
import { Box, Container, FormContainer, PaymentMethodContainer } from './styles'

export function AddressForm() {
  const { colors } = useTheme()
  return (
    <Container>
      <Title size="xs" color="subtitle">
        Complete seu pedido
      </Title>

      <Box>
        <SectionTitle
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />

        <FormContainer>
          <Input
            type="number"
            className="zipcode"
            name="zipcode"
            placeholder="CEP"
          />

          <Input
            type="text"
            className="street"
            name="street"
            placeholder="Rua"
          />

          <Input
            type="number"
            className="number"
            name="number"
            placeholder="Numero"
          />

          <Input
            type="text"
            className="complement"
            name="complement"
            placeholder="Complemento"
          />

          <Input
            type="text"
            className="neighborhood"
            name="neighborhood"
            placeholder="Bairo"
          />

          <Input
            type="text"
            className="city"
            name="city"
            placeholder="Cidade"
          />

          <Input
            type="text"
            className="state_uf"
            name="state_uf"
            placeholder="UF"
          />
        </FormContainer>
      </Box>

      <Box>
        <SectionTitle
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />

        <PaymentMethodContainer>
          <PaymentMethod
            icon={<CreditCard size={16} color={colors['brand-purple']} />}
            title="Cartão de crédito"
          />

          <PaymentMethod
            icon={<CreditCard size={16} color={colors['brand-purple']} />}
            title="cartão de débito"
          />

          <PaymentMethod
            icon={<CreditCard size={16} color={colors['brand-purple']} />}
            title="dinheiro"
          />
        </PaymentMethodContainer>
      </Box>
    </Container>
  )
}
