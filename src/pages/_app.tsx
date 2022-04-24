import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { initializeApollo } from '@/libs/apolloClient'

function MyApp({ Component, pageProps }: AppProps) {
  const client = initializeApollo()
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
