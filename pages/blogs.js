import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import thumbCamisBanner from '../public/images/blogs/Camis-logo-768x194.png'

const imgStyle = {
  borderRadius: '12px',
  padding: '2rem',
  backgroundColor: 'white',
  height: '128px',
  width: '350px',
}

const Blogs = () => (
  <Layout title="Blogs">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blogs
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Link href={'/blogs/condoworksreport'}>
            <img src="https://uploads-ssl.webflow.com/6073129772cc435eb786ae05/607314c0bc149d9a5a8bf442_cw_logo.png" alt="" style={imgStyle}/> 
            <Text mt={2} style={{textAlign: 'center'}} fontFamily={'Manrope'}>CondoWorks Inc.</Text>
            <Text fontSize={14} style={{textAlign: 'center'}}>
              Summer && Fall Internship 2022
            </Text>
          </Link>
        </Section>
        <Section>
          <Link href={'/blogs/camisreport0'}>
            <Image src={thumbCamisBanner} style={imgStyle} />
            <Text mt={2} style={{textAlign: 'center'}} fontFamily={'Manrope'}>Camis Inc.</Text>
            <Text fontSize={14} style={{textAlign: 'center'}}>
              Winter Co-op 2024
            </Text>
          </Link>
        </Section>
        <Section>
          <Link href={'/blogs/camisreport1'}>
            <Image src={thumbCamisBanner} style={imgStyle} />
            <Text mt={2} style={{textAlign: 'center'}} fontFamily={'Manrope'}>Camis Inc.</Text>
            <Text fontSize={14} style={{textAlign: 'center'}}>
              Summer Co-op 2024
            </Text>
          </Link>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Blogs
export { getServerSideProps } from '../components/chakra'
