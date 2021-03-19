import React from 'react'
import styled,{ createGlobalStyle } from 'styled-components'
import "modern-css-reset"
import { MediumTextStyle } from './shared/style.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faPhoneAlt, faFax, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout({ children }) {
    library.add(fab, far, faPhoneAlt, faFax, faChevronLeft, faChevronRight)
    return (
        <AppWrapper>
            <GlobalStyle />
            <Header />
                { children }
            <Footer />
        </AppWrapper>
    )
}

const AppWrapper = styled.div`
    height: 100vh;
    overflow: scroll;
`

const GlobalStyle = createGlobalStyle`
    body {
        ${MediumTextStyle}
    }
`

export default Layout
