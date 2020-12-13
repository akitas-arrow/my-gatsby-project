import React from 'react'
import styled from 'styled-components'
import { Color } from '../shared/style.js'

function Header() {
    return (
        <Wrapper>
            <Toggle>
                <HamburgerButton>
                </HamburgerButton>
            </Toggle>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    width: 100%;
    /* height: 88px; */
    padding: 35px 30px;
`

const Toggle = styled.div`
    display: flex;
    cursor: pointer;
`

const HamburgerButton = styled.div`
    height: 2px;
    width: 30px;
    background-color: ${Color.letter};
    align-self: center;
    position: relative;
    ::before,
    ::after {
        height: 2px;
        width: 30px;
        background-color: ${Color.letter};
        position: absolute;
        content: '';
    }
    ::before {
        top: -10px;
    }
    ::after {
        top: 10px;
    }
`

export default Header
