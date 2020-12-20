import React from 'react'
import styled from 'styled-components'

function Wrapper({ children, bg }) {
    return (
        <Box bg={bg}>
            { children }
        </Box>
    )
}

const Box = styled.div`
    background-color: ${props => props.bg || 'transparent'};
    padding: 72px 24px;
    @media (min-width: 768px) {
    padding: 120px 24px;
    }
`

export default Wrapper
