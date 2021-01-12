import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

function PaginationButton({ pageContext }) {
  const pages = [...Array(pageContext.numberOfPages)].map((_, i) => i + 1)

  return (
    <div>
    </div>
  )
}

const Button = styled(Link)`

`

export default PaginationButton
