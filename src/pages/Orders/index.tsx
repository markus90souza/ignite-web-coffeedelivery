import { AddressForm } from './components/Forms/AddressForm'
import { OrdersCoffee } from './components/OrdersCoffee'
import { Container } from './styles'

export function Orders() {
  return (
    <Container className="container">
      <AddressForm />
      <OrdersCoffee />
    </Container>
  )
}
