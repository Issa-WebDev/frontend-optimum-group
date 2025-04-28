import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { SiTiktok } from "react-icons/si"; // On utilise react-icons pour TikTok

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-sm">
            <h3 className="text-xl font-bold mb-4">OPTIMUM GROUP</h3>
            <p className="text-gray-400 mb-6">
              Solutions technologiques innovantes pour les entreprises et
              particuliers.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-[#ea384c] transition-colors p-2 rounded-full"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#ea384c] transition-colors p-2 rounded-full"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#ea384c] transition-colors p-2 rounded-full"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#ea384c] transition-colors p-2 rounded-full"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#ea384c] transition-colors p-2 rounded-full"
              >
                <SiTiktok size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-sm">
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/devices"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Devices
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-sm">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div>
                  {" "}
                  <MapPin
                    size={20}
                    className="text-[#ea384c] flex-shrink-0 mt-1"
                  />
                </div>
                <span className="text-gray-400">
                  Cocody Riviera Palmeraie Rue Ministre
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div>
                  <Phone size={20} className="text-[#ea384c]" />
                </div>
                <span className="text-gray-400">
                  +225 27 22 59 44 45 | +225 07 07 08 80 54 | +225 07 48 59 01
                  18
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div>
                  <Mail size={20} className="text-[#ea384c]" />
                </div>
                <span className="text-gray-400">infos@optimum-ci.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-sm">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Abonnez-vous à notre newsletter pour recevoir nos dernières
              actualités.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 text-[16px] py-2 bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-optimum-red"
              />
              <button className="px-4 py-2 bg-[#ea384c] hover:opacity-90 cursor-pointer text-white rounded-md">
                OK
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OPTIMUM GROUP. Tous droits
            réservés.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-white text-sm"
            >
              Politique de confidentialité
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 hover:text-white text-sm"
            >
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
