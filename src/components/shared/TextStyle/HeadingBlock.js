import React from 'react'
import styled from 'styled-components'

function HeadingBlock({ children }) {
    return (
        <Box>
            { children }
        </Box>
    )
}

const Box = styled.div`
    position : relative;
    /* background-color: pink; */
`

export default HeadingBlock
