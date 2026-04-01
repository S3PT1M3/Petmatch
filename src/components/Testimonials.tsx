// src/components/Testimonials.tsx

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie L.",
    location: "Lyon",
    message:
      "Grâce à AdopteUnAmi, j’ai trouvé Luna, une petite chatte adorable. Le processus était simple, rapide et sécurisé. Merci pour cette belle rencontre ❤️",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 2,
    name: "Julien M.",
    location: "Nice",
    message:
      "J’ai pu donner une nouvelle famille à mon chien Max après un déménagement difficile. La communauté est bienveillante et sérieuse, je recommande !",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 3,
    name: "Claire R.",
    location: "Toulouse",
    message:
      "J’ai adopté Nino via la plateforme et tout s’est très bien passé. On sent que l’équipe veut vraiment le bien des animaux.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-20" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Titre */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Témoignages de nos Adoptants 🐾
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Découvrez les belles histoires d’amour et d’adoption entre nos membres et leurs nouveaux compagnons.
        </motion.p>

        {/* Cartes de témoignages */}
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: t.id * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 shadow-md rounded-2xl p-8 relative hover:shadow-xl transition-shadow duration-300"
            >
              {/* Guillemets décoratifs */}
              <Quote className="absolute top-6 left-6 text-emerald-400 opacity-30 w-8 h-8" />

              <div className="flex flex-col items-center space-y-4 mt-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-emerald-200"
                />
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  “{t.message}”
                </p>
                <div className="mt-3">
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
