import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Color } from './style.js'
import styled from 'styled-components'

function SNSIconSet() {
    return (
        <div>
            <Anchor
                href='https://www.youtube.com/channel/UCcZyDKQcFCebJaL5npLnfMw'
                target="_blank" rel="noopener"
            >
                <FontAwesomeIcon icon={['fab', 'youtube']} color={Color.letter}/>
            </Anchor>
            <Anchor
                href='https://www.instagram.com/tomoeya1946/'
                target="_blank" rel="noopener"
            >
                <FontAwesomeIcon icon={['fab', 'instagram']} color={Color.letter}/>
            </Anchor>
        </div>
    )
}

const Anchor = styled.a`
    text-decoration: none;
    :first-child {
        margin-right: 24px;
    }
`

export default SNSIconSet
