import 'styled-components'
import { theme } from './../themes/index'

type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
