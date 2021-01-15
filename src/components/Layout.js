import React from 'react'
import { createGlobalStyle } from 'styled-components'
import "modern-css-reset"
import { BasicTextStyle } from './shared/style.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faPhoneAlt, faFax, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import ContactButton from './shared/ContactButton'

function Layout({ children }) {
    library.add(fab, far, faPhoneAlt, faFax, faChevronLeft, faChevronRight)
    return (
        <div>
            <GlobalStyle />
            <Header />
            <ContactButton />
                { children }
            <Footer />
        </div>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        ${BasicTextStyle}
    }
`

export default Layout
