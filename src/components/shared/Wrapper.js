import React from 'react'
import styled from 'styled-components'

function Wrapper({ children, bg, paddingBottom}) {
    return (
        <Box bg={bg} paddingBottom={paddingBottom}>
            { children }
        </Box>
    )
}

const Box = styled.div`
    background-color: ${props => props.bg || 'transparent'};
    padding: 72px 24px;
    padding-bottom: ${props => props.paddingBottom || '72px'};
    @media (min-width: 768px) {
    padding: 120px 24px;
    padding-bottom: ${props => props.paddingBottom || '120px'};
    }
`

export default Wrapper
