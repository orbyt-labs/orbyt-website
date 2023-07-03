import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Navigation } from '../components/navigation'
import { Footer } from '../components'
import theme from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  ) 
}

export default MyApp
