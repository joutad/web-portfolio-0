import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Center,
  useColorMode
} from '@chakra-ui/react'
import { ChevronRightIcon, ViewIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin, IoDisc } from 'react-icons/io5'
import TableContents from '../components/table'
import Image from 'next/image'
import { Skill, Skills } from '../components/skill'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

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
        fontFamily={'Manrope'}
      >
        Hello, I&apos;m a Computer Science student based in Guelph!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Joudat Haroon
          </Heading>
          <p style={{fontFamily: 'Manrope'}}>CS @ UofG</p>
          <p style={{fontFamily: 'Manrope'}}>Backend Developer @ Hackathons NA</p>
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
              src="/images/profile.jpeg"
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
          About Me
        </Heading>
        <Paragraph style={{fontFamily:"Manrope"}}>
          I&apos;m a computer science student based in Guelph with a
          passion for full-stack development. Recently I&apos;ve been making
          an effort to be more active on <Link href='https://github.com/joutad'>GitHub</Link>.
          At the moment, I&apos;m trying to incorporate Machine Learning into my projects.
          Currently, I&apos;m on a study term at my University, where I&apos;m learning parallel computing and network skills,
          as well as a few other electives. I&apos;m also simultaneously working as a Backend Developer at the newly
          established <Link href='https://hackathonscanada.com/'>Hackathons NA</Link>.
        </Paragraph>
        <Center fontFamily={'Manrope'}>
          <Box align="center" mx={4} my={4} style={{display: 'inline'}}>
            <Button
              as={NextLink}
              href="/2025_01_11_Resume.pdf"
              scroll={false}
              rightIcon={<ViewIcon />}
              colorScheme={useColorModeValue('pink', 'yellow')}
            >
              Resume
            </Button>
          </Box>
          <Box align="center" mx={4} my={4} style={{display: 'inline'}}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme={useColorModeValue('pink', 'yellow')}
            >
              My portfolio
            </Button>
          </Box>
        </Center>
      </Section><br />

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        {/* <Table>
          <tbody className='bioTable'>
            <tr>
              <td>Sept 2020
                <Image src={Guelph} alt="bkitty" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
              </td>
              <td>Started studies at the University of Guelph.</td>
            </tr>
            <tr>
              <td>May 2021
                <Image src={bKitty} alt="bkitty" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem'}}/><br/><br/>
              </td>
              <td>Participated in BCompathon, my first hackathon. I was unable to make a submission as I had to leave during the hackathon. I still decided to work on the <Link href="https://github.com/joutad/DiscordSlotMachine">project</Link> on my own time after the hackathon ended.</td>
            </tr>
            <tr>
              <td>Jan 2022</td>
              <td>Participated in Hack the Job 2022, my first <Link href="https://github.com/joutad/2d-golf-game">completed</Link> hackathon.</td>
            </tr>
            <tr>
              <td>July 2022
                <Image src={Condoworks} alt='Condoworks' width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem'}}/><br />
              </td>
              <td>Worked at <Link href='https://www.condoworks.co/'>Condoworks</Link> as a Junior Software Developer. Read more about it on my <Link href={'/blogs/condoworksreport'}>blog!</Link></td>
            </tr>
            <tr>
              <td>May 2023
                <Image src={GryphHacks} alt="AWS Summit" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem'}}/><br/>
              </td>
              <td>Participated in <Link href='https://gryphhacks.com/home'>GryphHacks 2023</Link> and <Link href='https://gryphhacks-2023.devpost.com/project-gallery'>won</Link>.</td>
            </tr>
            <tr>
              <td>June 2023
                <Image src={ETHGlobal} alt="ETH Global" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem'}}/><br/><br/>
                <Image src={AWSSummit} alt="AWS Summit" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem'}}/><br/><br/>
                <Image src={CollisionConference} alt="Collision Conference" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem'}}/><br/><br/>
              </td>
              <td>Attended <Link href='https://aws.amazon.com/events/summits/toronto/'>AWS Summit 2023</Link>, participated in the <Link href='https://ethglobal.com/events/waterloo2023'>ETHGlobal Waterloo</Link> hackathon and volunteered at <Link href='https://collisionconf.com/'>Collision Conference</Link>.</td>
            </tr>
            <tr>
              <td>July 2023
              <Image src={PocketGamerConnects} alt="Collision Conference" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
              </td>
              <td>Volunteered for <Link href='https://www.pgconnects.com/toronto/'>Pocket Gamer Connects</Link>.</td>
            </tr>
            <tr>
              <td>Aug 2023
              <Image src={IgnitionHacks} alt="Collision Conference" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
              </td>
              <td>Participated in <Link href='https://www.ignitionhacks.org/'>Ignition Hacks</Link>.</td>
            </tr>
            <tr>
              <td>Sept 2023
              <Image src={HackTheNorth} alt="Collision Conference" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
              </td>
              <td>Volunteered for <Link href='https://hackthenorth.com/'>Hack The North</Link>.</td>
            </tr>
            <tr>
              <td>Oct 2023
              <Image src={HackTheValley8} alt="Collision Conference" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
              </td>
              <td>Participated in <Link href='https://hack-the-valley-8.devpost.com/'>Hack The Valley 8</Link> and won <Link href='https://devpost.com/software/heckler-ai'>First Place</Link>!</td>
            </tr>
            <tr>
              <td>Jan 2024
              <Image src={Camis} alt="Collision Conference" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
              </td>
              <td>Started co-op at <Link href="https://www.camis.com/">Camis</Link> as a Software Developer!</td>
            </tr>
          </tbody>
        </Table> */}
      <TableContents />
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Skills>
          <Skill><img src={'https://www.computerhope.com/jargon/j/javascript.png'}/></Skill>
          <Skill><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"/></Skill>
          <Skill><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/380px-C_Programming_Language.svg.png?20201031132917" alt=""/></Skill>
          <Skill><img src="https://assets.zabbix.com/img/brands/java.svg" alt=""/></Skill>
          <Skill><img src="https://miro.medium.com/v2/resize:fit:300/1*A_Hg7NPIoARg0RmdsVapqg.png" alt=""/></Skill>
          <Skill><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png" alt="" /></Skill>
          <Skill>{useColorMode().colorMode === 'dark' ? <img src="https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png" alt=""/> : <img src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png" alt=""/>}</Skill>
          <Skill><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt=""/></Skill>
          <Skill><img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt=""/></Skill>
          <Skill><img src="https://avatars.githubusercontent.com/u/15658638?s=280&v=4" alt="" /></Skill>
          <Skill>
            {
              useColorMode().colorMode === 'dark' ? 
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenCV_Logo_with_text_svg_version.svg/800px-OpenCV_Logo_with_text_svg_version.svg.png" alt="" style={{backgroundColor: 'white'}}/> :
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenCV_Logo_with_text_svg_version.svg/800px-OpenCV_Logo_with_text_svg_version.svg.png" alt="" />
            }
          </Skill>
          <Skill><img src="https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.svg" alt=""/></Skill>
          <Skill>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" width={64} height={64}/>
              <Center style={{fontWeight: 'bold'}}>HTML</Center>
            </div>
          </Skill>
          <Skill>
            <div>
              <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt=""/>
              <Center style={{fontWeight: 'bold'}}>CSS</Center>
            </div>
          </Skill>
          <Skill>
            <div>
              <img src="https://assets.codepen.io/5409376/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1607020963&width=512" alt=""/>
              <Center style={{fontWeight: 'bold'}}>MediaPipe</Center>
            </div>
          </Skill>
          <Skill>
            <img src="https://avatars.githubusercontent.com/u/6906516?s=200&v=4" alt=""/>
          </Skill>
          <Skill>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-jquery-8-1175153.png" alt="" />
          </Skill>
          <Skill>
            <div>
              <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="" />
              <Center style={{fontWeight: 'bold'}}>mongoDB</Center>
            </div>
          </Skill>
          <Skill>
            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
          </Skill>
          <Skill>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" alt="" />
          </Skill>
          <Skill>
            <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png" alt="" />
          </Skill>
        </Skills>

      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph style={{fontFamily: 'Manrope'}}>
          Programming, Winter, Music, Events, Hackathons, TV, Leetcode, Exploring cities, Fashion, and Making an effort to reduce my carbon footprint.
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
                colorScheme={useColorModeValue('pink', 'yellow')}
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
                colorScheme={useColorModeValue('pink', 'yellow')}
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
                colorScheme={useColorModeValue('pink', 'yellow')}
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
