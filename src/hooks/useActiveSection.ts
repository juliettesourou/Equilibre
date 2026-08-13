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

    window.addEventListener('hashchange', syncWithHash)

    const observers = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
      .map((section) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id)
              }
            })
          },
          {
            rootMargin: '-35% 0px -45% 0px',
            threshold: 0.2,
          },
        )

        observer.observe(section)
        return observer
      })
    return () => {
      window.removeEventListener('hashchange', syncWithHash)
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return { activeSection, setActiveSection }
}
