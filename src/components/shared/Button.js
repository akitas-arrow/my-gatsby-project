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
    ${MediumTextStyle}
    display: inline-block;
    color: ${Color.peacock};
    font-size: 15px;
    height: 56px;
    line-height: 56px;
    padding: 0 80px;
    border: 1px solid ${Color.peacock};
    position: relative;
    ::after {
        position: absolute;
        background-color: ${Color.lemon};
        content: '';
    }
`

export default Button
