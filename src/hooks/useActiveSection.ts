import { useEffect, useState } from 'react'

const sectionIds = ['home', 'about', 'services', 'projects', 'contact']

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window === 'undefined' || window.location.pathname !== '/') {
      return 'home'
    }

    const hash = window.location.hash.replace('#', '')
    return sectionIds.includes(hash) ? hash : 'home'
  })

  useEffect(() => {
    if (window.location.pathname !== '/') {
      return
    }

    const syncWithHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (sectionIds.includes(hash)) {
        setActiveSection(hash)
      }
    }

    const syncWithScroll = () => {
      const viewportMarker = window.innerHeight * 0.4
      let nextActiveSection = sectionIds[0]
      let closestDistance = Number.POSITIVE_INFINITY

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) {
          continue
        }

        const rect = section.getBoundingClientRect()

        if (rect.top <= viewportMarker && rect.bottom > viewportMarker) {
          setActiveSection(id)
          return
        }

        const distanceToMarker = Math.abs(rect.top - viewportMarker)
        if (distanceToMarker < closestDistance) {
          closestDistance = distanceToMarker
          nextActiveSection = id
        }
      }

      setActiveSection(nextActiveSection)
    }

    window.addEventListener('hashchange', syncWithHash)
    window.addEventListener('scroll', syncWithScroll, { passive: true })
    window.addEventListener('resize', syncWithScroll)
    syncWithHash()
    syncWithScroll()

    return () => {
      window.removeEventListener('hashchange', syncWithHash)
      window.removeEventListener('scroll', syncWithScroll)
      window.removeEventListener('resize', syncWithScroll)
    }
  }, [])

  return { activeSection, setActiveSection }
}
