import {
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  ShoppingCartIcon,
  CommandLineIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import PortfolioBanner from './components/PortfolioBanner';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-emerald-500/30">

      {/* --- CABECERA (Header Terminal Style) --- */}
      <header className="flex justify-between items-center px-8 py-5 border-b border-zinc-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <CommandLineIcon className="h-7 w-7 text-emerald-400" />
          <span className="text-xl font-black tracking-widest text-zinc-100">
            DIGITAL<span className="text-emerald-400">SOFT</span>
          </span>
        </div>

        {/* Indicador de Estado del Sistema */}
        <div className="hidden md:flex items-center gap-3 px-4 py-1.5 rounded-md bg-zinc-900/50 border border-zinc-800">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-emerald-400/80 tracking-widest uppercase">Sys.Online</span>
        </div>
      </header>

      {/* --- SECCIÓN PRINCIPAL (Hero Terminal Premium) --- */}
      <main className="relative flex flex-col items-center justify-center text-center px-4 pt-28 pb-20 overflow-hidden">

        {/* Resplandor de fondo (Efecto ambiental) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Etiqueta superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900/60 border border-zinc-800 mb-8 z-10">
          <CodeBracketIcon className="h-4 w-4 text-zinc-400" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Desarrollo de Software a Medida</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white z-10 relative">
          Transformamos tus ideas en <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600">
            soluciones escalables
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl font-light z-10 relative">
          Desarrollo de <strong className="text-zinc-200 font-medium">sistemas web y automatizaciones</strong> de alto rendimiento para negocios que buscan operar con precisión.
        </p>

        {/* Botón CTA (Estilo botón de ejecución) */}
        <a
          href="https://wa.me/5493496510291?text=Hola!%20Vengo%20desde%20la%20página%20de%20Digital%20Soft%20y%20me%20gustaría%20hacer%20una%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] z-10"
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6 text-zinc-950 group-hover:scale-110 transition-transform duration-300" />
          <span>Inicializar Proyecto</span>
        </a>

        {/* Stack Tecnológico */}
        <div className="mt-24 pt-8 border-t border-zinc-900 w-full max-w-5xl z-10 relative flex flex-col items-center">

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
            <h2 className="text-sm md:text-base font-mono text-zinc-300 uppercase tracking-widest font-semibold drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              Stack Tecnológico Principal
            </h2>
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
          </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 w-full max-w-6xl justify-items-center">

              {/* Java / Spring Boot */}
              <span className="group font-mono text-sm md:text-base font-semibold text-zinc-500 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 cursor-default">
                <div className="flex items-center gap-1.5 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="h-6 w-6" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" className="h-6 w-6" />
                </div>
                Java/Spring
              </span>

              {/* React */}
              <span className="group font-mono text-sm md:text-base font-semibold text-zinc-500 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 cursor-default">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="h-6 w-6 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                React
              </span>

              {/* Tailwind CSS */}
              <span className="group font-mono text-sm md:text-base font-semibold text-zinc-500 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 cursor-default">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="h-6 w-6 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                Tailwind
              </span>

              {/* MySQL */}
              <span className="group font-mono text-sm md:text-base font-semibold text-zinc-500 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 cursor-default">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="h-6 w-6 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                MySQL
              </span>

              {/* HTML5 */}
              <span className="group font-mono text-sm md:text-base font-semibold text-zinc-500 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 cursor-default">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="h-6 w-6 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                HTML5
              </span>

              {/* CSS3 */}
              <span className="group font-mono text-sm md:text-base font-semibold text-zinc-500 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 cursor-default">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" className="h-6 w-6 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                CSS3
              </span>

              {/* WordPress */}
              <span className="group font-mono text-sm md:text-base font-semibold text-zinc-500 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 cursor-default">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" alt="WordPress" className="h-6 w-6 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                WordPress
              </span>

              {/* GitHub */}
              <span className="group font-mono text-sm md:text-base font-semibold text-zinc-500 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 cursor-default">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="h-6 w-6 grayscale opacity-50 group-hover:invert group-hover:opacity-100 transition-all duration-300" />
                GitHub
              </span>

            </div>
        </div>

      </main>

      {/* --- GRILLA DE SERVICIOS (Temporalmente mantenemos la anterior, luego la rediseñamos) --- */}
      <section id="servicios" className="max-w-5xl mx-auto px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 flex flex-col items-start hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 group">
            <ComputerDesktopIcon className="h-12 w-12 text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-3 text-white">Interfaces Web</h3>
            <p className="text-zinc-400 text-sm">Presencia digital profesional con tiempos de carga ultrarrápidos.</p>
          </div>
          {/* Tarjeta 2 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 flex flex-col items-start hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 group">
            <Cog6ToothIcon className="h-12 w-12 text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-3 text-white">Automatización</h3>
            <p className="text-zinc-400 text-sm">Scripts y procesos que hacen el trabajo duro por vos, ahorrando horas manuales.</p>
          </div>
          {/* Tarjeta 3 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 flex flex-col items-start hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 group">
            <CpuChipIcon className="h-12 w-12 text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-3 text-white">Sistemas a Medida</h3>
            <p className="text-zinc-400 text-sm">Arquitectura de software diseñada específicamente para la operativa de tu negocio.</p>
          </div>
          {/* Tarjeta 4 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 flex flex-col items-start hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 group">
            <ShoppingCartIcon className="h-12 w-12 text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-3 text-white">Comercio Electrónico</h3>
            <p className="text-zinc-400 text-sm">Tu catálogo en internet, conectado a pasarelas de pago y listo para facturar.</p>
          </div>
        </div>
      </section>

      <ProcessSection />
      <FAQSection />

      {/* Banner al Portfolio Externo */}
      <PortfolioBanner />

      {/* Formulario de Contacto */}
      <ContactForm />

      {/* Pie de Página */}
      <Footer />

    </div>
  );
}

export default App;