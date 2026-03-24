import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { GoogleTagManager } from '@next/third-parties/google'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head} Link={Link}>
      {/* GTM is placed here so it loads on every page */}
      <GoogleTagManager gtmId="GTM-XYZ" />
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
