import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Manrope&family=Work+Sans&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
          {/* <br/><br/> */}
          <a href='https://www.craftz.dog/' target='_blank' rel="noreferrer" style={{position: 'relative', top: '42vh'}}>Based on Takuya&apos;s website</a>
          {/* This website is built based on the <a href='https://www.craftz.dog/' target='_blank'>Takuya Matsuyama's website</a> */}
        </body>
      </Html>
    )
  }
}
