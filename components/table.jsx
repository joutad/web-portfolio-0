import styled from '@emotion/styled'

export const Table = styled.table`
    tr {
        td {
            // padding-top: 1rem;
            // padding-bottom: 1rem;
            // -inline: 4rem;
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
        td:nth-child(2) {
            // right: -2rem;
        }
        td:last-of-type {
            padding-left: 4em;
            padding-top: 1rem;
            padding-bottom: 1rem;
            // border-left: 2px solid;
        }
    }
`