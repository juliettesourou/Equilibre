type LegalPageProps = {
  title: string
  intro: string
  sections: Array<{ title: string; text: string }>
}

const LegalPage = ({ title, intro, sections }: LegalPageProps) => (
  <main className='section-shell section-block'>
    <section className='eq-card rounded-[2rem] p-6 shadow-[0_26px_60px_-42px_rgba(14,83,183,0.2)] md:p-8 lg:p-10'>
      <a href='/' className='text-sm font-semibold text-[#0E53B7] transition hover:text-[#E50012]'>
        Retour à l’accueil
      </a>
      <p className='mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#E50012]'>
        Informations légales
      </p>
      <h1 className='mt-3 text-4xl font-semibold text-[#000000] md:text-5xl'>{title}</h1>
      <p className='mt-5 max-w-3xl text-base leading-8 text-[#4B5563]'>{intro}</p>

      <div className='mt-10 grid gap-5'>
        {sections.map((section) => (
          <article key={section.title} className='eq-outline-card rounded-[1.5rem] p-6'>
            <h2 className='text-xl font-semibold text-[#000000]'>{section.title}</h2>
            <p className='mt-3 text-sm leading-7 text-[#4B5563]'>{section.text}</p>
          </article>
        ))}
      </div>
    </section>
  </main>
)

export default LegalPage
