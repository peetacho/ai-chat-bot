import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
    brand: {
      50: "#70566D",
      100: "#70566D",
      200: "#70566D",
      300: "#70566D",
      400: "#70566D",
      500: "#70566D",
      600: "#70566D",
      700: "#70566D",
      800: "#70566D",
      900: "#70566D",
    }
}

const styles = {
    global: props => ({
      body: {
        bg: mode('gray.50', 'inherit')(props)
      }
    })
  }

const theme = extendTheme({ config, styles, colors })

export default theme