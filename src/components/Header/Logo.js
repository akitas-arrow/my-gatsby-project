import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

function Logo() {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "logo01.svg"}){
                publicURL
            }
        }
    `)

    return (
        <LogoWrapper to='/'>
            <LogoImage src={data.file.publicURL} alt='有限会社トモエ屋' />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Link) `
    z-index: 3;
    padding: 26.5px 0;
    @media (min-width: 1025px) {
        padding: 37.5px 0;
    }
`

const LogoImage = styled.img`
    /* padding: 26.5px 0; */
    height:35px;
    @media (min-width: 1025px) {
        /* padding: 37.5px 0; */
        height:45px;
    }
`

export default Logo
