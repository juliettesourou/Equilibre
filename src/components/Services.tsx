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
    title: 'Stratégie digitale',
    description:
      "Nous accompagnons les entreprises dans la mise en place d'une stratégie numérique claire pour renforcer leur présence en ligne et leur positionnement.",
    points: [
      'Augmenter la visibilité sur Internet',
      'Développer la notoriété de la marque',
      'Analyser les performances digitales',
    ],
  },
  {
    icon: Share2,
    title: 'Communication digitale',
    description:
      "Nous concevons une communication à 360 degrés pour garantir une présence cohérente sur l'ensemble des canaux digitaux.",
    points: [
      'Stratégie de communication adaptée',
      'Présence cohérente sur les canaux',
      'Visibilité de marque renforcée',
    ],
  },
  {
    icon: Megaphone,
    title: 'Social Ads',
    description:
      "Nous créons, pilotons et optimisons les campagnes publicitaires sur les réseaux sociaux et les médias numériques.",
    points: [
      'Atteindre la bonne audience',
      'Réduire le coût des campagnes',
      'Maximiser le retour sur investissement',
    ],
  },
  {
    icon: Code2,
    title: 'Développement web',
    description:
      'Nous développons des solutions numériques sur mesure avec des technologies modernes, selon les besoins des clients.',
    points: [
      'Sites web et applications web',
      'Applications mobiles et logiciels',
      'ERP et outils sur mesure',
    ],
  },
  {
    icon: Brush,
    title: 'Création de contenu',
    description:
      "Nous accompagnons les entreprises dans la construction d'une identité visuelle forte, créative et mémorable.",
    points: [
      'Logos et chartes graphiques',
      'Visuels et contenus éditoriaux',
      'Image de marque originale',
    ],
  },
  {
    icon: Network,
    title: 'Externalisation de services',
    description:
      "Nous mettons à disposition notre expertise pour prendre en charge certaines missions techniques à coût compétitif.",
    points: [
      'Sous-traitance de missions ciblées',
      'Ressources et expertise dédiées',
      'Prestations fiables et rentables',
    ],
  },
]

const Services = () => {
  const [gridRef, gridInView] = useInView()

  return (
    <section>
      <Title
        title='Des expertises complémentaires pour des résultats concrets'
        eyebrow='Nos services'
        subtitle="De la stratégie à la production, Equilibre accompagne les entreprises avec des services complémentaires pour accélérer leur croissance digitale."
      />

      <div ref={gridRef} className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {services.map((service, i) => (
          <article
            key={service.title}
            style={{ animationDelay: `${i * 90}ms` }}
            className={`glass-card elegant-card eq-card min-w-0 overflow-hidden flex min-h-[290px] flex-col rounded-[1.7rem] p-5 md:min-h-[320px] md:p-7 ${
              gridInView ? 'anim-fade-up' : 'opacity-0'
            }`}
          >
            <div className='flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-[linear-gradient(135deg,#0E53B7_0%,#1765D4_72%,#E50012_100%)] text-white shadow-[0_18px_40px_-25px_rgba(14,83,183,0.35)]'>
              <service.icon className='h-6 w-6' />
            </div>
            <h3 className='mt-5 max-w-full text-[1.35rem] font-semibold leading-[1.2] text-[#000000] break-words md:mt-6 md:max-w-[16rem] md:text-[1.55rem]'>
              {service.title}
            </h3>
            <p className='mt-4 break-words text-sm leading-7 text-[#4B5563]'>{service.description}</p>
            <div className='mt-5 space-y-2'>
              {service.points.map((point, pointIndex) => (
                <div key={point} className='flex min-w-0 items-start gap-2 text-sm leading-6 text-[#4B5563]'>
                  <span className={`mt-2 h-1.5 w-1.5 rounded-full ${pointIndex === 1 ? 'bg-[#E50012]' : 'bg-[#0E53B7]'}`} />
                  <span className='break-words'>{point}</span>
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
