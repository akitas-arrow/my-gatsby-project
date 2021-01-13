import React from 'react'
import {Link} from 'gatsby'

const Next = ({nextPagePath}) => {
  return (
    <div>
      {
        nextPagePath && <Link to={nextPagePath}>Next</Link>
      }
    </div>
  )
}

export default Next
