import Head from 'next/head'
import dynamic from 'next/dynamic'
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


        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>


        <title>Joudat - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <br />
        {/* <br /> */}
        <Center h='100px' color='white'>
          <Image src={HeaderImage} alt="ETH Global" width={96} height={96} style={{position: 'relative', }}/>
        </Center>
        <br />
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
