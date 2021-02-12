import { useEffect } from 'react'
import { useLocation } from "@reach/router"

function useScrollReset() {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default useScrollReset
