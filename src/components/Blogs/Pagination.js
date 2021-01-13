import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'
import {Color, MediumTextStyle} from '../shared/style'
import PaginationButton from './PaginationButton'
import Prev from './Prev'
import Next from './Next'

function Pagination({ pageContext }) {
  let pageNumbers = [];
  for(let i = 1; i <= pageContext.numberOfPages; i++) {
    pageNumbers.push(i)
  }
  console.log(pageContext.pageNumber)
  return (
    <>
      <Prev previousPagePath={pageContext.previousPagePath}/>

      {pageNumbers.map(num => {
        if(num === 1) {
          return(
            <PaginationButton
              link='/news'
              num={num}
              humanPageNumber={pageContext.humanPageNumber}
            />
          )
        }
        return(
          <PaginationButton
            link={`/news/page/${num}`}
            num={num}
            humanPageNumber={pageContext.humanPageNumber}
          />
        )
      })}

      <Next nextPagePath={pageContext.nextPagePath}/>
    </>
  )
}

export default Pagination
