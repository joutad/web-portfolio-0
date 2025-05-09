import Image from 'next/image'
import Link from 'next/link'
import thumbAISign from '../public/images/works/ai_sign.png'
import thumbMolecules from '../public/images/works/h2O.png'
import thumbSlotMachineDiscordBot from '../public/images/works/slot_machine_discord_bot.png'
import thumbGolfGame from '../public/images/works/2d_golf_game.png'
import thumbSnakeGame from '../public/images/works/snakegame.png'
import thumbTackApp from '../public/images/works/tack-app.png'
import thumbWorkoutBuddy from '../public/images/works/dumbbell.png'
import thumbHecklerAI from '../public/images/works/HecklerAI.png'
import thumbLilLearners from '../public/images/works/lil-learners.png'
import { SimpleGrid, Text } from '@chakra-ui/react'
import Section from '../components/section'
import React from 'react';

{/* <Section>
            <Link href={`https://github.com/angeladev333/heckler.ai`}>
              <Image
                src={thumbHecklerAI}
                alt='thumbnail for Heckler AI'
                placeholder="blur"
                className='grid-item-thumbnail'
                loading="lazy"
                style={{backgroundColor: 'white'}}
              />
              <Text mt={2} style={{textAlign: 'center'}} fontFamily={'monospace'} fontSize={'1rem'}>Heckler AI</Text>
              <Text fontSize={14} style={{textAlign: 'center'}} fontFamily={'Manrope'}>
                Elevate Your Presence, Perfect Your Pitch. Tracks hand and arm movements, decodes facial cues from smiles to disinterest, and assesses your posture. Provides actionable feedback, helping you refine your presentation skills.
              </Text>
            </Link>
          </Section>
          <Section>
            <Link href={`https://github.com/krishnacheemalapati/GryphHacks23-Submission`}>
              <Image
                src={thumbAISign}
                alt='thumbnail for AI Sign'
                placeholder="blur"
                className='grid-item-thumbnail'
                loading="lazy"
              />
              <Text mt={2} style={{textAlign: 'center'}} fontFamily={'monospace'} fontSize={'1rem'}>AI Sign</Text>
              <Text fontSize={14} style={{textAlign: 'center'}} fontFamily={'Manrope'}>
                An effective platform for individuals to quickly understand and communicate 
                in the American Sign Language (ASL) with individuals affected with a vocal or 
                auditory impairment.
              </Text>
            </Link>
          </Section>
          <Section>
            <Link href={`https://github.com/joutad/lil-learners/`}>
              <Image
                src={thumbLilLearners}
                alt='thumbnail for Lil&apos; Learners'
                placeholder="blur"
                className='grid-item-thumbnail'
                loading="lazy"
              />
              <Text mt={2} style={{textAlign: 'center'}} fontFamily={'monospace'} fontSize={'1rem'}>Lil&apos; Learners</Text>
              <Text fontSize={14} style={{textAlign: 'center'}} fontFamily={'Manrope'}>
              A platform that empowers schoolchildren to personalize their learning
              journey by decorating their virtual island and earning points through
              educational games.
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
              <Text mt={2} style={{textAlign: 'center'}} fontFamily={'monospace'} fontSize={'1rem'}>Slot Machine - Discord Bot</Text>
              <Text fontSize={14} style={{textAlign: 'center'}} fontFamily={'Manrope'}>
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
              <Text mt={2} style={{textAlign: 'center'}} fontFamily={'monospace'} fontSize={'1rem'}>2D Golf Game</Text>
              <Text fontSize={14} style={{textAlign: 'center'}} fontFamily={'Manrope'}>
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
              <Text mt={2} style={{textAlign: 'center'}} fontFamily={'monospace'} fontSize={'1rem'}>Snake Game</Text>
              <Text fontSize={14} style={{textAlign: 'center'}} fontFamily={'Manrope'}>
                A classic game brought back to life, on your desktop!
              </Text>
            </Link>
          </Section>
          <Section delay={0.1}>
            <Link href={`https://github.com/joutad/Tack-App`}>
              <Center>
                <Image
                    src={thumbTackApp}
                    alt='thumbnail for Tack App'
                    placeholder='blur'
                    className='grid-item-thumbnail'
                    loading='lazy'
                    height={'150'}
                  />
              </Center>
              <Text mt={2} style={{textAlign: 'center'}} fontFamily={'monospace'} fontSize={'1rem'}>Tack App</Text>
              <Text fontSize={14} style={{textAlign: 'center'}} fontFamily={'Manrope'}>
                Keep track of household items! Object detection now works with React-Native frontend, solution hasn&apos;t been pushed yet!
              </Text>
            </Link>
          </Section>
          <Section delay={0.1}>
            <Link href={`https://github.com/joutad/Tack-App`}>
              <Center>
                <Image
                    src={thumbWorkoutBuddy}
                    alt='thumbnail for Workout Buddy'
                    placeholder='blur'
                    className='grid-item-thumbnail'
                    loading='lazy'
                    height={'150'}
                  />
              </Center>
              <Text mt={2} style={{textAlign: 'center'}} fontFamily={'monospace'} fontSize={'1rem'}>Workout Buddy</Text>
              <Text fontSize={14} style={{textAlign: 'center'}} fontFamily={'Manrope'}>
                Your very own time capsule for workouts!
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
              <Text mt={2} style={{textAlign: 'center'}} fontFamily={'monospace'} fontSize={'1rem'}>Molecules</Text>
              <Text fontSize={14} style={{textAlign: 'center'}} fontFamily={'Manrope'}>
                A web app that parses SDF files, 
                stores them as molecules in a database, and generates and 
                displays an SVG image representing the molecule.
              </Text>
            </Link>
          </Section>
          */}

const WorksTableContents = () => {

    type Project = {
        title: String,
        href: string;
        image: {
            src: string; // if you're using `next/image`
            alt: string;
        };
        description: string;
    };

    const projects : Project[] = [
        {
            title: 'Molecules',
            href: 'https://github.com/x/y',
            image: {
              src: thumbMolecules,
              alt: 'thumbnail for Molecules project',
            },
            description: `A web app that parses SDF files, 
                          stores them as molecules in a database, and generates and 
                          displays an SVG image representing the molecule.`,
        },
    ];

    return (
        <SimpleGrid>
            {
                projects.map((project, index) => {
                    <Section children={undefined}>
                        <Link href={project.href} key={index}>
                            <Image
                                src={project.image.src}
                                alt={project.image.alt}
                                placeholder="blur"
                                className="grid-item-thumbnail"
                                loading="lazy"
                            />
                            <Text mt={2} style={{ textAlign: 'center' }} fontFamily="monospace" fontSize="1rem">
                                {project.title}
                            </Text>
                            <Text fontSize={14} style={{ textAlign: 'center' }} fontFamily="Manrope">
                                {project.description}
                            </Text>
                        </Link>
                    </Section>
                })
            }
        </SimpleGrid>
    );
}

export default WorksTableContents;

// export const Table = styled.table`

// `;