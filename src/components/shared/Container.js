import React from 'react'
import styled from 'styled-components'

function Container({ children }) {
    return (
        <Box>
            { children }
        </Box>
    )
}

const Box = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;
`

export default Container
