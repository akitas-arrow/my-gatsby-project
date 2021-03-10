import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Color } from '../shared/style'

function PaginationButton({link, num, humanPageNumber}) {
  if(num === humanPageNumber) {
    return <DisabledButton>{num}</DisabledButton>
  }

  return <Button to={link}>{num}</Button>
}

const Button = styled(Link)`
  font-size: 15px;
  color: ${Color.main};
  text-decoration: none;
  border: 2px solid ${Color.main};
  padding: 4px 16px;
  margin-right: 16px;
`

const DisabledButton = styled.div`
  font-size: 15px;
  color: ${Color.white};
  text-decoration: none;
  border: 2px solid ${Color.main};
  background-color: ${Color.main};
  padding: 4px 16px;
  margin-right: 16px;
`

export default PaginationButton
