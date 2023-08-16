import styled from '@emotion/styled'

export const Table = styled.table`
    tbody.bioTable {
        tr {
            td {
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