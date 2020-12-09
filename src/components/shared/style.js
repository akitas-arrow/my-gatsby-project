import { css } from 'styled-components'
import "fontsource-source-sans-pro"
import "fontsource-noto-sans-jp"

export const Color = {
    peacock: '#018a9a',
    lemon: '#f7f06e',
    green: '#6bb6bb',
    yellow: '#f2cf01',
    accents: '#44aeea',
    letter: '#333333'
}

export const BasicTextStyle = css`
    font-family: "Noto Sans JP";
    font-size: 16px;
    line-height: 1.5em;
    letter-spacing: 0.05em;
    color: ${Color.letter};
`

export const HeadingStyle = css`
    ${BasicTextStyle}
    font-family: "Source Sans Pro";
    font-weight: 300;
    font-style: italic;
    color: ${Color.peacock};
    font-size: 80px;
`

export const SpHeadingStyle = css`
    ${HeadingStyle}
    font-size: 48px;
`