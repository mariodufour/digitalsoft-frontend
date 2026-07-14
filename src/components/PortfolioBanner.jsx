import { ArrowTopRightOnSquareIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const PortfolioBanner = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 relative z-10">
      <div className="relative rounded-2xl overflow-hidden p-[1px] bg-gradient-to-r from-emerald-500/30 via-zinc-700 to-cyan-500/30 group cursor-pointer shadow-2xl hover:shadow-emerald-900/20 transition-all duration-500">

        {/* Fondo oscuro del banner */}
        <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl"></div>

        {/* Contenido */}
        <div className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-10 gap-6">
          <div className="flex items-center gap-6">
            <div className="bg-emerald-500/10 p-4 rounded-full border border-emerald-500/20">
              <BriefcaseIcon className="h-8 w-8 text-emerald-400" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">Proyectos Implementados</h3>
              <p className="text-zinc-400 text-sm font-mono tracking-wide">
                Explorá mis desarrollos subidos a mi página personal.
              </p>
            </div>
          </div>

          <a
            href="https://mariodufour.rf.gd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-emerald-500/50 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105"
          >
            Ver Portfolio
            <ArrowTopRightOnSquareIcon className="h-5 w-5 text-emerald-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBanner;