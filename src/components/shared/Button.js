import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MediumTextStyle, Color } from './style'

function Button({ children }) {
    return (
        <ButtonContainer>
            { children }
        </ButtonContainer>
    )
}

const ButtonContainer = styled(Link)`
    box-sizing: border-box;
    cursor: pointer;
    ${MediumTextStyle}
    display: inline-block;
    color: ${Color.peacock};
    font-size: 15px;
    height: 56px;
    line-height: 56px;
    padding: 0 80px;
    border: 1px solid ${Color.peacock};
    position: relative;
    user-select: none;
    transition: transform 0.3s;
    ::before {
        content: "";
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: ${Color.lemon};
        top: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.3s;
    }
    :hover::before {
        transform: scaleX(1);
        transform: translate(4px, 4px);
    }
    :active {
        transform: translate(4px, 4px);
    }
    :active::before {
        transform: translate(0, 0);
    }
`

export default Button
