import React from 'react'
import { Link } from 'gatsby'

function PaginationButton({link, num, humanPageNumber}) {
  if(num === humanPageNumber) {
    return <button>{num}</button>
  }

  return <Link to={link}>{num}</Link>
}

export default PaginationButton
