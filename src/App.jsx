import { useEffect, useState } from "react"

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("site-language") || null
  })

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
          address: "Endereço",
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
          paragraph1:
            "Sou Silva Maxaxe, também conhecido como Rich Dot Com. Disponibilizo soluções digitais, apoio informático, tradução, inteligência artificial, revisão de conteúdos e assistência administrativa.",
          paragraph2:
            "O meu objectivo é transformar necessidades em soluções simples, funcionais e profissionais, ajudando pessoas e empresas a poupar tempo e a melhorar a sua produtividade digital.",
        },

        services: {
          label: "SERVIÇOS",
          title: "Como posso ajudar",
          description:
            "Serviços digitais pensados para responder às necessidades de pessoas, profissionais e empresas.",

          items: [
            {
              icon: "💻",
              title: "Informática e Tecnologia",
              text:
                "Apoio informático, configuração, resolução de problemas e assistência com computadores e ferramentas digitais.",
            },
            {
              icon: "🌍",
              title: "Tradução e Inglês",
              text:
                "Tradução, revisão e adaptação de conteúdos entre Português e Inglês.",
            },
            {
              icon: "🤖",
              title: "Inteligência Artificial",
              text:
                "Utilização de ferramentas de IA para produtividade, pesquisa, criação de conteúdos e optimização de tarefas.",
            },
            {
              icon: "📝",
              title: "Revisão de Conteúdo",
              text:
                "Revisão, correcção e melhoria de textos, documentos e conteúdos digitais.",
            },
            {
              icon: "📊",
              title: "Assistência Administrativa",
              text:
                "Apoio na organização, documentação, pesquisa, introdução de dados e tarefas administrativas digitais.",
            },
            {
              icon: "🚀",
              title: "Projectos Digitais",
              text:
                "Criação e apoio em websites, páginas digitais e outras soluções para presença online.",
            },
          ],
        },

        contact: {
          label: "CONTACTO",
          title: "Tem um projecto em mente?",
          description:
            "Fale comigo sobre o seu projecto, necessidade ou ideia. Vamos encontrar uma solução adequada.",

          address: "Endereço",
          addressText: "Maputo, Magoanine B, Moçambique",

          phone: "Telefone",
          phone1: "+258 875 088 297",
          phone2: "+258 841 345 529",

          emailTitle: "Email",
          email1: "smaxaxe@gmail.com",
          email2: "smaxaxe@hotmail.com",

          whatsapp: "Falar pelo WhatsApp",
          email: "Enviar e-mail",
          facebook: "Facebook",
          instagram: "Instagram",
          github: "GitHub",
        },

        address: {
          label: "ENDEREÇO",
          title: "Onde me encontrar",
          text: "Maputo, Magoanine B, Moçambique",
        },

        footer: "© 2026 Silva Maxaxe · AKA: Rich Dot Com",

        language: "Idioma",
        changeLanguage: "Mudar idioma",
      }
    : {
        nav: {
          home: "Home",
          about: "About Me",
          services: "Services",
          contact: "Contact",
          address: "Address",
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
          paragraph1:
            "I'm Silva Maxaxe, also known as Rich Dot Com. I provide digital solutions, IT support, translation, artificial intelligence, content review and administrative assistance.",
          paragraph2:
            "My goal is to turn needs into simple, functional and professional solutions, helping individuals and businesses save time and improve their digital productivity.",
        },

        services: {
          label: "SERVICES",
          title: "How I can help",
          description:
            "Digital services designed to meet the needs of individuals, professionals and businesses.",

          items: [
            {
              icon: "💻",
              title: "IT & Technology",
              text:
                "IT support, configuration, troubleshooting and assistance with computers and digital tools.",
            },
            {
              icon: "🌍",
              title: "Translation & English",
              text:
                "Translation, proofreading and adaptation of content between Portuguese and English.",
            },
            {
              icon: "🤖",
              title: "Artificial Intelligence",
              text:
                "Using AI tools for productivity, research, content creation and task optimisation.",
            },
            {
              icon: "📝",
              title: "Content Review",
              text:
                "Reviewing, correcting and improving texts, documents and digital content.",
            },
            {
              icon: "📊",
              title: "Administrative Support",
              text:
                "Support with organisation, documentation, research, data entry and digital administrative tasks.",
            },
            {
              icon: "🚀",
              title: "Digital Projects",
              text:
                "Creation and support for websites, digital pages and other online solutions.",
            },
          ],
        },

        contact: {
          label: "CONTACT",
          title: "Have a project in mind?",
          description:
            "Let's talk about your project, need or idea. Together we can find the right solution.",

          address: "Address",
          addressText: "Maputo, Magoanine B, Mozambique",

          phone: "Phone",
          phone1: "+258 875 088 297",
          phone2: "+258 841 345 529",

          emailTitle: "Email",
          email1: "smaxaxe@gmail.com",
          email2: "smaxaxe@hotmail.com",

          whatsapp: "Chat on WhatsApp",
          email: "Send an email",
          facebook: "Facebook",
          instagram: "Instagram",
          github: "GitHub",
        },

        address: {
          label: "ADDRESS",
          title: "Where to find me",
          text: "Maputo, Magoanine B, Mozambique",
        },

        footer: "© 2026 Silva Maxaxe · AKA: Rich Dot Com",

        language: "Language",
        changeLanguage: "Change language",
      }

  // ============================================================
  // ECRÃ DE ESCOLHA DO IDIOMA
  // ============================================================

  if (!language) {
    return (
      <main className="min-h-screen overflow-hidden bg-[#030712] text-white">

        <div className="relative flex min-h-screen items-center justify-center px-5 py-12">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.15),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(37,99,235,0.15),transparent_30%)]" />

          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative z-10 w-full max-w-4xl">

            <div className="mb-12 text-center">

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-400/10 text-2xl font-black text-cyan-300 shadow-lg shadow-cyan-500/10">
                SM
              </div>

              <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
                Silva{" "}
                <span className="text-cyan-400">
                  Maxaxe
                </span>
              </h1>

              <p className="mt-4 text-lg text-slate-400">
                AKA:{" "}
                <span className="font-semibold text-white">
                  Rich Dot Com
                </span>
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-10">

              <div className="mb-8 text-center">

                <h2 className="text-2xl font-bold sm:text-3xl">
                  Bem-vindo / Welcome
                </h2>

                <p className="mt-3 text-slate-400">
                  Escolha o idioma / Choose your language
                </p>

              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <button
                  onClick={() => changeLanguage("pt")}
                  className="group rounded-2xl border border-white/10 bg-slate-900/70 p-8 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-xl hover:shadow-cyan-500/10"
                >

                  <div className="mb-6 flex items-center justify-end">

                    <span className="text-2xl text-cyan-400 transition group-hover:translate-x-2">
                      →
                    </span>

                  </div>

                  <h3 className="text-2xl font-bold">
                    Português
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Seleccionar idioma
                  </p>

                </button>


                <button
                  onClick={() => changeLanguage("en")}
                  className="group rounded-2xl border border-white/10 bg-slate-900/70 p-8 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-400/10 hover:shadow-xl hover:shadow-blue-500/10"
                >

                  <div className="mb-6 flex items-center justify-end">

                    <span className="text-2xl text-blue-400 transition group-hover:translate-x-2">
                      →
                    </span>

                  </div>

                  <h3 className="text-2xl font-bold">
                    English
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Select language
                  </p>

                </button>

              </div>

            </div>

            <p className="mt-8 text-center text-xs text-slate-600">
              Silva Maxaxe · Rich Dot Com
            </p>

          </div>

        </div>

      </main>
    )
  }

  // ============================================================
  // WEBSITE PRINCIPAL
  // ============================================================

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030712] text-white">

      {/* ========================================================
          NAVBAR
      ======================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          <a
            href="#home"
            className="flex items-center gap-3"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 font-black text-cyan-300">
              SM
            </div>

            <div className="hidden sm:block">

              <div className="font-bold leading-none">
                Silva Maxaxe
              </div>

              <div className="mt-1 text-xs text-slate-500">
                AKA: Rich Dot Com
              </div>

            </div>

          </a>


          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="#home"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {content.nav.home}
            </a>

            <a
              href="#about"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {content.nav.about}
            </a>

            <a
              href="#services"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {content.nav.services}
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {content.nav.contact}
            </a>

            <a
              href="#address"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {content.nav.address}
            </a>

          </nav>


          <button
            onClick={() => setLanguage(null)}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
          >
            {content.language}
          </button>

        </div>

      </header>


      {/* ========================================================
          HERO
      ======================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32 lg:px-8"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(6,182,212,0.14),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(37,99,235,0.16),transparent_30%)]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-cyan-300">

              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              <div className="flex flex-col">

                <span>
                  {content.hero.badge}
                </span>

                <span className="mt-1 text-[10px] font-medium tracking-[0.12em] text-cyan-400/80">
                  {content.hero.slogan}
                </span>

              </div>

            </div>

            <p className="mb-3 text-lg text-slate-400">
              {content.hero.greeting}
            </p>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

              Silva
              <br />

              <span className="text-cyan-400">
                Maxaxe
              </span>

            </h1>

            <p className="mt-5 text-lg font-semibold text-slate-300">
              {content.hero.aka}
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              {content.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="#services"
                className="rounded-xl bg-cyan-400 px-6 py-3.5 text-center font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                {content.hero.services}
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-center font-bold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                {content.hero.contact}
              </a>

            </div>

          </div>


          {/* COMPUTADOR */}

          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10 rounded-2xl border border-white/15 bg-slate-900/90 p-3 shadow-2xl shadow-cyan-950/40">

              <div className="flex items-center justify-between rounded-t-xl border-b border-white/10 bg-[#0b1220] px-4 py-3">

                <div className="flex gap-2">

                  <span className="h-3 w-3 rounded-full bg-red-400/80" />

                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />

                  <span className="h-3 w-3 rounded-full bg-green-400/80" />

                </div>

                <div className="h-2 w-20 rounded-full bg-white/5" />

                <div className="w-12" />

              </div>

              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-b-xl bg-[#020617] sm:min-h-[350px]">

                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative text-center">

                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-400/10 text-3xl font-black text-cyan-300 shadow-lg shadow-cyan-500/10">
                    SM
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    Silva Maxaxe
                  </h3>

                  <p className="mt-2 text-sm text-cyan-400">
                    Rich Dot Com
                  </p>

                  <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-cyan-400/60" />

                </div>

                <div className="absolute left-8 top-8 h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

                <div className="absolute right-10 top-12 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />

                <div className="absolute bottom-10 left-12 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />

                <div className="absolute bottom-8 right-8 h-2 w-2 animate-pulse rounded-full bg-blue-400" />

              </div>

            </div>

            <div className="relative z-10 mx-auto h-14 w-24 border-x border-white/10 bg-slate-800/80" />

            <div className="relative z-10 mx-auto h-3 w-48 rounded-full border border-white/10 bg-slate-700/80" />

          </div>

        </div>

      </section>


      {/* ========================================================
          SOBRE MIM
      ======================================================== */}

      <section
        id="about"
        className="border-t border-white/5 bg-slate-950/60 px-5 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-sm font-bold tracking-[0.2em] text-cyan-400">
                {content.about.label}
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                {content.about.title}
              </h2>

            </div>


            <div>

              <p className="text-lg leading-8 text-slate-400">
                {content.about.paragraph1}
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                {content.about.paragraph2}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================================
          SERVIÇOS
      ======================================================== */}

      <section
        id="services"
        className="relative overflow-hidden px-5 py-24 lg:px-8"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.08),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold tracking-[0.2em] text-cyan-400">
              {content.services.label}
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              {content.services.title}
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              {content.services.description}
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {content.services.items.map((service) => (

              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-2xl transition group-hover:border-cyan-400/30">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {service.text}
                </p>

                <div className="mt-6 text-cyan-400 opacity-0 transition group-hover:opacity-100">
                  →
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ========================================================
          CONTACTO
      ======================================================== */}

      <section
        id="contact"
        className="px-5 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-6xl">

          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8 sm:p-14">

            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">

              <div className="text-center">

                <p className="text-sm font-bold tracking-[0.2em] text-cyan-400">
                  {content.contact.label}
                </p>

                <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                  {content.contact.title}
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                  {content.contact.description}
                </p>

              </div>


              <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">

                {/* ENDEREÇO */}

                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">

                  <p className="text-sm font-semibold text-cyan-400">
                    {content.contact.address}
                  </p>

                  <p className="mt-3 leading-7 text-slate-300">
                    {content.contact.addressText}
                  </p>

                </div>


                {/* TELEFONE + EMAIL */}

                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">

                  <p className="text-sm font-semibold text-cyan-400">
                    {content.contact.phone}
                  </p>

                  <div className="mt-3 space-y-2">

                    <a
                      href="tel:+258875088297"
                      className="block text-slate-300 transition hover:text-cyan-400"
                    >
                      {content.contact.phone1}
                    </a>

                    <a
                      href="tel:+258841345529"
                      className="block text-slate-300 transition hover:text-cyan-400"
                    >
                      {content.contact.phone2}
                    </a>

                  </div>


                  <div className="my-5 border-t border-white/10" />


                  <p className="text-sm font-semibold text-cyan-400">
                    {content.contact.emailTitle}
                  </p>

                  <div className="mt-3 space-y-2">

                    <a
                      href="mailto:smaxaxe@gmail.com"
                      className="block break-all text-slate-300 transition hover:text-cyan-400"
                    >
                      {content.contact.email1}
                    </a>

                    <a
                      href="mailto:smaxaxe@hotmail.com"
                      className="block break-all text-slate-300 transition hover:text-cyan-400"
                    >
                      {content.contact.email2}
                    </a>

                  </div>

                </div>

              </div>


              {/* BOTÕES */}

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                <a
                  href="https://wa.me/258875088297"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-green-500 px-7 py-4 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-400"
                >
                  💬 {content.contact.whatsapp}
                </a>

                <a
                  href="mailto:smaxaxe@gmail.com"
                  className="rounded-xl bg-cyan-400 px-7 py-4 text-center font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  ✉️ {content.contact.email}
                </a>

              </div>


              {/* REDES SOCIAIS */}

              <div className="mt-8 flex flex-wrap justify-center gap-3">

                <a
                  href="tel:+258875088297"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  ☎️ Telefone
                </a>

                <a
                  href="mailto:smaxaxe@gmail.com"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  ✉️ Email
                </a>

                <a
                  href="https://wa.me/258875088297"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  💬 WhatsApp
                </a>

                <a
                  href="https://www.facebook.com/silvaasahdkhaled"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/smaxaxe/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  Instagram
                </a>

                <a
                  href="https://github.com/SilvaMaxaxe"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================================
          ENDEREÇO
      ======================================================== */}

      <section
        id="address"
        className="border-t border-white/5 bg-slate-950/60 px-5 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold tracking-[0.2em] text-cyan-400">
              {content.address.label}
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              {content.address.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              {content.address.text}
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Maputo+Magoanine+B+Mozambique"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3.5 font-bold text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-400/20"
            >
              📍 Ver localização
            </a>

          </div>

        </div>

      </section>


      {/* ========================================================
          FOOTER
      ======================================================== */}

      <footer className="border-t border-white/5 px-5 py-8 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <div>

            <p className="font-bold">
              Silva Maxaxe
            </p>

            <p className="mt-1 text-xs text-slate-600">
              AKA: Rich Dot Com
            </p>

          </div>

          <p className="text-xs text-slate-600">
            {content.footer}
          </p>

          <button
            onClick={() => setLanguage(null)}
            className="text-xs text-slate-500 transition hover:text-cyan-400"
          >
            {content.changeLanguage}
          </button>

        </div>

      </footer>

    </div>
  )
}

export default App