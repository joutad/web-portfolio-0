import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
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
