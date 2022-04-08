import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ContextProvider } from '../context'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
      <Web3ContextProvider>
        <Component {...pageProps} />
      </Web3ContextProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
