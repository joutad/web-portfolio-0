import { useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Table = styled.table`
    tbody.bioTable {
        tr {
            td {
                // padding-top: 1rem;
                // padding-bottom: 1rem;
                // -inline: 4rem;
                ::selection {
                    background-color: aliceblue;
                    color: #202023;
                }
            }
            td:first-of-type {
                font-weight: bold;
                vertical-align: top;
                text-wrap: nowrap;
                // margin-right: 8px;
                border-right: 2px solid;
                padding-inline-end: 2rem;
                padding-top: 1rem;
                padding-bottom: 1rem;
            }
            td:last-of-type {
                padding-left: 4em;
                padding-top: 1rem;
                padding-bottom: 1rem;
                // border-left: 2px solid;
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