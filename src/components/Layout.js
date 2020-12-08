import React from 'react'
import { createGlobalStyle } from 'styled-components'
import "modern-css-reset"
import "fontsource-noto-sans-jp"
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout({ children }) {
    return (
        <div>
            <GlobalStyle />
            <Header />
                { children }
            <Footer />
        </div>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Noto Sans JP";
        line-height: 2em;
        letter-spacing: 0.05em;
        color: #333333;
    }
`

export default Layout
