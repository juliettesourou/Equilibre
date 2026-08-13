import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { companyName, services, type ServiceItem } from '../data/siteContent'

type ServiceDetailPageProps = {
  service: ServiceItem
}

const ServiceDetailPage = ({ service }: ServiceDetailPageProps) => {
  const Icon = service.icon
  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <main className='section-shell section-block'>
      <section className='eq-card overflow-hidden rounded-[2rem] p-6 shadow-[0_26px_60px_-42px_rgba(14,83,183,0.2)] md:p-8 lg:p-10'>
        <a
          href='/#services'
          className='inline-flex items-center gap-2 text-sm font-semibold text-[#0E53B7] transition hover:text-[#E50012]'
        >
          <ArrowLeft className='h-4 w-4' />
          Retour aux services
        </a>

        <div className='mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]'>
          <div>
            <span className='inline-flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-[linear-gradient(135deg,#0E53B7_0%,#1765D4_72%,#E50012_100%)] text-white shadow-[0_18px_40px_-25px_rgba(14,83,183,0.35)]'>
              <Icon className='h-7 w-7' />
            </span>
            <p className='mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#E50012]'>
              {companyName}
            </p>
            <h1 className='mt-3 max-w-[14ch] text-4xl font-semibold leading-[1.08] text-[#000000] md:text-5xl'>
              {service.title}
            </h1>
            <p className='mt-5 max-w-2xl text-base leading-8 text-[#4B5563]'>
              {service.description}
            </p>

            <div className='mt-8 grid gap-4 md:grid-cols-3'>
              {service.benefits.map((benefit) => (
                <div key={benefit} className='eq-outline-card rounded-[1.3rem] px-5 py-4 text-sm font-medium text-[#0E53B7]'>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className='eq-outline-card rounded-[1.6rem] p-6'>
            <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#0E53B7]'>
              Ce que nous faisons
            </p>
            <div className='mt-5 space-y-4'>
              {service.details.map((detail) => (
                <div key={detail} className='flex items-start gap-3 text-sm leading-7 text-[#4B5563]'>
                  <CheckCircle2 className='mt-1 h-4 w-4 shrink-0 text-[#E50012]' />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='mt-10'>
        <div className='flex items-end justify-between gap-4'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[#E50012]'>
              Services connexes
            </p>
            <h2 className='mt-3 text-3xl font-semibold text-[#000000]'>
              D’autres expertises utiles pour votre croissance
            </h2>
          </div>
          <a
            href='/#contact'
            className='eq-button-secondary hidden rounded-full px-5 py-3 text-sm font-semibold text-[#0E53B7] md:inline-flex'
          >
            Nous parler de votre projet
          </a>
        </div>

        <div className='mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {otherServices.map((item) => {
            const RelatedIcon = item.icon
            return (
              <article key={item.slug} className='eq-card rounded-[1.7rem] p-6'>
                <span className='inline-flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#0E53B7]/10 text-[#0E53B7]'>
                  <RelatedIcon className='h-5 w-5' />
                </span>
                <h3 className='mt-4 text-xl font-semibold text-[#000000]'>{item.title}</h3>
                <p className='mt-3 text-sm leading-7 text-[#4B5563]'>{item.description}</p>
                <a
                  href={`/services/${item.slug}`}
                  className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0E53B7] transition hover:text-[#E50012]'
                >
                  Voir le service
                  <ArrowRight className='h-4 w-4' />
                </a>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default ServiceDetailPage
