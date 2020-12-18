import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { MediumTextStyle } from '../shared/style'

function NavLinks() {
    return (
        <>
            <NavItem to='/'>お知らせ</NavItem>
            <NavItem to='/lineUp'>取扱商品</NavItem>
            <NavItem to='/about'>会社案内</NavItem>
        </>
    )
}

const NavItem = styled(Link)`
    ${MediumTextStyle}
    height: 88px;
    line-height: 88px;
    text-decoration: none;
    font-size: 18px;
    @media (min-width: 768px) {
        font-size: 20px;
    }
    @media (min-width: 1025px) {
        height: 120px;
        line-height: 120px;
        margin-left: 32px;
    }
`

export default NavLinks
