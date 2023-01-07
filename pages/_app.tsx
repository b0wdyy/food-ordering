import type { AppProps } from 'next/app'
import '@fontsource/poppins'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Head from 'next/head'
import TheHeader from '@/components/common/the-header'
import { UserProvider } from 'lib/context/user-context'

const theme = extendTheme({
    colors: {
        yellow: {
            '50': '#FFF8E5',
            '100': '#FFEAB8',
            '200': '#FFDD8A',
            '300': '#FFCF5C',
            '400': '#FFC22E',
            '500': '#FFB400',
            '600': '#CC9000',
            '700': '#996C00',
            '800': '#664800',
            '900': '#332400',
        },
    },
    fonts: {
        heading: `'Poppins', sans-serif`,
        body: `'Poppins', sans-serif`,
    },
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Food Ordering</title>
                <link rel="icon" href="/assets/svg/avatars/default.svg" />
            </Head>

            <UserProvider>
                <TheHeader />

                <Component {...pageProps} />
            </UserProvider>
        </ChakraProvider>
    )
}
