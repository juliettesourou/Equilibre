import Title from './Title'
import { useInView } from '../hooks/useInView'
import { BriefcaseBusiness, CalendarRange, Smile, Users } from 'lucide-react'

const metrics = [
  { icon: CalendarRange, value: '6', label: "Années d'expérience" },
  { icon: Users, value: '10', label: "Membres de l'équipe" },
  { icon: Smile, value: '100%', label: 'Clients satisfaits' },
  { icon: BriefcaseBusiness, value: '92', label: 'Projets livrés' },
]

const Experiences = () => {
  const [ref, inView] = useInView()

  return (
    <section>
      <Title
        title='Une équipe engagée, des résultats concrets'
        eyebrow='Notre impact'
        subtitle='Des chiffres clés pour donner un aperçu de notre expérience, de notre équipe et des projets menés avec nos clients.'
      />

      <div
        ref={ref}
        className={`eq-card grid gap-4 rounded-[1.6rem] p-4 shadow-[0_22px_46px_-34px_rgba(14,83,183,0.18)] sm:grid-cols-2 sm:p-5 xl:grid-cols-4 ${
          inView ? 'anim-fade-up' : 'opacity-0'
        }`}
      >
        {metrics.map(({ icon: Icon, value, label }) => (
          <article
            key={`${value}-${label}`}
            className='eq-outline-card min-w-0 rounded-[1.2rem] px-4 py-4 sm:px-5'
          >
            <div className='flex min-w-0 items-center gap-3 sm:gap-4'>
              <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(14,83,183,0.14)_0%,rgba(229,0,18,0.08)_100%)] text-[#0E53B7] sm:h-12 sm:w-12'>
                <Icon className='h-5 w-5' />
              </span>
              <div className='min-w-0'>
                <p className='text-[1.8rem] font-semibold text-[#000000] sm:text-2xl'>{value}</p>
                <p className='break-words text-sm text-[#4B5563]'>{label}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experiences
