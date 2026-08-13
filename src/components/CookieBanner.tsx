import { useState } from 'react'

const consentKey = 'equilibre-cookie-consent'

const CookieBanner = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return !window.localStorage.getItem(consentKey)
  })

  const handleChoice = (value: 'accepted' | 'declined') => {
    window.localStorage.setItem(consentKey, value)
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div className='fixed bottom-4 left-1/2 z-[80] w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2'>
      <div className='eq-card rounded-[1.6rem] border border-[#0E53B7]/16 px-5 py-4 shadow-[0_28px_60px_-34px_rgba(14,83,183,0.3)] md:px-6'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div>
            <p className='text-sm font-semibold text-[#000000]'>Gestion des cookies</p>
            <p className='mt-1 text-sm leading-6 text-[#4B5563]'>
              Nous utilisons des cookies essentiels pour mémoriser votre consentement et améliorer votre navigation.
            </p>
          </div>
          <div className='flex flex-col gap-3 sm:flex-row'>
            <button
              type='button'
              onClick={() => handleChoice('declined')}
              className='eq-button-secondary rounded-full px-5 py-3 text-sm font-semibold text-[#0E53B7]'
            >
              Refuser
            </button>
            <button
              type='button'
              onClick={() => handleChoice('accepted')}
              className='eq-button-primary rounded-full px-5 py-3 text-sm font-semibold text-white'
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
