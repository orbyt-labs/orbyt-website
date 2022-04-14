import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ContextProvider } from '../context'
import { ChakraProvider } from '@chakra-ui/react'
import { Navigation } from '../components/navigation'
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
      <Web3ContextProvider>
        <>
          <Navigation />
          <Component {...pageProps} />
        </>
      </Web3ContextProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
