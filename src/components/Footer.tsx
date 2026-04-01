// src/components/Footer.tsx

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, PawPrint } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-50 border-t border-emerald-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo + Description */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
            <PawPrint className="w-6 h-6 text-emerald-600" />
            <h2 className="text-xl font-bold text-gray-800">AdopteUnAmi</h2>
          </div>
          <p className="text-gray-600 max-w-md">
            AdopteUnAmi est une plateforme dédiée à l’adoption responsable
            d’animaux domestiques. Offrez un foyer à un compagnon ou trouvez une
            nouvelle famille aimante pour le vôtre ❤️
          </p>
        </motion.div>

        {/* Grille du footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Section Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-900 mb-3">Navigation</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#how-it-works" className="hover:text-emerald-600 transition">Comment ça marche</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-600 transition">Témoignages</a></li>
              <li><a href="#contact" className="hover:text-emerald-600 transition">Contact</a></li>
              <li><a href="#faq" className="hover:text-emerald-600 transition">FAQ</a></li>
            </ul>
          </motion.div>

          {/* Section Adoption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-900 mb-3">Adoption</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#adopt" className="hover:text-emerald-600 transition">Trouver un animal</a></li>
              <li><a href="#post-adoption" className="hover:text-emerald-600 transition">Mettre en adoption</a></li>
              <li><a href="#partners" className="hover:text-emerald-600 transition">Nos partenaires</a></li>
            </ul>
          </motion.div>

          {/* Section Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#about" className="hover:text-emerald-600 transition">À propos</a></li>
              <li><a href="#legal" className="hover:text-emerald-600 transition">Mentions légales</a></li>
              <li><a href="#privacy" className="hover:text-emerald-600 transition">Confidentialité</a></li>
            </ul>
          </motion.div>

          {/* Section Contact + Réseaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-900 mb-3">Nous contacter</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-600" />
                <a href="mailto:contact@adopteunami.fr" className="hover:text-emerald-600 transition">
                  contact@adopteunami.fr
                </a>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AdopteUnAmi. Tous droits réservés. 🐾
        </div>
      </div>
    </footer>
  );
};

export default Footer;
