import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  // Estado inicial del formulario
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    serviceCategoryId: 1, // Por defecto seleccionamos el servicio 1 (Página web)
    clientMessage: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  // Manejador para actualizar los campos cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejador para enviar los datos al backend de Spring Boot
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Apuntamos al endpoint que armaste en Java
      await axios.post('http://localhost:8080/api/requests', formData);
      setStatus('success');
      // Limpiamos el formulario tras el éxito
      setFormData({
        businessName: '', contactName: '', phone: '', email: '', serviceCategoryId: 1, clientMessage: ''
      });
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      setStatus('error');
    }
  };

  return (
    <div id="contacto" className="max-w-3xl mx-auto px-6 pb-24">
      <div className="bg-gray-800 border border-gray-700 rounded-3xl p-8 md:p-12 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Contame sobre tu proyecto</h2>
        <p className="text-gray-400 text-center mb-8">Completá los datos y me pondré en contacto por WhatsApp a la brevedad.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Nombre del Negocio</label>
              <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" placeholder="Ej: Rotisería El Sol" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Tu Nombre *</label>
              <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" placeholder="Ej: Juan Pérez" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Teléfono / WhatsApp *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" placeholder="Ej: 342 155..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Correo Electrónico</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" placeholder="hola@ejemplo.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">¿Qué servicio te interesa? *</label>
            <select name="serviceCategoryId" value={formData.serviceCategoryId} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors">
              <option value={1}>Página web</option>
              <option value={2}>Automatización</option>
              <option value={3}>Sistemas personalizados</option>
              <option value={4}>Tienda online</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje *</label>
            <textarea name="clientMessage" value={formData.clientMessage} onChange={handleChange} required rows="4" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" placeholder="Contame qué problema buscás resolver..."></textarea>
          </div>

          <button type="submit" disabled={status === 'loading'} className="w-full bg-green-500 hover:bg-green-400 text-gray-900 font-bold py-4 rounded-xl transition-colors duration-300 shadow-[0_0_15px_rgba(34,197,94,0.2)] disabled:opacity-50">
            {status === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}
          </button>

          {status === 'success' && <p className="text-green-400 text-center font-semibold mt-4">¡Mensaje enviado con éxito! Te contactaré pronto.</p>}
          {status === 'error' && <p className="text-red-400 text-center font-semibold mt-4">Hubo un error al enviar el mensaje. Revisá que el backend esté encendido.</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;