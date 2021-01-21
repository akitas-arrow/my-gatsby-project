import React from 'react'
import {Color, BoldTextStyle} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'gatsby'
import styled from 'styled-components'

function ContactButton() {
    return (
        <Box to='/contact'>
                <SpText>Contact</SpText>
            <Button>
                <Text>お問い合わせ</Text>
                <Icon icon={['far', 'envelope']} color={Color.white}/>
            </Button>
        </Box>
    )
}

const Box = styled(Link)`
    position: relative;
    position: fixed;
    padding: 16px;
    bottom: 0;
    right: 0;
    z-index:10;
    text-decoration: none;
`

const Button = styled.div`
    width: 72px;
    height: 72px;
    background-color: ${Color.main};
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (min-width: 1024px) {
        width: 112px;
        height: 112px;
    }
`
const SpText = styled.p`
    ${BoldTextStyle}
    font-size: 14px;
    text-align: center;
    color: ${Color.main};
    @media (min-width: 1024px) {
        display: none;
    }
`

const Text = styled.p`
    display: none;
    @media (min-width: 1024px) {
        display: block;
        ${BoldTextStyle}
        font-size: 14px;
        text-align: center;
        color: ${Color.white};
    }

`

const Icon = styled(FontAwesomeIcon)`
    font-size: 24px;
    @media (min-width: 1024px) {
        font-size: 32px;
    }
`

export default ContactButton
