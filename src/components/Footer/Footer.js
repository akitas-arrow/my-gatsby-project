import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Color } from '../shared/style.js'

function Footer() {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "logo01.svg"}){
                publicURL
            }
        }
    `)
    return (
        <Wrapper>
            <Container>
                <ImageStyle src={data.file.publicURL} alt='有限会社トモエ屋' />
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

const ImageStyle = styled.img`
    height:56px;
`


export default Footer
