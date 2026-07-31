import Title from './Title'
import { useInView } from '../hooks/useInView'
import { CheckCircle2, Database, BarChart3, Microscope, Fish, Leaf } from 'lucide-react'

const skills = [
  { name: 'Écologie aquatique',         level: 95 },
  { name: 'Biologie des poissons',      level: 92 },
  { name: 'Morphométrie',               level: 90 },
  { name: 'Otolithométrie',             level: 90 },
  { name: 'Microchimie',                level: 85 },
  { name: 'Analyses statistiques',      level: 88 },
  { name: 'Visualisation de données',   level: 86 },
]

const methods = [
  { icon: Microscope, label: 'Morphométrie' },
  { icon: Fish, label: 'Otolithométrie' },
  { icon: Database, label: 'Microchimie' },
  { icon: BarChart3, label: 'Analyse statistique' },
  { icon: Leaf, label: 'Interprétation écologique' },
  { icon: CheckCircle2, label: 'Visualisation de données' },
]

const otherSkills = [
  'Analyse de données scientifiques',
  'Rédaction scientifique',
  "Relecture et structuration d'articles",
  'Préparation de rapports environnementaux',
  'Présentation de résultats sous forme de graphiques et de tableaux',
  'Gestion des écosystèmes aquatiques',
  'Collaboration scientifique internationale',
]

const Experiences = () => {
  const [ref, inView] = useInView()
  return (
    <section>
      <Title title='Compétences scientifiques' eyebrow='Compétences' />

      <div ref={ref} className={`grid gap-8 lg:grid-cols-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}>

        {/* ── Barres de progression ── */}
        <div className='rounded-[1.5rem] border border-[#E1E9E5] bg-white p-7 shadow-[0_18px_35px_-28px_rgba(10,75,59,0.35)]'>
          <h3 className='mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#0E6B54]'>
            Compétences techniques
          </h3>
          <div className='space-y-5'>
            {skills.map((s) => (
              <div key={s.name}>
                <div className='mb-2 flex justify-between text-xs text-[#4B5D57]'>
                  <span>{s.name}</span>
                  <span className='font-medium text-[#163229]'>{s.level}%</span>
                </div>
                <div className='h-1.5 w-full rounded-full bg-[#E6F3EE]'>
                  <div
                    className='h-1.5 rounded-full bg-[#0E6B54]'
                    style={{
                      width: inView ? `${s.level}%` : '0%',
                      transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='overflow-hidden rounded-[1.5rem] border border-[#E1E9E5] bg-white p-7 shadow-[0_18px_35px_-28px_rgba(10,75,59,0.35)]'>
          <h3 className='mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#0E6B54]'>
            Méthodes et outils
          </h3>
          <div className='grid gap-4 sm:grid-cols-2'>
            {methods.map(({ icon: Icon, label }) => (
              <div key={label} className='flex items-center gap-4 rounded-[1.15rem] border border-[#E7F1ED] bg-[#F7FBF9] px-4 py-4'>
                <span className='flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#0E6B54] shadow-sm'>
                  <Icon className='h-5 w-5' />
                </span>
                <span className='text-sm font-medium text-[#24453B]'>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Autres compétences ── */}
        <div className='rounded-[1.5rem] border border-[#E1E9E5] bg-white p-7 shadow-[0_18px_35px_-28px_rgba(10,75,59,0.35)]'>
          <h3 className='mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#0E6B54]'>
            Objectifs et atouts
          </h3>
          <ul className='space-y-4'>
            {otherSkills.map((s) => (
              <li key={s} className='flex items-start gap-3 text-sm text-[#4B5D57]'>
                <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-[#0E6B54]' />
                {s}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Experiences
