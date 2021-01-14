import React from 'react'
import styled from 'styled-components'
import {Color, MediumTextStyle} from '../shared/style'
import PaginationButton from './PaginationButton'
import Prev from './Prev'
import Next from './Next'

function Pagination({ pageContext }) {
  // const numberOfPages = 7;
  const numberOfPages = pageContext.numberOfPages;
  const humanPageNumber = pageContext.humanPageNumber;
  let pageNumbers = [];
  for(let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i)
  }

  //1-5ページの時=>prev[1,2,3,4,5]next
  if(numberOfPages < 6) {
    return (
      <>
        <Prev previousPagePath={pageContext.previousPagePath}/>
        <PageList>
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
        </PageList>
        <Next nextPagePath={pageContext.nextPagePath}/>
      </>
    )
  } else {
    //8ページ以上の時
    if(numberOfPages >= 8) {
      //8ページ以上 && 1-3ページを表示している時=>prev[1,2,3,4,5]...[最後のページ]next
      if (humanPageNumber <= 3) {
        pageNumbers = []
        for (let i = 1; i <= 5; i++) {
					pageNumbers.push(i)
        }
        return(
          <>
            <Prev previousPagePath={pageContext.previousPagePath}/>
            <PageList>
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
              <Skip>...</Skip>
              <PaginationButton
                link={`/news/page/${numberOfPages}`} num={numberOfPages}
                humanPageNumber={pageContext.humanPageNumber}
              />
            </PageList>
            <Next nextPagePath={pageContext.nextPagePath}/>
          </>
        )
      //8ページ以上 && 最後の4ページのいずれかを表示している時=>(10ページの場合)prev[1]...[6,7,8,9,10]next
      } else if (humanPageNumber >= numberOfPages - 3) {
        pageNumbers = []
				for (let i = numberOfPages - 4; i <= numberOfPages; i++) {
					pageNumbers.push(i)
        }
        return (
          <>
            <Prev previousPagePath={pageContext.previousPagePath}/>
            <PageList>
              <PaginationButton
                link='/news' num={1}
                humanPageNumber={pageContext.humanPageNumber}
              />
              <Skip>...</Skip>
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
            </PageList>
            <Next nextPagePath={pageContext.nextPagePath}/>
          </>
        )
      //8ページ以上 && 中間のページを表示している時=>(10ページの場合)prev[1]...[4,5,6,7]...[10]next
      } else {
        pageNumbers = []
				for (let i = humanPageNumber - 1; i <= humanPageNumber + 2; i++) {
					pageNumbers.push(i)
        }
        return (
          <>
            <Prev previousPagePath={pageContext.previousPagePath}/>
            <PageList>
              <PaginationButton
                link='/news' num={1}
                humanPageNumber={pageContext.humanPageNumber}
              />
              <Skip>...</Skip>
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
              <Skip>...</Skip>
              <PaginationButton
                link={`/news/page/${numberOfPages}`} num={numberOfPages}
                humanPageNumber={pageContext.humanPageNumber}
              />
            </PageList>
            <Next nextPagePath={pageContext.nextPagePath}/>
          </>
        )
      }
    //6-7ページの時
    } else {
      //6-7ページ && 1-3ページを表示している時 => prev[1,2,3,4,5]next
      if (humanPageNumber <= 3) {
        pageNumbers = []
        for (let i = 1; i <= 5; i++) {
					pageNumbers.push(i)
        }
        return (
          <>
            <Prev previousPagePath={pageContext.previousPagePath}/>
            <PageList>
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
            </PageList>
            <Next nextPagePath={pageContext.nextPagePath}/>
          </>
        )
      //6-7ページ && 4ページ以降を表示している時 => prev[3,4,5,6,7]next
      } else {
        pageNumbers = []
        for (let i = numberOfPages - 4; i <= numberOfPages; i++) {
					pageNumbers.push(i)
        }
        return (
          <>
            <Prev previousPagePath={pageContext.previousPagePath}/>
            <PageList>
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
            </PageList>
            <Next nextPagePath={pageContext.nextPagePath}/>
          </>
        )
      }
    }
  }
}

const PageList = styled.div`
  display: flex;
  margin-left: 16px;
`

const Skip = styled.p`
  margin-right: 16px;
`

export default Pagination
