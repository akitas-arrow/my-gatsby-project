import React from 'react'
import styled from 'styled-components'
import { Color } from '../shared/style.js'

function Footer() {
    return (
        <Wrapper>
            <Container>
                Footer
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`

const Container = styled.div`
    border-top: 3px dotted ${Color.peacock};
    max-width: 1100px;
    margin: 0 auto;
`


export default Footer
