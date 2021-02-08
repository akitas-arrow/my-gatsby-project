import React from 'react'
import styled from 'styled-components'
import { Color, BasicTextStyle, MediumTextStyle } from '../shared/style'

function TableRow({th, td}) {
    return (
        <tr>
            <TableHeader>{th}</TableHeader>
            <TableData>
                <ul>
                    {
                        td.map((list, index) => {
                            return (
                                <List key={index}>{list}</List>
                            )
                        })
                    }
                </ul>
            </TableData>
        </tr>
    )
}

const TableHeader = styled.th`
    ${MediumTextStyle}
    border: none;
    border-bottom: 1px solid ${Color.bg};
    width: 152px;
    @media (max-width: 480px) {
        display: block;
        width: 100%;
        border-bottom: none;
        padding-top: 8px;
    }
`

const TableData = styled.td`
    ${BasicTextStyle}
    border: none;
    border-bottom: 1px solid ${Color.bg};
    @media (max-width: 480px) {
        display: block;
        width: 100%;
        text-align: center;
        & ul {
            padding: 0;
            margin: 0 0 8px;
        }
    }
`

const List = styled.li`
    list-style: none;
`
export default TableRow
