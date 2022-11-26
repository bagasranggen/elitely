import "@fontsource/poppins";
import '../styles/scss/bootstrap.scss'
import '../styles/scss/main.scss'

import type {AppProps} from 'next/app';

import Layout from "../components/layout/Layout";

export default function App({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
