import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { GoogleTagManager } from '@next/third-parties/google'

export default function AcrossAllPages({ Component, pageProps }: AppProps) {
    return (
        <>
            <DataProvider>
                <Component {...pageProps} />
            </DataProvider>
            <GoogleTagManager gtmId="GTM-MPZZC7XZ" />
        </>
    );
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head} Link={Link}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
