import { english } from "@/ui/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#171717" />
      </Head>
      <body data-theme="light" className={`${english.className} antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
