import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Color } from './style.js'
import styled from 'styled-components'

function SNSIconSet({size}) {
    return (
        <>
            <Anchor
                href='https://www.youtube.com/channel/UCcZyDKQcFCebJaL5npLnfMw'
                target="_blank" rel="noopener"
            >
                <FontAwesomeIcon
                    icon={['fab', 'youtube']}
                    color={Color.letter}
                    size={size}
                />
            </Anchor>
            <Anchor
                href='https://www.instagram.com/tomoeya1946/'
                target="_blank" rel="noopener"
            >
                <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    color={Color.letter}
                    size={size}
                />
            </Anchor>
        </>
    )
}

const Anchor = styled.a`
    text-decoration: none;
    margin-right: 24px;
    :last-child {
        margin-right: 0;
    }
`

export default SNSIconSet
