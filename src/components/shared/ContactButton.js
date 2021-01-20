import React from 'react'
import {Color} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'gatsby'
import styled from 'styled-components'

function ContactButton() {
    return (
        <Button to='/contact'>
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    @media (min-width: 1024px) {
        bottom: 32px;
        right: 32px;
        width: 120px;
        height: 120px;
    }
`

const Text = styled.p`
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
