import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MediumTextStyle, Color } from './style'

function Button({ bg, color, slug, children }) {
    return (
        <ButtonContainer to={slug} bg={bg} color={color}>
            { children }
        </ButtonContainer>
    )
}

const ButtonContainer = styled(Link)`
    text-decoration: none;
    position: absolute;
    z-index: 1;
    margin: 72px auto 0;
    box-sizing: border-box;
    cursor: pointer;
    ${MediumTextStyle}
    display: table;
    color: ${props => Color[props.color] || Color.white};
    font-size: 15px;
    height: 56px;
    line-height: 44px;
    padding: 2px 84px 10px 76px;
    background-color: ${props => Color[props.bg] || Color.main};
    position: relative;
    user-select: none;
    transition: all 0.3s;
    ::before {
        border: 1px solid ${Color.main};
        display: block;
        content: "";
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        top: -4px;
        left: -4px;
        transition: all 0.3s ease;
    }
    :hover {
        line-height: 56px; 
        padding: 0 80px;
    }
    :hover::before {
        top: 0;
        left: 0;
    }
`

export default Button
