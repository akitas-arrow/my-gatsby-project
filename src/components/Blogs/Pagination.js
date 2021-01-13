import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'
import {Color, MediumTextStyle} from '../shared/style'
import PaginationButton from './PaginationButton'
import Prev from './Prev'
import Next from './Next'

function Pagination({ pageContext }) {
  const numberOfPages = pageContext.numberOfPages;
  const humanPageNumber = pageContext.humanPageNumber;
  let pageNumbers = [];
  for(let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i)
  }

  if(numberOfPages < 6) {
    return (
      <>
        <Prev previousPagePath={pageContext.previousPagePath}/>
        {pageNumbers.map(num => {
          if(num === 1) {
            return(
              <PaginationButton
                key={num} link='/news' num={num}
                humanPageNumber={pageContext.humanPageNumber}
              />
            )
          }
          return(
            <PaginationButton
              key={num} link={`/news/page/${num}`} num={num}
              humanPageNumber={pageContext.humanPageNumber}
            />
          )
        })}
        <Next nextPagePath={pageContext.nextPagePath}/>
      </>
    )
  } else {
    if(numberOfPages >= 8) {
      if (humanPageNumber <= 3) {
        pageNumbers = []
        for (let i = 1; i <= 5; i++) {
					pageNumbers.push(i)
        }
        return(
          <>
            <Prev previousPagePath={pageContext.previousPagePath}/>
            {pageNumbers.map(num => {
              if(num === 1) {
                return(
                  <PaginationButton
                    key={num} link='/news' num={num}
                    humanPageNumber={pageContext.humanPageNumber}
                  />
                )
              }
              return(
                <PaginationButton
                  key={num} link={`/news/page/${num}`} num={num}
                  humanPageNumber={pageContext.humanPageNumber}
                />
              )
            })}
            <p>...</p>
            <PaginationButton
              link={`/news/page/${numberOfPages}`} num={numberOfPages}
              humanPageNumber={pageContext.humanPageNumber}
            />
            <Next nextPagePath={pageContext.nextPagePath}/>
          </>
        )
      }
    }
  }
}

export default Pagination
