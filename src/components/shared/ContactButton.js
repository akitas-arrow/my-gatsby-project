import React from 'react'
import {Color, MediumTextStyle} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'gatsby'
import styled from 'styled-components'

function ContactButton() {
    return (
        <Button>
            <div>
                <Text>お問い合わせ</Text>
                <Icon icon={['far', 'envelope']} color={Color.white}/>
            </div>
        </Button>
    )
}

const Button = styled(Link)`
    position: relative;
    position: fixed;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 16px;
    right: 16px;
    width: 80px;
    height: 80px;
    background-color: ${Color.main};
    border-radius: 50%;
    z-index:10;
    cursor: pointer;
    text-align: center;
    @media (min-width: 1024px) {
        bottom: 32px;
        right: 32px;
        width: 120px;
        height: 120px;
    }
`

const Text = styled.p`
    /* position: absolute;
    ${MediumTextStyle}
    color: ${Color.main};
    font-size: 15px;
    text-decoration: none;
    top: -30px;
    left: -16px; */
    display: none;
    @media (min-width: 1024px) {
        display: block;
        position: static;
        color: ${Color.white};
    }
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 40px;
`

export default ContactButton
