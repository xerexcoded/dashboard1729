import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Dashboard from './dashboard'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      
      <Dashboard/>
    </ChakraProvider>
  )
}

export default MyApp
