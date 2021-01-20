import React from 'react'
import Prev from './Prev'
import Next from './Next'
import styled from 'styled-components'
import {BoldTextStyle, Color} from '../shared/style'

function SpPagination({ pageContext }) {
  return (
    <>
      <Prev previousPagePath={pageContext.previousPagePath}/>
      <Page>{`${pageContext.humanPageNumber} / ${pageContext.numberOfPages}`}</Page>
      <Next nextPagePath={pageContext.nextPagePath}/>
    </>
  )
}

const Page = styled.p`
  ${BoldTextStyle}
  font-size: 18px;
  color: ${Color.main};
`

export default SpPagination
