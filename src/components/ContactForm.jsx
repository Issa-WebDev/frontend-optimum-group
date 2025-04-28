import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé ! Nous vous répondrons dans les plus brefs délais.");
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Nom complet
          </label>
          <input
            id="name"
            placeholder="Votre nom"
            required
            className="w-full text-[16px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-none focus:ring-2 focus:ring-[#ea384c]"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="votre@email.com"
            required
            className="w-full text-[16px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-none focus:ring-2 focus:ring-[#ea384c]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+225 XX XX XX XX XX"
            className="w-full text-[16px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-none focus:ring-2 focus:ring-[#ea384c]"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-gray-700"
          >
            Sujet
          </label>
          <input
            id="subject"
            placeholder="Objet de votre message"
            required
            className="w-full text-[16px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-none focus:ring-2 focus:ring-[#ea384c]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Détaillez votre demande..."
          required
          className="w-full text-[16px] min-h-[120px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-none focus:ring-2 focus:ring-[#ea384c]"
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto bg-[#ea384c] text-md hover:opacity-90 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300 cursor-pointer"
      >
        Envoyer le message
      </button>
    </form>
  );
};

export default ContactForm;
