import React, { useState } from 'react'
import styled from 'styled-components'
import { Color } from '../shared/style.js'
import Logo from './Logo'
import NavLinks from './NavLinks'
import SNSIconSet from '../shared/SNSIconSet'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Wrapper>
            <Logo />
            <Toggle onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ? <HamburgerButton open/> : <HamburgerButton />
                }
            </Toggle>
            {
                isOpen ? (
                    <NavBox open>
                        <NavLinks />
                        <Icons>
                            <SNSIconSet
                                size='lg'
                                color='main'
                            />
                        </Icons>
                    </NavBox>
                ) : (
                    <NavBox>
                        <NavLinks />
                        <Icons>
                            <SNSIconSet
                                size='lg'
                                color='main'
                            />
                        </Icons>
                    </NavBox>
                )
            }
        </Wrapper>
    )
}

const Wrapper = styled.header`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    @media (min-width: 1025px) {
        /* height: 120px; */
        background-color: ${Color.white};
    }
`

const Toggle = styled.div`
    z-index: 3;
    display: flex;
    cursor: pointer;
    @media (min-width: 1025px) {
        display: none;
    }
`

const HamburgerButton = styled.div`
    height: 2px;
    width: 30px;
    background-color: ${Color.main};
    align-self: center;
    position: relative;
    transition: all 0.3s linear;
    transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
    ::before,
    ::after {
        height: 2px;
        width: 30px;
        background-color: ${Color.main};
        position: absolute;
        content: '';
        transition: all 0.3s linear;
    }
    ::before {
        top: -10px;
        transform: ${props =>
        props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    }
    ::after {
        top: 10px;
        opacity: ${props => (props.open ? "0" : "1")};
        transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    }
    @media (min-width: 1025px) {
        display: none;
    }
`

const NavBox = styled.div`
        display: flex;
    @media (max-width: 1024px) {
        width: 100%;
        height: 100%;
        text-align: center;
        position: fixed;
        background-color: ${Color.bg};
        flex-direction: column;
        transition: all 0.3s ease-in;
        top: 0;
        padding-top: 88px;
        right: ${props => (props.open? "0" : "-100%")};
    }
`

const Icons = styled.div`
    height: 88px;
    line-height: 88px;
    font-size: 20px;
    @media (min-width: 768px) {
        font-size: 22px;
    }
    @media (min-width: 1025px) {
        /* height: 120px; */
        /* line-height: 120px; */
        margin-left: 32px;
    }
`

export default Header
