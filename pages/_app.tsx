import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ContextProvider } from '../context'
import { ChakraProvider } from '@chakra-ui/react'
import { Navigation } from '../components/navigation'
import { Footer } from '../components'
import theme from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
      <Web3ContextProvider>
        <>
          <Navigation />
          <Component {...pageProps} />
          <Footer/>
        </>
      </Web3ContextProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
