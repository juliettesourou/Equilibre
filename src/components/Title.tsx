import { useInView } from '../hooks/useInView'

interface TitleProps {
  title: string
  id?: string
  eyebrow?: string
  subtitle?: string
  tone?: 'dark' | 'light'
}

const Title = ({ title, id, eyebrow, subtitle, tone = 'dark' }: TitleProps) => {
  const [ref, inView] = useInView(0.2)
  const eyebrowClass =
    tone === 'light' ? 'text-[#0E53B7]' : 'text-[#E50012]'
  const lineClass = tone === 'light' ? 'bg-[#0E53B7]' : 'bg-[#0E53B7]'
  const titleClass = tone === 'light' ? 'text-[#000000]' : 'text-[#000000]'
  const subtitleClass = tone === 'light' ? 'text-[#4B5563]' : 'text-[#4B5563]'

  return (
    <div
      ref={ref}
      className={`mb-10 min-w-0 text-center md:mb-14 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
    >
      <div className='mb-4 flex min-w-0 items-center justify-center gap-2 sm:gap-3 md:gap-4'>
        <span className={`h-px w-5 shrink-0 sm:w-6 md:w-10 ${lineClass}`} />
        <p className={`max-w-full break-words text-[0.62rem] font-semibold uppercase tracking-[0.18em] sm:text-[0.68rem] sm:tracking-[0.28em] md:text-xs md:tracking-[0.4em] ${eyebrowClass}`}>
          {eyebrow || title}
        </p>
        <span className={`h-px w-5 shrink-0 sm:w-6 md:w-10 ${lineClass}`} />
      </div>
      <h2 id={id} className={`mx-auto max-w-[12ch] break-words text-[1.55rem] font-semibold leading-[1.12] sm:max-w-[14ch] sm:text-[1.9rem] md:max-w-[18ch] md:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl px-2 text-sm leading-7 md:px-0 md:text-base ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default Title
