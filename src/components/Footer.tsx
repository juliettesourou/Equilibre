const Footer = () => (
  <footer className='border-t border-white/10 bg-[#083B30] py-5'>
    <div className='section-shell flex flex-col items-center justify-between gap-4 sm:flex-row'>
      <span className='text-sm text-[#BFE5D8]'>Portfolio scientifique</span>
      <p className='text-sm text-[#9FB8AF]'>
        © {new Date().getFullYear()} Dr Madel Floriane Adjibayo. Tous droits reserves.
      </p>
    </div>
  </footer>
)

export default Footer
