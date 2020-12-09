import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Color, HeadingStyle, SpHeadingStyle} from '../shared/style.js'

function Header() {
    return (
        <Wrapper>
            <Title>Header</Title>
            <FontAwesomeIcon icon="phone-alt" color={Color.lemon}/>
            <FontAwesomeIcon icon="fax" color={Color.green}/>
            <FontAwesomeIcon icon={['fab', 'youtube']} color={Color.yellow}/>
            <FontAwesomeIcon icon={['fab', 'instagram']} color={Color.accents}/>
            <FontAwesomeIcon icon={['far', 'envelope']} color={Color.letter}/>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    /* background-color:${Color.peacock}; */
`

const Title = styled.h1`
    ${SpHeadingStyle}
    @media (min-width: 769px) {
        ${HeadingStyle}
    }
`

export default Header
