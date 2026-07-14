import { MagnifyingGlassIcon, CommandLineIcon, BoltIcon, ServerStackIcon } from '@heroicons/react/24/outline';

const ProcessSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 relative z-10">
      <div className="mb-12">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">&gt;_ Metodología</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
          Arquitectura en <span className="text-zinc-600">4 Fases</span>
        </h2>
      </div>

      {/* Grilla Asimétrica */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Bloque 1 (Ocupa 2 columnas en PC) */}
        <div className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors group">
          <MagnifyingGlassIcon className="h-8 w-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-zinc-100 mb-2 font-mono">01. Diagnóstico y Arquitectura</h3>
          <p className="text-zinc-400 text-sm">Analizamos los cuellos de botella de tu negocio y diseñamos la arquitectura de la base de datos (Entidad-Relación) antes de escribir una sola línea de código.</p>
        </div>

        {/* Bloque 2 */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors group">
          <CommandLineIcon className="h-8 w-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-zinc-100 mb-2 font-mono">02. Lógica Backend</h3>
          <p className="text-zinc-400 text-sm">Construcción de APIs robustas en Java y Spring Boot para procesar datos de forma segura.</p>
        </div>

        {/* Bloque 3 */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors group">
          <BoltIcon className="h-8 w-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-zinc-100 mb-2 font-mono">03. Interfaz (Frontend)</h3>
          <p className="text-zinc-400 text-sm">Desarrollo de pantallas ultra rápidas e intuitivas utilizando React para maximizar la usabilidad.</p>
        </div>

        {/* Bloque 4 (Ocupa 2 columnas en PC) */}
        <div className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors group">
          <ServerStackIcon className="h-8 w-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-zinc-100 mb-2 font-mono">04. Despliegue en Producción</h3>
          <p className="text-zinc-400 text-sm">Subimos tu sistema a servidores en la nube, configuramos las variables de entorno y monitoreamos el rendimiento en tiempo real.</p>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;