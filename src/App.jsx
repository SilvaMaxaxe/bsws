import { useEffect, useState } from "react"

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("site-language") || null
  })

  const [typedName, setTypedName] = useState("")

  // Efeito de escrita/apagamento do nome
  useEffect(() => {
    const fullName = "Silva Maxaxe"

    let index = 0
    let deleting = false
    let timeoutId

    const type = () => {
      if (!deleting) {
        index += 1
        setTypedName(fullName.slice(0, index))

        if (index === fullName.length) {
          deleting = true

          // Mantém o nome completo visível por um momento
          timeoutId = setTimeout(type, 1800)
          return
        }

        // Velocidade ao escrever
        timeoutId = setTimeout(type, 140)
      } else {
        index -= 1
        setTypedName(fullName.slice(0, index))

        if (index === 0) {
          deleting = false

          // Pequena pausa antes de começar novamente
          timeoutId = setTimeout(type, 500)
          return
        }

        // Velocidade ao apagar
        timeoutId = setTimeout(type, 80)
      }
    }

    // Pequeno atraso inicial
    timeoutId = setTimeout(type, 500)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (language) {
      localStorage.setItem("site-language", language)
    }
  }, [language])

  const isPortuguese = language === "pt"

  const changeLanguage = (lang) => {
    setLanguage(lang)
    window.scrollTo(0, 0)
  }

  const content = isPortuguese
    ? {
        nav: {
          home: "Início",
          about: "Sobre mim",
          services: "Serviços",
          contact: "Contacto",
          language: "Idioma",
        },

        hero: {
          badge: "BSWS · BUSINESS SOFTWARE SOLUTIONS",
          slogan: "Smart Solutions for Modern Business",
          greeting: "Olá, eu sou",
          name: "Silva Maxaxe",
          aka: "AKA: Rich Dot Com",
          description:
            "Crio soluções digitais, apoio técnico e serviços profissionais para pessoas, empresas e projectos que procuram trabalhar de forma mais simples, rápida e eficiente.",
          services: "Ver serviços",
          contact: "Entrar em contacto",
        },

        about: {
          label: "SOBRE MIM",
          title: "Tecnologia, criatividade e soluções práticas.",
          text1:
            "Sou Silva Maxaxe, também conhecido como Rich Dot Com. Disponibilizo soluções digitais, apoio informático, tradução, inteligência artificial, revisão de conteúdos e assistência administrativa.",
          text2:
            "O meu objectivo é transformar necessidades em soluções simples, funcionais e profissionais, ajudando pessoas e empresas a poupar tempo e a melhorar a sua produtividade digital.",
        },

        services: {
          label: "SERVIÇOS",
          title: "Soluções para diferentes necessidades.",
          items: [
            {
              icon: "💻",
              title: "Informática e Tecnologia",
              description:
                "Apoio informático, configuração, manutenção e soluções tecnológicas.",
            },
            {
              icon: "🌍",
              title: "Tradução e Inglês",
              description:
                "Tradução, revisão e apoio linguístico entre Português e Inglês.",
            },
            {
              icon: "🤖",
              title: "Inteligência Artificial",
              description:
                "Utilização de ferramentas de IA para produtividade, conteúdo e soluções digitais.",
            },
            {
              icon: "📝",
              title: "Revisão de Conteúdo",
              description:
                "Revisão, correcção e melhoria de textos, documentos e conteúdos digitais.",
            },
            {
              icon: "📊",
              title: "Assistência Administrativa",
              description:
                "Apoio na organização de documentos, dados e tarefas administrativas.",
            },
            {
              icon: "🚀",
              title: "Projectos Digitais",
              description:
                "Criação e apoio em websites, projectos online e soluções digitais.",
            },
          ],
        },

        contact: {
          label: "CONTACTO",
          title: "Vamos trabalhar juntos.",
          address: "Maputo, Magoanine B, Moçambique",
          phone: "Telefone",
          email: "Email",
          whatsapp: "WhatsApp",
          social: "Redes sociais",
        },

        address: {
          label: "ENDEREÇO",
          title: "Onde me encontrar",
          location: "Maputo, Magoanine B, Moçambique",
          button: "Abrir no Google Maps",
        },

        footer: {
          copyright: "© 2026 Silva Maxaxe · AKA: Rich Dot Com",
          language: "Idioma",
        },
      }
    : {
        nav: {
          home: "Home",
          about: "About me",
          services: "Services",
          contact: "Contact",
          language: "Language",
        },

        hero: {
          badge: "BSWS · BUSINESS SOFTWARE SOLUTIONS",
          slogan: "Smart Solutions for Modern Business",
          greeting: "Hello, I'm",
          name: "Silva Maxaxe",
          aka: "AKA: Rich Dot Com",
          description:
            "I create digital solutions, technical support and professional services for people, businesses and projects looking to work in a simpler, faster and more efficient way.",
          services: "View services",
          contact: "Get in touch",
        },

        about: {
          label: "ABOUT ME",
          title: "Technology, creativity and practical solutions.",
          text1:
            "I'm Silva Maxaxe, also known as Rich Dot Com. I provide digital solutions, IT support, translation, artificial intelligence, content review and administrative assistance.",
          text2:
            "My goal is to turn needs into simple, functional and professional solutions, helping individuals and businesses save time and improve their digital productivity.",
        },

        services: {
          label: "SERVICES",
          title: "Solutions for different needs.",
          items: [
            {
              icon: "💻",
              title: "IT & Technology",
              description:
                "IT support, configuration, maintenance and technology solutions.",
            },
            {
              icon: "🌍",
              title: "Translation & English",
              description:
                "Translation, proofreading and language support between Portuguese and English.",
            },
            {
              icon: "🤖",
              title: "Artificial Intelligence",
              description:
                "Using AI tools for productivity, content and digital solutions.",
            },
            {
              icon: "📝",
              title: "Content Review",
              description:
                "Reviewing, correcting and improving texts, documents and digital content.",
            },
            {
              icon: "📊",
              title: "Administrative Support",
              description:
                "Support with document organization, data and administrative tasks.",
            },
            {
              icon: "🚀",
              title: "Digital Projects",
              description:
                "Creation and support for websites, online projects and digital solutions.",
            },
          ],
        },

        contact: {
          label: "CONTACT",
          title: "Let's work together.",
          address: "Maputo, Magoanine B, Mozambique",
          phone: "Phone",
          email: "Email",
          whatsapp: "WhatsApp",
          social: "Social media",
        },

        address: {
          label: "ADDRESS",
          title: "Where to find me",
          location: "Maputo, Magoanine B, Mozambique",
          button: "Open in Google Maps",
        },

        footer: {
          copyright: "© 2026 Silva Maxaxe · AKA: Rich Dot Com",
          language: "Language",
        },
      }

  if (!language) {
    return (
      <main className="min-h-screen overflow-hidden bg-[#030712] text-white">
        <div className="relative flex min-h-screen items-center justify-center px-6 py-12">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:45px_45px]" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative z-10 w-full max-w-xl text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_50px_rgba(34,211,238,0.15)]">
              <span className="text-2xl font-black text-cyan-300">SM</span>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Silva Maxaxe
            </p>

            <p className="mt-2 text-sm text-slate-500">
              AKA: Rich Dot Com
            </p>

            <h1 className="mt-10 text-4xl font-black tracking-tight sm:text-6xl">
              Bem-vindo
              <span className="block bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Welcome
              </span>
            </h1>

            <p className="mt-5 text-slate-400">
              Escolha o idioma / Choose your language
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <button
                onClick={() => changeLanguage("pt")}
                className="group rounded-2xl border border-cyan-400/20 bg-white/[0.03] px-6 py-5 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/10"
              >
                <span className="text-lg font-bold">Português</span>

                <span className="mt-3 flex items-center justify-between text-sm text-slate-500">
                  Continuar
                  <span className="text-xl text-cyan-400 transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

              <button
                onClick={() => changeLanguage("en")}
                className="group rounded-2xl border border-blue-400/20 bg-white/[0.03] px-6 py-5 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-400/10"
              >
                <span className="text-lg font-bold">English</span>

                <span className="mt-3 flex items-center justify-between text-sm text-slate-500">
                  Continue
                  <span className="text-xl text-blue-400 transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </div>

            <p className="mt-12 text-xs text-slate-600">
              Silva Maxaxe · Rich Dot Com
            </p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030712] text-white">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <span className="text-sm font-black text-cyan-300">SM</span>
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold">Silva Maxaxe</p>
              <p className="text-[10px] text-slate-500">
                AKA: Rich Dot Com
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#home"
              className="text-sm text-slate-400 transition hover:text-cyan-300"
            >
              {content.nav.home}
            </a>

            <a
              href="#about"
              className="text-sm text-slate-400 transition hover:text-cyan-300"
            >
              {content.nav.about}
            </a>

            <a
              href="#services"
              className="text-sm text-slate-400 transition hover:text-cyan-300"
            >
              {content.nav.services}
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-400 transition hover:text-cyan-300"
            >
              {content.nav.contact}
            </a>
          </nav>

          <button
            onClick={() => changeLanguage(isPortuguese ? "en" : "pt")}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
          >
            {content.nav.language}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-24"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-bold tracking-wider text-cyan-300">
              <div className="flex flex-col">
                <span>{content.hero.badge}</span>

                <span className="mt-1 text-[10px] font-medium tracking-[0.12em] text-cyan-400/80">
                  {content.hero.slogan}
                </span>
              </div>
            </div>

            <p className="mt-8 text-lg font-medium text-slate-400">
              {content.hero.greeting}
            </p>

            {/* NOME COM EFEITO LIVE */}
            <h1 className="mt-3 min-h-[1.25em] text-5xl font-black tracking-tight sm:text-7xl">
              <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                {typedName}
              </span>

              <span className="ml-1 inline-block text-cyan-400 animate-pulse">
                |
              </span>
            </h1>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400/80">
              {content.hero.aka}
            </p>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              {content.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                {content.hero.services}
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                {content.hero.contact}
              </a>
            </div>
          </div>

          {/* DIGITAL COMPUTER VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-10 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative rounded-3xl border border-cyan-400/20 bg-slate-950/80 p-5 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>

              <div className="flex min-h-[350px] items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-400/5 shadow-[0_0_60px_rgba(34,211,238,0.12)]">
                    <span className="text-4xl font-black text-cyan-300">
                      SM
                    </span>
                  </div>

                  <h2 className="mt-8 text-2xl font-black text-white">
                    Silva Maxaxe
                  </h2>

                  <p className="mt-2 text-sm text-cyan-400">
                    Rich Dot Com
                  </p>
                </div>
              </div>

              <div className="h-2 rounded-full bg-cyan-400/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/5 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold tracking-[0.3em] text-cyan-400">
            {content.about.label}
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
            {content.about.title}
          </h2>

          <div className="mt-8 grid gap-6 text-base leading-8 text-slate-400 sm:grid-cols-2">
            <p>{content.about.text1}</p>
            <p>{content.about.text2}</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-t border-white/5 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold tracking-[0.3em] text-cyan-400">
            {content.services.label}
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            {content.services.title}
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.items.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >
                <div className="text-3xl">{item.icon}</div>

                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/5 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold tracking-[0.3em] text-cyan-400">
            {content.contact.label}
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            {content.contact.title}
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href="tel:+258875088297"
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
            >
              <p className="text-xs uppercase tracking-wider text-slate-500">
                {content.contact.phone}
              </p>

              <p className="mt-2 font-semibold text-white">
                +258 875 088 297
              </p>
            </a>

            <a
              href="tel:+258841345529"
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
            >
              <p className="text-xs uppercase tracking-wider text-slate-500">
                {content.contact.phone}
              </p>

              <p className="mt-2 font-semibold text-white">
                +258 841 345 529
              </p>
            </a>

            <a
              href="mailto:smaxaxe@gmail.com"
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
            >
              <p className="text-xs uppercase tracking-wider text-slate-500">
                {content.contact.email}
              </p>

              <p className="mt-2 break-all font-semibold text-white">
                smaxaxe@gmail.com
              </p>
            </a>

            <a
              href="mailto:smaxaxe@hotmail.com"
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
            >
              <p className="text-xs uppercase tracking-wider text-slate-500">
                {content.contact.email}
              </p>

              <p className="mt-2 break-all font-semibold text-white">
                smaxaxe@hotmail.com
              </p>
            </a>

            <a
              href="https://wa.me/258875088297"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-green-400/30 hover:bg-green-400/[0.04]"
            >
              <p className="text-xs uppercase tracking-wider text-slate-500">
                {content.contact.whatsapp}
              </p>

              <p className="mt-2 font-semibold text-white">
                +258 875 088 297
              </p>
            </a>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                {content.contact.social}
              </p>

              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/silvaasahdkhaled"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 transition hover:text-cyan-300"
                >
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/smaxaxe/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 transition hover:text-cyan-300"
                >
                  Instagram
                </a>

                <a
                  href="https://github.com/SilvaMaxaxe"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 transition hover:text-cyan-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDRESS */}
      <section className="border-t border-white/5 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold tracking-[0.3em] text-cyan-400">
            {content.address.label}
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            {content.address.title}
          </h2>

          <div className="mt-8 rounded-3xl border border-white/5 bg-white/[0.02] p-8">
            <p className="text-lg font-semibold text-white">
              {content.address.location}
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Maputo+Magoanine+B+Mozambique"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              {content.address.button}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-bold">Silva Maxaxe</p>

            <p className="mt-1 text-xs text-slate-500">
              AKA: Rich Dot Com
            </p>
          </div>

          <p className="text-xs text-slate-600">
            {content.footer.copyright}
          </p>

          <button
            onClick={() => changeLanguage(isPortuguese ? "en" : "pt")}
            className="text-xs font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            {content.footer.language}
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App