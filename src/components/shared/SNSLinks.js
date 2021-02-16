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
                className="youtube"
            >
                <FontAwesomeIcon
                    icon={['fab', 'youtube']}
                    color={Color[color]}
                    size={size}
                    className="icon"
                />&emsp;YouTube
            </Anchor>
            <Anchor
                href='https://www.instagram.com/tomoeya1946/'
                target="_blank" rel="noopener"
                color={color}
                className="instagram"
            >
                <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    color={Color[color]}
                    size={size}
                    className="icon"
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
    &:hover {
        &.youtube {
            color: #da1725;
            .icon {
                color: #da1725;
            }
        }
        &.instagram {
            color:  #d93177;
            .icon {
                color:  #d93177;
            }
        }
    }
`

export default SNSLinks
