import Title from './Title'
import { useInView } from '../hooks/useInView'
import { partnerLogos } from '../data/siteContent'

const marqueeLogos = [...partnerLogos, ...partnerLogos]

const TrustedBy = () => {
  const [ref, inView] = useInView(0.15)

  return (
    <section>
      <Title
        title='Ils nous font confiance'
        eyebrow='Confiance'
        subtitle="Des entreprises nous confient leurs projets digitaux pour structurer leur présence, développer leurs outils et faire grandir leur activité."
      />

      <div
        ref={ref}
        className={`relative overflow-hidden rounded-[1.9rem] border border-[#0E53B7]/10 bg-[linear-gradient(180deg,#f8fbff_0%,#f4f8ff_100%)] px-0 py-6 backdrop-blur-md ${
          inView ? 'anim-fade-up' : 'opacity-0'
        }`}
      >
        <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-[linear-gradient(90deg,#f8fbff_0%,rgba(248,251,255,0)_100%)] sm:w-16' />
        <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-[linear-gradient(270deg,#f8fbff_0%,rgba(248,251,255,0)_100%)] sm:w-16' />

        <div className='trust-marquee-track flex w-max gap-4 px-4 sm:gap-5 sm:px-6'>
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className='flex h-24 w-[220px] shrink-0 items-center justify-center rounded-[1.6rem] border border-white/70 bg-white px-4 shadow-[0_22px_44px_-34px_rgba(0,0,0,0.28)] sm:h-28 sm:w-[250px] sm:px-5'
            >
              <img src={logo.src} alt={logo.alt} className='max-h-[62px] w-full object-contain sm:max-h-[72px]' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
