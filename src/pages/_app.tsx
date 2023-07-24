import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../themes/theme'
import Fonts from '@/themes/fonts';
import Header from '@/Components/Header';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
