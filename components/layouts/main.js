import Head from 'next/head'
import NavBar from '../navbar'
import Image from 'next/image'
import HeaderImage from '../../public/images/contents/Computing_In_Morning.png'
import { Box, Center, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Joudat's homepage" />
        <meta name="author" content="Joudat Haroon" />
        <meta name="author" content="joutad" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Joudat Haroon" />
        <meta name="og:title" content="Joudat Haroon" />
        <title>Joudat - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <br />
        {/* <br /> */}
        <Center h='100px' color='white'>
          <Image src={HeaderImage} alt="Header Image" width={96} height={96} style={{position: 'relative', }}/>
        </Center>
        <br />
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
