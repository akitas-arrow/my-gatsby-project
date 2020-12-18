import React from 'react'
import styled from 'styled-components'

function Wrapper({ children, type }) {
    return (
        <Box type={type}>
            { children }
        </Box>
    )
}

const Box = styled.div`
    padding: 72px 24px;
    @media (min-width: 768px) {
    padding: 120px 24px;
    }
`

export default Wrapper
