import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, search } = useLocation()
  useEffect(
    () => () => {
      try {
        window.scroll({
          top: 0,
          left: 0,
          // behavior: 'smooth',
        })

      } catch (error) {
        // older browsers fallback
        window.scrollTo(0, 0)
      }
    },
    [pathname, search]
  )

  return (
    <div id="preloader">
      <div id="status">
        <div className="spinner-chase">
          <div className="chase-dot"></div>
          <div className="chase-dot"></div>
          <div className="chase-dot"></div>
          <div className="chase-dot"></div>
          <div className="chase-dot"></div>
          <div className="chase-dot"></div>
        </div>
      </div>
    </div>
  )
  // return null
}