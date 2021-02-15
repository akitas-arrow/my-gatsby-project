import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Color } from './style.js'
import styled from 'styled-components'

function SNSLinks({ size, color }) {
    return (
        <>
            <Anchor
                href='https://www.youtube.com/channel/UCcZyDKQcFCebJaL5npLnfMw'
                target="_blank" rel="noopener"
                color={color}
            >
                <FontAwesomeIcon
                    icon={['fab', 'youtube']}
                    color={Color[color]}
                    size={size}
                />&emsp;YouTube
            </Anchor>
            <Anchor
                href='https://www.instagram.com/tomoeya1946/'
                target="_blank" rel="noopener"
                color={color}
            >
                <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    color={Color[color]}
                    size={size}
                />&emsp;Instagram
            </Anchor>
        </>
    )
}

const Anchor = styled.a`
    display: block;
    text-decoration: none;
    color:${props => Color[props.color]};
    font-size: 18px;
`

export default SNSLinks
