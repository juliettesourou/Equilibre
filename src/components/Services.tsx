import {
  ArrowRight,
  BarChart3,
  Brush,
  Code2,
  Megaphone,
  Network,
  Share2,
} from 'lucide-react'
import Title from './Title'
import { useInView } from '../hooks/useInView'

const services = [
  {
    icon: BarChart3,
    title: 'Strategie digitale',
    description:
      "Nous accompagnons les entreprises dans la mise en place d'une strategie numerique claire pour renforcer leur presence en ligne et leur positionnement.",
    points: [
      'Augmenter la visibilite sur Internet',
      'Developper la notoriete de la marque',
      'Analyser les performances digitales',
    ],
  },
  {
    icon: Share2,
    title: 'Communication digitale',
    description:
      "Nous concevons une communication a 360 degres pour garantir une presence coherente sur l'ensemble des canaux digitaux.",
    points: [
      'Strategie de communication adaptee',
      'Presence coherente sur les canaux',
      'Visibilite de marque renforcee',
    ],
  },
  {
    icon: Megaphone,
    title: 'Social Ads',
    description:
      "Nous creons, pilotons et optimisons les campagnes publicitaires sur les reseaux sociaux et les medias numeriques.",
    points: [
      'Atteindre la bonne audience',
      'Reduire le cout des campagnes',
      'Maximiser le retour sur investissement',
    ],
  },
  {
    icon: Code2,
    title: 'Developpement web',
    description:
      'Nous developpons des solutions numeriques sur mesure avec des technologies modernes selon les besoins des clients.',
    points: [
      'Sites web et applications web',
      'Applications mobiles et logiciels',
      'ERP et outils sur mesure',
    ],
  },
  {
    icon: Brush,
    title: 'Creation de contenu',
    description:
      "Nous accompagnons les entreprises dans la construction d'une identite visuelle forte, creative et memorable.",
    points: [
      'Logos et chartes graphiques',
      'Visuels et contenus editoriaux',
      'Image de marque originale',
    ],
  },
  {
    icon: Network,
    title: 'Externalisation de services',
    description:
      "Nous mettons a disposition notre expertise pour prendre en charge certaines missions techniques a cout competitif.",
    points: [
      'Sous-traitance de missions ciblees',
      'Ressources et expertise dediees',
      'Prestations fiables et rentables',
    ],
  },
]

const Services = () => {
  const [gridRef, gridInView] = useInView()

  return (
    <section>
      <Title
        title='Des expertises complementaires pour des resultats concrets'
        eyebrow='Nos services'
        subtitle="De la strategie a la production, Equilibre accompagne les entreprises avec des services complementaires pour accelerer leur croissance digitale."
      />

      <div ref={gridRef} className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {services.map((service, i) => (
          <article
            key={service.title}
            style={{ animationDelay: `${i * 90}ms` }}
            className={`glass-card elegant-card eq-card flex min-h-[290px] flex-col rounded-[1.7rem] p-5 md:min-h-[320px] md:p-7 ${
              gridInView ? 'anim-fade-up' : 'opacity-0'
            }`}
          >
            <div className='flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-[linear-gradient(135deg,#0E53B7_0%,#1765D4_72%,#E50012_100%)] text-white shadow-[0_18px_40px_-25px_rgba(14,83,183,0.35)]'>
              <service.icon className='h-6 w-6' />
            </div>
            <h3 className='mt-5 max-w-[16rem] text-lg font-semibold leading-7 text-[#000000] md:mt-6 md:text-[1.55rem]'>
              {service.title}
            </h3>
            <p className='mt-4 text-sm leading-7 text-[#4B5563]'>{service.description}</p>
            <div className='mt-5 space-y-2'>
              {service.points.map((point, pointIndex) => (
                <div key={point} className='flex items-start gap-2 text-sm leading-6 text-[#4B5563]'>
                  <span className={`mt-2 h-1.5 w-1.5 rounded-full ${pointIndex === 1 ? 'bg-[#E50012]' : 'bg-[#0E53B7]'}`} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className='mt-auto pt-7'>
              <a
                href='#contact'
                className='inline-flex items-center gap-2 text-sm font-semibold text-[#0E53B7] transition hover:text-[#E50012]'
              >
                En savoir plus
                <ArrowRight className='h-4 w-4' />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
