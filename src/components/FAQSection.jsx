import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    q: "¿Cuánto tarda el desarrollo de un sistema a medida?",
    a: "Depende de la complejidad de la lógica de negocio. Una página corporativa puede tomar entre 2 a 3 semanas. Un sistema de gestión personalizado con bases de datos puede requerir de 1 a 3 meses de desarrollo intensivo."
  },
  {
    q: "¿Qué tecnologías utilizan para construir los sistemas?",
    a: "Trabajamos con un stack de alto rendimiento (nivel empresarial): Java y Spring Boot para un backend inquebrantable, bases de datos relacionales en MySQL, y React con Tailwind CSS para interfaces visuales ultra rápidas."
  },
  {
    q: "¿Ofrecen mantenimiento y soporte post-lanzamiento?",
    a: "Sí. Una vez finalizado el proyecto, ofrecemos planes de mantenimiento para asegurar que el servidor funcione perfectamente, realizar copias de seguridad de la base de datos y aplicar actualizaciones de seguridad."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    // Si la pregunta que tocó ya está abierta, la cierra (null). Si no, abre la nueva.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-24 relative z-10">
      <div className="mb-12 text-center">
        <span className="text-base font-mono text-emerald-400 uppercase tracking-widest">/ Consultas Frecuentes</span>
        <h2 className="text-3xl font-bold text-white mt-4">Transparencia Operativa</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-zinc-800 bg-zinc-900/30 rounded-md overflow-hidden">
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-zinc-800/50 transition-colors"
            >
              <span className="font-semibold text-zinc-200">{faq.q}</span>
              <ChevronDownIcon className={`h-5 w-5 text-emerald-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            <div className={`px-6 text-zinc-400 text-sm overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;