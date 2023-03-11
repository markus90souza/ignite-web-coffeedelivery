import { ThemeProvider } from 'styled-components'
import { WebRoutes } from './routes'
import { ResetCSS } from './styles/reset'
import { theme } from './themes'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <WebRoutes />
    </ThemeProvider>
  )
}
