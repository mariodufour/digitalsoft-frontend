import { MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-6 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo y Copyright */}
        <div className="text-center md:text-left">
          <span className="text-xl font-black tracking-widest text-zinc-100">
            DIGITAL<span className="text-emerald-400">SOFT</span>
          </span>
          <p className="text-zinc-600 text-sm mt-2 font-mono">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Datos y Contacto */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center items-center">

          {/* Ubicación Geográfica */}
          <div className="text-zinc-400 font-mono text-sm flex items-center justify-center gap-2">
            <MapPinIcon className="h-4 w-4 text-emerald-500" />
            Esperanza, Santa Fe, Argentina
          </div>

          {/* Instagram */}
            <a
              href="https://instagram.com/digital.soft.it"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors duration-300 font-mono text-sm"
            >
              <svg className="h-5 w-5 text-zinc-500 group-hover:text-emerald-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              @digital.soft.it
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5493496510291"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors duration-300 font-mono text-sm"
            >
              <svg className="h-5 w-5 text-zinc-500 group-hover:text-emerald-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 0C5.385 0 0 5.388 0 12.034c0 2.124.553 4.195 1.603 6.012L.117 24l6.104-1.602a11.96 11.96 0 005.81 1.508h.005c6.645 0 12.031-5.388 12.031-12.035C24.067 5.383 18.675 0 12.031 0zm0 21.905h-.004a9.948 9.948 0 01-5.066-1.378l-.364-.216-3.766.988.999-3.667-.236-.376a9.92 9.92 0 01-1.52-5.223c0-5.494 4.474-9.967 9.962-9.967 5.491 0 9.965 4.473 9.965 9.968 0 5.495-4.474 9.967-9.965 9.967zm5.474-7.487c-.3-.15-1.776-.877-2.05-.978-.276-.1-.476-.15-.676.15-.2.3-.775.979-.95 1.178-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.492-.89-.796-1.49-1.78-1.666-2.08-.175-.3-.018-.462.132-.612.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.925-2.23-.243-.585-.49-.505-.676-.515-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.115 3.226 5.12 4.526 2.5 1.084 2.87.877 3.37.828.5-.05 1.625-.663 1.85-1.304.225-.642.225-1.192.15-1.304-.075-.113-.275-.178-.575-.328z"/>
              </svg>
              3496 510291
            </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;