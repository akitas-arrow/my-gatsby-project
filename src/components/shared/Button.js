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
    position: absolute;
    z-index: 1;
    margin: 72px auto 0;
    box-sizing: border-box;
    cursor: pointer;
    ${MediumTextStyle}
    display: table;
    color: ${Color.peacock};
    font-size: 15px;
    height: 56px;
    line-height: 56px;
    padding: 0 80px;
    border: 1px solid ${Color.peacock};
    position: relative;
    user-select: none;
    ::before {
        display: block;
        content: "";
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: ${Color.lemon};
        top: 0;
        left: 0;
        transform: translate(4px, 4px);
    }
`

export default Button
