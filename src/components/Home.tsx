import {
  ArrowRight,
  Code2,
  Cog,
  LineChart,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import homeImage from '../assets/img/home.jpeg'
import { useInView } from '../hooks/useInView'

const miniStats = [
  { value: 'API', label: 'integrations fluides' },
  { value: 'Auto', label: 'processus simplifies' },
  { value: 'Web', label: 'presence renforcee' },
]

const heroCards = [
  {
    icon: Code2,
    title: 'API',
    text: 'Connectez vos applications en toute simplicite.',
    color: 'bg-[#0E53B7]',
    className: 'lg:absolute lg:left-0 lg:top-14',
  },
  {
    icon: Cog,
    title: 'Automatisation',
    text: 'Automatisez vos taches repetitives et gagnez du temps.',
    color: 'bg-[#E50012]',
    className: 'lg:absolute lg:right-0 lg:top-8',
  },
  {
    icon: LineChart,
    title: 'Visibilite numerique',
    text: 'Attirez plus de clients et developpez votre presence en ligne.',
    color: 'bg-[#0B47A1]',
    className: 'sm:col-span-2 lg:absolute lg:bottom-12 lg:right-10 lg:col-span-1',
  },
]

const Home = () => {
  const [visualRef, visualInView] = useInView(0.18)

  return (
    <section className='eq-grid-texture relative overflow-hidden rounded-[2.2rem] border border-[#0E53B7]/12 bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_56%,#ffffff_100%)] shadow-[0_35px_90px_-50px_rgba(14,83,183,0.24)]'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(14,83,183,0.1),transparent_18%),radial-gradient(circle_at_88%_18%,rgba(229,0,18,0.08),transparent_14%),radial-gradient(circle_at_76%_76%,rgba(14,83,183,0.08),transparent_18%)]' />
      <div className='absolute -left-14 top-10 h-52 w-52 rounded-full bg-[#0E53B7]/6 blur-3xl' />
      <div className='absolute -right-12 bottom-10 h-48 w-48 rounded-full bg-[#E50012]/6 blur-3xl' />

      <div className='grid items-center gap-10 px-5 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-14 xl:px-12'>
        <div className='relative z-10 max-w-2xl lg:pr-4'>
          <div className='hero-eyebrow inline-flex items-center gap-2 rounded-full border border-[#0E53B7]/12 bg-white px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#0E53B7] shadow-[0_16px_36px_-26px_rgba(14,83,183,0.26)]'>
            <Sparkles className='h-4 w-4 text-[#E50012]' />
            Equilibre Agency
          </div>

          <h1 className='hero-title mt-6 max-w-[12ch] text-[2.35rem] font-bold leading-[1.04] text-[#000000] sm:text-[3.1rem] lg:max-w-[11.5ch] lg:text-[4.15rem]'>
            Des solutions numeriques
            <br />
            equilibrees pour faire
            <br />
            <span className='eq-accent-text'>evoluer</span> votre entreprise
          </h1>

          <p className='hero-sub mt-5 max-w-[35rem] text-[0.95rem] leading-7 text-[#4B5563] lg:mt-7 lg:text-[1.05rem] lg:leading-8'>
            Nous accompagnons les entreprises avec des solutions innovantes en API,
            automatisation et visibilite numerique pour gagner en efficacite, en
            performance et en impact.
          </p>

          <div className='hero-meta mt-5 grid gap-3 sm:grid-cols-3 lg:mt-7 lg:flex lg:flex-wrap'>
            {miniStats.map((item) => (
              <div
                key={item.value}
                className='rounded-[1.15rem] border border-[#0E53B7]/12 bg-white px-4 py-3 text-center shadow-[0_18px_38px_-30px_rgba(14,83,183,0.18)] sm:text-left'
              >
                <p className='text-sm font-semibold text-[#000000]'>{item.value}</p>
                <p className='mt-1 text-xs uppercase tracking-[0.16em] text-[#6B7280]'>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className='hero-cta mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-9'>
            <a
              href='#services'
              className='eq-button-primary inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110'
            >
              Decouvrir nos services
              <ArrowRight className='h-4 w-4' />
            </a>

            <a
              href='#contact'
              className='eq-button-secondary inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#0E53B7] transition hover:border-[#0E53B7]/40 hover:bg-[#0E53B7]/5'
            >
              <MessageCircle className='h-4 w-4' />
              Nous contacter
            </a>
          </div>

        </div>

        <div ref={visualRef} className='relative'>
          <div className='relative mx-auto w-full max-w-[41rem] rounded-[2rem] border border-[#0E53B7]/12 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] px-4 pb-4 pt-5 shadow-[0_30px_70px_-42px_rgba(14,83,183,0.28)] sm:px-6 sm:pb-6 lg:min-h-[42rem] lg:px-8 lg:pb-8 lg:pt-8'>
            <div className='absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_60%_30%,rgba(14,83,183,0.08),transparent_22%),radial-gradient(circle_at_50%_82%,rgba(229,0,18,0.06),transparent_18%)]' />
            <div className='absolute left-1/2 top-[52%] h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0E53B7]/10 blur-3xl sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px]' />
            <div className='absolute left-1/2 top-[52%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0E53B7]/10 sm:h-[360px] sm:w-[360px] lg:h-[500px] lg:w-[500px]' />
            <div className='absolute inset-x-8 bottom-12 hidden h-px border-t border-dashed border-[#0E53B7]/18 lg:block' />

            <div className='relative z-10 mx-auto mt-4 w-full max-w-[320px] rounded-[2rem] bg-white p-3 shadow-[0_24px_52px_-34px_rgba(14,83,183,0.24)] sm:max-w-[420px] lg:mt-10 lg:max-w-[520px]'>
              <img
                src={homeImage}
                alt='Illustration des solutions numeriques Equilibre'
                className={`mx-auto w-full rounded-[1.5rem] object-cover ${
                  visualInView ? 'anim-image-in' : 'opacity-0'
                }`}
              />
            </div>

            <div className='relative z-20 mt-5 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:block'>
              {heroCards.map(({ icon: Icon, title, text, className, color }, index) => (
                <article
                  key={title}
                  style={{ animationDelay: `${index * 140}ms` }}
                  className={`max-w-none rounded-[1.35rem] border border-white/80 bg-white p-4 shadow-[0_24px_55px_-36px_rgba(14,83,183,0.22)] lg:max-w-[220px] lg:p-5 ${
                    visualInView ? 'anim-image-in' : 'opacity-0'
                  } ${className}`}
                >
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-[1rem] ${color} text-white`}>
                    <Icon className='h-6 w-6' />
                  </span>
                  <h3 className='mt-3 text-[0.98rem] font-semibold text-[#000000] lg:mt-4 lg:text-lg'>{title}</h3>
                  <p className='mt-2 text-sm leading-6 text-[#4B5563]'>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
