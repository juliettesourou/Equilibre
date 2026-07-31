import { ArrowRight, Mail, Globe2, GraduationCap } from "lucide-react";
import imaa from "../assets/img/profill.jpeg";
import background from "../assets/img/ecosysteme.jpg";

const socials = [
  {
    icon: Globe2,
    href: "https://www.linkedin.com/in/houeto-floriane-224b12374",
    label: "LinkedIn",
  },
  {
    icon: GraduationCap,
    href: "https://scholar.google.com/citations?user=4QMWA4oAAAAJ&hl=fr",
    label: "Scholar",
  },
  {
    icon: Mail,
    href: "mailto:houetoflori@gmail.com",
    label: "Email",
  },
];

const Home = () => {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[#DDEEE8] bg-white shadow-[0_30px_80px_-48px_rgba(13,74,58,0.45)]">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#EFF8F4] to-transparent"></div>

      <div className="grid items-center gap-8 px-6 py-10 md:grid-cols-[0.95fr_1.05fr] md:px-10 md:py-14">

        {/* Texte */}
        <div className="relative z-10">
          <div className="flex items-start gap-4">

            <div className="hidden flex-col gap-3 pt-12 md:flex">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D8EBE3] bg-white text-[#0E6B54] shadow-sm transition hover:-translate-y-1 hover:border-[#0E6B54]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="max-w-xl">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2D5F50]">
                Docteure en Sciences Biologiques
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-tight text-[#11372D] md:text-6xl">
                Dr Madel Floriane
                <br />
                <span className="text-[#0E6B54]">Adjibayo</span>
              </h1>

              <p className="mt-6 text-xl font-semibold leading-relaxed text-[#1E6C58]">
                Écologie évolutive et fonctionnelle • Écologie aquatique •
                Biologie des organismes
              </p>

              <p className="mt-6 text-lg leading-8 text-[#4C675E]">
                Docteure en sciences biologiques, spécialisée en écologie
                évolutive et fonctionnelle. Mes recherches portent sur les
                organismes aquatiques, leurs interactions avec leur
                environnement et leur capacité d’adaptation aux changements
                environnementaux, afin de contribuer à la conservation de la
                biodiversité et à la gestion durable des écosystèmes.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0E6B54] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0B5643]"
                >
                  Découvrir mon parcours
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D7E8E0] bg-white px-7 py-3 text-sm font-semibold text-[#19483C] transition hover:border-[#0E6B54] hover:text-[#0E6B54]"
                >
                  <Mail className="h-4 w-4" />
                  Me contacter
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] md:min-h-[550px]">

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-[#0E6B54]/20"></div>

          <div className="absolute -left-24 top-8 h-[82%] w-[72%] rounded-r-[12rem] rounded-l-[8rem] border-2 border-[#139173]/30 bg-white/50 backdrop-blur-sm"></div>

          <div className="absolute bottom-0 right-8 z-10 w-[72%] max-w-[420px]">
            <img
              src={imaa}
              alt="Dr Madel Floriane Adjibayo"
              className="w-full object-contain object-bottom"
            />
          </div>

          <div className="absolute bottom-6 left-6 z-20 max-w-[230px] rounded-2xl border border-white/60 bg-white/80 p-5 backdrop-blur-md shadow-xl">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0E6B54]">
              Axes de recherche
            </p>

            <p className="mt-3 text-sm leading-6 text-[#31594D]">
              Biodiversité • Écologie aquatique • Écologie fonctionnelle •
              Conservation des écosystèmes.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;
