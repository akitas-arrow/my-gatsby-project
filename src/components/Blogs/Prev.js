import React from 'react'
import { Link } from 'gatsby'

const Prev = ({previousPagePath}) => {
  return (
    <div>
        {
          previousPagePath && <Link to={previousPagePath}>Prev</Link>
        }
    </div>
  )
}

export default Prev
