import bKitty from '../public/images/works/Bcomp_Junecat.png'
import ETHGlobal from '../public/images/links/ethglobal.jpg'
import AWSSummit from '../public/images/links/AWSSummit.jpg'
import CollisionConference from '../public/images/links/CollisionConference.jpg'
import GryphHacks from '../public/images/works/gryphhacks.webp'
import PocketGamerConnects from '../public/images/links/PGC-TORONTO-23-Logo.png'
import IgnitionHacks from '../public/images/links/IgnitionHacks2023.jpeg'
import HackTheNorth from '../public/images/links/HackTheNorth.jpg'
import HackTheValley8 from '../public/images/links/HackTheValley8.png'
import DeerHacks3 from '../public/images/links/deerhacks2024.png'
import Condoworks from '../public/images/contents/condoworks.jpg'
import Camis from '../public/images/contents/camis_inc_logo.jpeg'
import Guelph from '../public/images/contents/guelph.png'
import GenAIGenesis from "../public/images/links/genai_genesis_2024_logo.jpeg"
import GDSCGuelph from "../public/images/links/gdscguelph_logo.jpeg"
import HawkHacks from "../public/images/links/hawkhacks_logo.jpeg"
import HackThe6ix from "../public/images/links/hackthe6ix_logo.png"
import HackathonsNA from "../public/images/links/hackathonsna.png"
import { Link } from '@chakra-ui/react'
import Image from 'next/image'
// import TableContents from '../components/table'
import styled from '@emotion/styled'

import React, { useState } from 'react'

