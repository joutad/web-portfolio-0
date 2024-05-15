//////////////////////////////////////////
//TODO: Write-up before end of May 15th
//////////////////////////////////////////
//////////////////////////////////////////
//TODO: Add images!
//////////////////////////////////////////
import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Center,
    useColorModeValue
  } from '@chakra-ui/react'
  import { Title, Meta } from '../../components/blog'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const h5Style = {
    fontFamily: 'Lora',
    fontStyle: 'oblique',
  }
  const h5StyleLight = {
    ...h5Style,
    color: '#274685',
  };
  const h5StyleDark = {
    ...h5Style,
    color: '#e9e5c0',
  };

  const Blog = () => (
    <Layout title="Co-op Work Term Report">
      <Container>
        <Title>
          Co-op Work Term Report <Badge>Winter 2024</Badge>
        </Title>
        <List ml={2} my={8}>
          <ListItem>
            <Meta>Stack</Meta>
            <span style={{fontFamily: 'Manrope'}}>C#, .NET, WPF, TypeScript, Angular, Git, Jira, Agile</span>
          </ListItem>
        </List>
        <Heading as='h4'>Intro</Heading>
        <br/>
        <P>
            Hello!
        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Information about the Employer</Heading>
        <br/>
        <P>
          Camis
        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Goals</Heading>
        <br/>
        <Heading as='h5' fontSize={18} style={useColorModeValue(h5StyleLight, h5StyleDark)}>G1.</Heading>
        <br/>
        <P>
          P1
        </P><br/><br/>
        <Heading as='h5' fontSize={18} style={useColorModeValue(h5StyleLight, h5StyleDark)}>G2.</Heading>
        <br/>
        <P>
          P2
        </P><br/><br/>
        <Heading as='h5' fontSize={18} style={useColorModeValue(h5StyleLight, h5StyleDark)}>G3.</Heading>
        <br/>
        <P>
          P3
        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Job Description</Heading>
        <br/>
        <P>
          P4
        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Conclusion</Heading>
        <br/>
        <P>
          P5
        </P><br/><br/>
  
        <Center>
          <Link href={'http://www.camis.com/'} fontFamily={'Manrope'}>Company Website</Link>
        </Center><br/>
        <Center>
          <Link href={'https://linkedin.com/company/camis-inc-/mycompany/'} fontFamily={'Manrope'}>Company LinkedIn</Link>
        </Center><br/>
      </Container>
    </Layout>
  )
  
  export default Blog
  export { getServerSideProps } from '../../components/chakra'
  