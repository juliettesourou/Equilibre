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
      className={`mb-10 text-center md:mb-14 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
    >
      <div className='mb-4 flex items-center justify-center gap-3 md:gap-4'>
        <span className={`h-px w-6 md:w-10 ${lineClass}`} />
        <p className={`text-[0.68rem] font-semibold uppercase tracking-[0.28em] md:text-xs md:tracking-[0.4em] ${eyebrowClass}`}>
          {eyebrow || title}
        </p>
        <span className={`h-px w-6 md:w-10 ${lineClass}`} />
      </div>
      <h2 id={id} className={`text-[1.9rem] font-semibold leading-tight md:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl px-1 text-sm leading-7 md:px-0 md:text-base ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default Title
