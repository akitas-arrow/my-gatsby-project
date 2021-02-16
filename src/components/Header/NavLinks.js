import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Color, BoldTextStyle } from '../shared/style'

function NavLinks() {
    return (
        <>
            <NavItem to='/'>HOME</NavItem>
            <NavItem to='/news'>お知らせ</NavItem>
            <NavItem to='/lineUp'>取扱商品</NavItem>
            <NavItem to='/about'>会社案内</NavItem>
        </>
    )
}

const NavItem = styled(Link)`
    ${BoldTextStyle}
    color: ${Color.main};
    height: 88px;
    line-height: 88px;
    text-decoration: none;
    font-size: 18px;
    position: relative;
    z-index: 3;
    overflow: hidden;
    @media (min-width: 768px) {
        font-size: 20px;
    }
    @media (min-width: 1025px) {
        margin-left: 32px;
        &::after {
            z-index: -1;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.5s ease;
            transform: translateX(-100%);
            background: linear-gradient(transparent 55%, ${Color.bg} 55%, ${Color.bg} 70%, transparent 70%);
        }
        :hover{
            &::after {
                transform: translateX(0);
            }
        }
    }
`

export default NavLinks
