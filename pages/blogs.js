import { Container, Heading, SimpleGrid, useColorMode } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Text } from '@chakra-ui/react'
import Image from 'next/image'
import thumbAISign from '../public/images/works/ai_sign.png'
import Link from 'next/link'

const imgStyle = {
  borderRadius: '12px',
  padding: '2rem',
  backgroundColor: 'white',
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
            <Text mt={2} style={{textAlign: 'center'}}>Co-op Work Term Report</Text>
            <Text fontSize={14} style={{textAlign: 'center'}}>
              CondoWorks Summer - Fall Internship 2022
            </Text>
          </Link>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Blogs
export { getServerSideProps } from '../components/chakra'
