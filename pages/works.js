import { Center, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Text } from '@chakra-ui/react'
import Image from 'next/image'
import thumbAISign from '../public/images/works/ai_sign.png'
import thumbMolecules from '../public/images/works/h2O.png'
import thumbSlotMachineDiscordBot from '../public/images/works/slot_machine_discord_bot.png'
import thumbGolfGame from '../public/images/works/2d_golf_game.png'
import thumbSnakeGame from '../public/images/works/snakegame.png'
import Link from 'next/link'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Link href={`https://github.com/krishnacheemalapati/GryphHacks23-Submission`}>
            <Image
              src={thumbAISign}
              alt='thumbnail for AI Sign'
              placeholder="blur"
              className='grid-item-thumbnail'
              loading="lazy"
            />
            <Text mt={2} style={{textAlign: 'center'}}>AI Sign</Text>
            <Text fontSize={14} style={{textAlign: 'center'}}>
              An effective platform for individuals to quickly understand and communicate 
              in the American Sign Language (ASL) with individuals affected with a vocal or 
              auditory impairment.
            </Text>
          </Link>
        </Section>
        <Section>
          <Link href={`https://github.com/joutad/molecules`}>
            <Image
              src={thumbMolecules}
              alt='thumbnail for Molecules project'
              placeholder="blur"
              className='grid-item-thumbnail'
              loading="lazy"
            />
            <Text mt={2} style={{textAlign: 'center'}}>Molecules</Text>
            <Text fontSize={14} style={{textAlign: 'center'}}>
              A web app that parses SDF files, 
              stores them as molecules in a database, and generates and 
              displays an SVG image representing the molecule.
            </Text>
          </Link>
        </Section>

        <Section delay={0.1}>
          <Link href={`https://github.com/joutad/DiscordSlotMachine`}>
           <Image
              src={thumbSlotMachineDiscordBot}
              alt='thumbnail for Slot Machine Discord Bot'
              placeholder='blur'
              className='grid-item-thumbnail'
              loading='lazy'
            />
            <Text mt={2} style={{textAlign: 'center'}}>Slot Machine - Discord Bot</Text>
            <Text fontSize={14} style={{textAlign: 'center'}}>
              A discord bot that allows members of a server to play slots!
              Integration with a currency system still needed...
            </Text>
          </Link>
        </Section>
        <Section delay={0.1}>
          <Link href={`https://github.com/joutad/2d-golf-game`}>
           <Image
              src={thumbGolfGame}
              alt='thumbnail for 2D Golf Game project'
              placeholder='blur'
              className='grid-item-thumbnail'
              loading='lazy'
            />
            <Text mt={2} style={{textAlign: 'center'}}>2D Golf Game</Text>
            <Text fontSize={14} style={{textAlign: 'center'}}>
              A browser game with rudimentary physics enabled, allowing players to shoot golf balls. Built entirely in JavaScript.
            </Text>
          </Link>
        </Section>
        <Section delay={0.1}>
          <Link href={`https://github.com/joutad/Snake-game-libGDX`}>
            <Center>
              <Image
                  src={thumbSnakeGame}
                  alt='thumbnail for Snake Game project'
                  placeholder='blur'
                  className='grid-item-thumbnail'
                  loading='lazy'
                />
            </Center>
            <Text mt={2} style={{textAlign: 'center'}}>Snake Game</Text>
            <Text fontSize={14} style={{textAlign: 'center'}}>
              A classic game brought back to life, on your desktop!
            </Text>
          </Link>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
