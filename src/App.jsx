function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* =========================
          FUNDO TECNOLÓGICO / IT
      ========================== */}
      <div className="fixed inset-0 -z-0 pointer-events-none overflow-hidden">

        {/* Luzes azuis */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* Grelha tecnológica */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Pontos tecnológicos */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_20px_#3b82f6]"></div>

        <div className="absolute top-1/3 right-20 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]"></div>

        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_20px_#60a5fa]"></div>

        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_20px_#3b82f6]"></div>

      </div>


      {/* =========================
          NAVBAR
      ========================== */}
      <nav className="relative z-10 border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-md">

        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Silva<span className="text-blue-500">.</span>
          </h2>

          <div className="hidden md:flex gap-6">

            <a
              href="#inicio"
              className="text-gray-300 hover:text-white transition"
            >
              Início
            </a>

            <a
              href="#sobre"
              className="text-gray-300 hover:text-white transition"
            >
              Sobre mim
            </a>

            <a
              href="#servicos"
              className="text-gray-300 hover:text-white transition"
            >
              Serviços
            </a>

            <a
              href="#contacto"
              className="text-gray-300 hover:text-white transition"
            >
              Contacto
            </a>

          </div>

        </div>

      </nav>


      {/* =========================
          INÍCIO
      ========================== */}
      <section
        id="inicio"
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >

        <div className="text-center max-w-4xl">

          <p className="mb-4 text-blue-500 font-semibold tracking-widest">
            BEM-VINDO À MINHA PÁGINA
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Olá, Eu sou

            <span className="text-blue-500">
              {" "}Silva Maxaxe!
            </span>

          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-8">

            Tecnologia, comunicação e soluções digitais.
            Conheça o meu trabalho, os meus conhecimentos e os serviços que posso oferecer.

          </p>


          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="#contacto"
              className="rounded-lg bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-600/20"
            >
              Entrar em contacto
            </a>

            <a
              href="#sobre"
              className="rounded-lg border border-gray-700 px-8 py-4 font-semibold hover:bg-gray-800 transition"
            >
              Saber mais
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          SOBRE MIM
      ========================== */}
      <section
        id="sobre"
        className="relative z-10 px-6 py-24 border-t border-gray-800/50"
      >

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-blue-500 font-semibold tracking-widest">
            SOBRE MIM
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Quem sou eu?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">

            O meu nome é Silva Maxaxe. Tenho interesse em tecnologia,
            desenvolvimento digital, comunicação e aprendizagem contínua.

          </p>

          <p className="mt-4 text-lg leading-8 text-gray-400">

            Ao longo do meu percurso, desenvolvi conhecimentos em
            informática, atendimento, comunicação em inglês, ferramentas
            digitais e trabalho com conteúdos e projetos relacionados com
            Inteligência Artificial.

          </p>

        </div>

      </section>


      {/* =========================
          SERVIÇOS
      ========================== */}
      <section
        id="servicos"
        className="relative z-10 px-6 py-24 border-t border-gray-800/50"
      >

        <div className="text-center">

          <p className="text-blue-500 font-semibold tracking-widest">
            O QUE POSSO FAZER
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Meus Serviços
          </h2>

          <p className="mt-4 text-gray-400">
            Algumas áreas em que posso prestar serviços.
          </p>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">


          {/* SERVIÇO 1 */}
          <div className="rounded-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 p-8 hover:-translate-y-2 hover:border-blue-500/50 transition duration-300">

            <div className="text-4xl">
              💻
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Informática e Tecnologia
            </h3>

            <p className="mt-4 text-gray-400 leading-7">

              Apoio com computadores, ferramentas digitais,
              software, internet e outras soluções tecnológicas.

            </p>

          </div>


          {/* SERVIÇO 2 */}
          <div className="rounded-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 p-8 hover:-translate-y-2 hover:border-blue-500/50 transition duration-300">

            <div className="text-4xl">
              🌐
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Tradução e Inglês
            </h3>

            <p className="mt-4 text-gray-400 leading-7">

              Apoio na tradução, revisão e preparação de conteúdos
              em Português e Inglês.

            </p>

          </div>


          {/* SERVIÇO 3 */}
          <div className="rounded-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 p-8 hover:-translate-y-2 hover:border-blue-500/50 transition duration-300">

            <div className="text-4xl">
              🤖
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Inteligência Artificial
            </h3>

            <p className="mt-4 text-gray-400 leading-7">

              Experiência em tarefas relacionadas com avaliação
              de conteúdo e projetos de Inteligência Artificial.

            </p>

          </div>


          {/* SERVIÇO 4 */}
          <div className="rounded-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 p-8 hover:-translate-y-2 hover:border-blue-500/50 transition duration-300">

            <div className="text-4xl">
              ✍️
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Revisão de Conteúdo
            </h3>

            <p className="mt-4 text-gray-400 leading-7">

              Revisão, organização e melhoria de textos e conteúdos
              para uma comunicação mais clara e profissional.

            </p>

          </div>


          {/* SERVIÇO 5 */}
          <div className="rounded-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 p-8 hover:-translate-y-2 hover:border-blue-500/50 transition duration-300">

            <div className="text-4xl">
              📋
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Assistência Administrativa
            </h3>

            <p className="mt-4 text-gray-400 leading-7">

              Apoio em tarefas administrativas, organização,
              atendimento e utilização de ferramentas digitais.

            </p>

          </div>


          {/* SERVIÇO 6 */}
          <div className="rounded-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 p-8 hover:-translate-y-2 hover:border-blue-500/50 transition duration-300">

            <div className="text-4xl">
              🚀
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Projetos Digitais
            </h3>

            <p className="mt-4 text-gray-400 leading-7">

              Desenvolvimento e aprendizagem de soluções digitais
              utilizando tecnologias modernas.

            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACTO
      ========================== */}
      <section
        id="contacto"
        className="relative z-10 px-6 py-24 border-t border-gray-800/50"
      >

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-blue-500 font-semibold tracking-widest">
            CONTACTO
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Vamos conversar?
          </h2>

          <p className="mt-5 text-lg text-gray-400">

            Se quiseres falar comigo sobre um projeto,
            trabalho ou oportunidade, entra em contacto.

          </p>


          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">


            {/* WHATSAPP */}
            <a
              href="https://wa.me/258875088297"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-600/20"
            >
              💬 WhatsApp
            </a>


            {/* EMAIL */}
            <a
              href="mailto:SEUEMAIL@gmail.com"
              className="rounded-lg border border-gray-700 px-8 py-4 font-semibold hover:bg-gray-800 transition"
            >
              📧 Email
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          REDES SOCIAIS
      ========================== */}
      <section
        className="relative z-10 px-6 py-20 border-t border-gray-800/50"
      >

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-blue-500 font-semibold tracking-widest">
            REDES SOCIAIS
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Encontre-me nas redes
          </h2>

          <p className="mt-4 text-gray-400">

            Siga-me e acompanhe o meu trabalho nas redes sociais.

          </p>


          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">


            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/silvaasahdkhaled"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 p-6 hover:bg-gray-700/70 hover:-translate-y-2 hover:border-blue-500/50 transition duration-300"
            >

              <div className="text-4xl">
                📘
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Facebook
              </h3>

              <p className="mt-2 text-gray-400">
                Ver perfil
              </p>

            </a>


            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/smaxaxe/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 p-6 hover:bg-gray-700/70 hover:-translate-y-2 hover:border-blue-500/50 transition duration-300"
            >

              <div className="text-4xl">
                📸
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Instagram
              </h3>

              <p className="mt-2 text-gray-400">
                Ver perfil
              </p>

            </a>


            {/* GITHUB */}
            <a
              href="https://github.com/SilvaMaxaxe"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 p-6 hover:bg-gray-700/70 hover:-translate-y-2 hover:border-blue-500/50 transition duration-300"
            >

              <div className="text-4xl">
                🐙
              </div>

              <h3 className="mt-4 text-xl font-bold">
                GitHub
              </h3>

              <p className="mt-2 text-gray-400">
                Ver projetos
              </p>

            </a>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="relative z-10 border-t border-gray-800/50 bg-gray-950/80 backdrop-blur-md px-6 py-8 text-center">

        <p className="text-gray-500">
          © 2026 Silva Maxaxe. Todos os direitos reservados.
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Desenvolvido com React + Tailwind CSS
        </p>

      </footer>

    </div>
  )
}

export default App