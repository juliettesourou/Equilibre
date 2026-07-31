import { Waves, Fish, BarChart3, FileText, Leaf, Microscope } from 'lucide-react'
import Title from './Title'
import { useInView } from '../hooks/useInView'

const services = [
  { icon: Microscope, title: 'Écologie évolutive et fonctionnelle' },
  { icon: Waves,      title: 'Écologie aquatique' },
  { icon: Fish,       title: 'Biologie des poissons' },
  { icon: BarChart3,  title: 'Analyse de données scientifiques' },
  { icon: FileText,   title: 'Rédaction scientifique' },
  { icon: Leaf,       title: 'Conservation de la biodiversité' },
]

const Services = () => {
  const [gridRef, gridInView] = useInView()
  return (
    <section>
      <Title title="Domaines d'expertise" eyebrow='Expertise' />
      <div ref={gridRef} className='grid gap-4 sm:grid-cols-2 lg:grid-cols-6'>
        {services.map((s, i) => (
          <div
            key={s.title}
            style={{ animationDelay: `${i * 80}ms` }}
            className={`flex min-h-[152px] flex-col items-center justify-center gap-3 rounded-[1.35rem] border border-[#E1E9E5] bg-white px-4 py-6 text-center shadow-[0_18px_35px_-28px_rgba(10,75,59,0.35)] transition hover:-translate-y-1 hover:border-[#0E6B54]/40 ${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF6F1]'>
              <s.icon className='h-5 w-5 text-[#0E6B54]' />
            </div>
            <h3 className='max-w-[10rem] text-sm font-semibold leading-6 text-[#163229]'>{s.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
