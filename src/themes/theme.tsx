import { extendTheme } from "@chakra-ui/react"

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

const theme = extendTheme({
  fonts: {
    heading: `'Heading Font', sans-serif`,
    numbers: `'Numbers Font', sans-serif`,
    body: `'Body Font', sans-serif`
  },
  colors: {
  },
})

export default theme