const TableContents = () => {

  const [yearBio, setYearBio] = useState("2025")
  const years = [2020, 2021, 2022, 2023, 2024, 2025]
  
  return (
    <div>
       <div style={{margin: '0 auto', textAlign: 'center'}}>
        {years.map((year, index) => (
          <div key={index} style={{display: 'inline', marginInline: '1rem'}}>
            <button style={{display: 'inline'}} onClick={() => {setYearBio(year.toString()); console.log(year.toString())}}>{year}</button>
          </div>
        ))}
      </div><br /><br />
      <Table>
        <tbody className='bioTable'>
          {yearBio === '2020' ?
            (<tr>
              <td>Sept 2020
                <Image src={Guelph} alt="University of Guelph" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
              </td>
              <td>Started studies at the University of Guelph.</td>
            </tr>) : ''
          }
          {yearBio === '2021' ?
            (
              <tr>
                <td>May 2021
                  <Image src={bKitty} alt="bkitty" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem'}}/><br/><br/>
                </td>
                <td>Participated in BCompathon, my first hackathon. I was unable to make a submission as I had to leave during the hackathon. I still decided to work on the <Link href="https://github.com/joutad/DiscordSlotMachine">project</Link> on my own time after the hackathon ended.</td>
              </tr>
            ) : ''
          }
          {yearBio === '2022' ?
            (
              <tr>
                <td>Jan 2022</td>
                <td>Participated in Hack the Job 2022, my first <Link href="https://github.com/joutad/2d-golf-game">completed</Link> hackathon.</td>
              </tr>
            ) : ''
          }
          {yearBio === '2022' ?
            (
              <tr>
                <td>July 2022
                  <Image src={Condoworks} alt='Condoworks' width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem'}}/><br />
                </td>
                <td>Worked at <Link href='https://www.condoworks.co/'>Condoworks</Link> as a Junior Software Developer. Read more about it on my <Link href={'/blogs/condoworksreport'}>blog!</Link></td>
              </tr>
            ) : ''
          }
          {yearBio === '2023' ?
            (
              <>
                <tr>
                  <td>May 2023
                    <Image src={GryphHacks} alt="AWS Summit" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem'}}/><br/>
                  </td>
                  <td>Participated in <Link href='https://gryphhacks.com/home'>GryphHacks 2023</Link> and <Link href='https://devpost.com/software/ai-sign'>won</Link>!</td>
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
                  <Image src={PocketGamerConnects} alt="Pocket Gamer Connects" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
                  </td>
                  <td>Volunteered for <Link href='https://www.pgconnects.com/toronto/'>Pocket Gamer Connects</Link>.</td>
                </tr>
                <tr>
                  <td>Aug 2023
                  <Image src={IgnitionHacks} alt="Ignition Hacks" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
                  </td>
                  <td>Participated in <Link href='https://www.ignitionhacks.org/'>Ignition Hacks</Link>.</td>
                </tr>
                <tr>
                  <td>Sept 2023
                  <Image src={HackTheNorth} alt="Hack The North" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
                  </td>
                  <td>Volunteered for <Link href='https://hackthenorth.com/'>Hack The North</Link>.</td>
                </tr>
                <tr>
                  <td>Oct 2023
                  <Image src={HackTheValley8} alt="Hack The Valley" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
                  </td>
                  <td>Participated in <Link href='https://hack-the-valley-8.devpost.com/'>Hack The Valley 8</Link> and won <Link href='https://devpost.com/software/heckler-ai'>First Place</Link>!</td>
                </tr>
              </>
            ) : ''
          }
          {yearBio === '2024' ? 
            (
              <>
                <tr>
                  <td>Jan 2024
                    <Image src={Camis} alt="Camis" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
                  </td>
                  <td>Started co-op at <Link href="https://www.camis.com/">Camis</Link> as a Software Developer!</td>
                </tr>
                <tr>
                  <td>Feb 2024
                    <Image src={DeerHacks3} alt="Deer Hacks" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: '#222'}}/><br/><br/>
                  </td>
                  <td>Participated in <Link href="https://deerhacks.ca/">DeerHacks III</Link> and <Link href="https://devpost.com/software/lil-learners">won</Link>!</td>
                </tr>
                <tr>
                  <td>March 2024
                    <Image src={GenAIGenesis} alt="Gen AI Genesis" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
                  </td>
                  <td>Participated in the <Link href='https://genaigenesis.ca/'>GenAI Genesis</Link> hackathon.</td>
                </tr>
                <tr>
                  <td>April 2024
                    <Image src={ETHGlobal} alt="Scaling Ethereum 2024" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: '#222'}}/><br/><br/>
                  </td>
                  <td>Participated in the <Link href='https://ethglobal.com/events/scaling2024'>Scaling Ethereum</Link> hackathon.</td>
                </tr>
                <tr>
                  <td>May 2024
                    <Image src={GDSCGuelph} alt="GDSC Hacks Guelph" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
                    <Image src={HawkHacks} alt="Hawk Hacks" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'black'}}/><br/><br/>
                  </td>
                  <td>Participated in <Link href='https://www.gdschacks.com/'>GDSC Hacks Guelph</Link>, and participated in <Link href='https://hawkhacks.ca/'>Hawk Hacks</Link> and <Link href='https://taikai.network/hackbox/hackathons/hawkhacks/projects/clwd7m3bz0dl7z901dj51ngal/idea'>won</Link>!
                  </td>
                </tr>
                <tr>
                  <td>August 2024
                    <Image src={HackThe6ix} alt="Hack the 6" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
                  </td>
                  <td>Participated in <Link href='https://hackthe6ix.com/'>Hack the 6ix</Link> hackathon.
                  </td>
                </tr>
                <tr>
                  <td>September 2024
                    <Image src={Guelph} alt="University of Guelph" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
                    <Image src={HackathonsNA} alt="Hackathons NA" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'black'}}/><br/><br/>
                  </td>
                  <td>Starting my final year at the University of Guelph, and started working at <Link href='https://hackathonscanada.com/'>Hackathons NA</Link> as a Backend Developer!
                  </td>
                </tr>
              </>
            ) : ''
          }
          {yearBio === '2025' ? 
            (
              <>
                <tr>
                  <td>Jan 2025
                    <Image src={Guelph} alt="University of Guelph" width={96} height={96} style={{position: 'relative', left: '5rem', top: '1rem', backgroundColor: 'white'}}/><br/><br/>
                  </td>
                  <td>Completing my final semester at the University of Guelph!</td>
                </tr>
              </>
            ) : ''
          }
        </tbody>
      </Table>
    </div>
  )
}

export default TableContents

export const Table = styled.table`
    tbody.bioTable {
        tr {
            td {
              font-family: 'Manrope';
                ::selection {
                    background-color: aliceblue;
                    color: #202023;
                }
            }
            td:first-of-type {
                font-weight: bold;
                vertical-align: top;
                text-wrap: nowrap;
                border-right: 2px solid;
                padding-inline-end: 2rem;
                padding-top: 1rem;
                padding-bottom: 1rem;
            }
            td:last-of-type {
                padding-left: 4em;
                padding-top: 1rem;
                padding-bottom: 1rem;
            }
        }
    }

    tbody.skills {
        tr {
            td {
                padding-inline: 1rem;
                padding-top: 1rem;
                padding-bottom: 1rem;
            }
        }
    }
`