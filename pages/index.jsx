import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  //SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { Table } from '../components/table'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin, IoDisc } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const colour = 'yellow';

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Computer Science student based in Guelph!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Joudat Haroon
          </Heading>
          <p>Computer Science student ( Fullstack / Machine Learning )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/IMG_7527.JPG"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I'm a full-stack developer based in Guelph with a
          passion for fullstack development. At the moment, I'm learning about Blockchain
          with Solidity and Machine Learning. Currently, I am seeking internships and co-op
          opportunities to further enhance my skills and contribute to real-world projects.{' '}
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme={colour}
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Table>
          <tr>
            <td>Sept 2020</td>
            <td>Started studies at the University of Guelph.</td>
          </tr><br/>
          <tr>
            <td>May 2021</td>
            <td>Participated in BCompathon, my first hackathon. I was unable to make a submission as I had to leave during the hackathon. I still decided to work on the <Link href="https://github.com/joutad/DiscordSlotMachine">project</Link> on my own time after the hackathon ended.</td>
          </tr><br/>
          <tr>
            <td>Jan 2022</td>
            <td>Participated in Hack the Job 2022, my first <Link href="https://github.com/joutad/2d-golf-game">completed</Link> hackathon.</td>
          </tr><br/>
          <tr>
            <td>July 2022</td>
            <td>Worked at <Link href='https://www.condoworks.co/'>Condoworks</Link> as a Junior Software Developer.</td>
          </tr><br/>
          <tr>
            <td>May 2023</td>
            <td>Participated in <Link href='https://gryphhacks.com/home'>GryphHacks 2023</Link> and <Link href='https://gryphhacks-2023.devpost.com/project-gallery'>won</Link>.</td>
          </tr><br/>
          <tr>
            <td>June 2023</td>
            <td>Attended <Link href='https://aws.amazon.com/events/summits/toronto/'>AWS Summit 2023</Link>, participated in the <Link href='https://ethglobal.com/events/waterloo2023'>ETHGlobal Waterloo</Link> hackathon and volunteered at <Link href='https://collisionconf.com/'>Collision Conference</Link>.</td>
          </tr><br/>
          <tr>
            <td>July 2023</td>
            <td>Volunteered for <Link href='https://www.pgconnects.com/toronto/'>Pocket Gamer Connects</Link>.</td>
          </tr><br/>
          <tr>
            <td>August 2023</td>
            <td>Participated in OneHacks III. Results TBA.<br />
            Participated in TechTogether. Results TBA.</td>
          </tr>
        </Table>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Programming, Music, Events, Hackathons, TV, Leetcode, Exploring cities, Making an effort to reduce my carbon footprint.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/joutad" target="_blank">
              <Button
                variant="ghost"
                colorScheme={colour}
                leftIcon={<IoLogoGithub />}
              >
                @joutad
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/joudat-haroon/" target="_blank">
              <Button
                variant="ghost"
                colorScheme={colour}
                leftIcon={<IoLogoLinkedin />}
              >
                @Joudat Haroon
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://devpost.com/jharoon" target="_blank">
              <Button
                variant="ghost"
                colorScheme={colour}
                leftIcon={<IoDisc />}
              >
                @jharoon
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
