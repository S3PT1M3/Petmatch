// src/components/HowItWorks.tsx

import { motion } from "framer-motion";
import { PawPrint, MessageSquare, Home } from "lucide-react";

interface Step {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: <PawPrint className="w-10 h-10 text-pink-500" />,
    title: "Publiez ou cherchez une annonce",
    description:
      "Créez une annonce pour un animal à adopter ou trouvez votre futur compagnon en quelques clics.",
  },
  {
    id: 2,
    icon: <MessageSquare className="w-10 h-10 text-blue-500" />,
    title: "Discutez avec le propriétaire",
    description:
      "Échangez en toute sécurité avec le propriétaire ou l’adoptant pour en savoir plus sur l’animal.",
  },
  {
    id: 3,
    icon: <Home className="w-10 h-10 text-green-500" />,
    title: "Rencontrez et adoptez !",
    description:
      "Rencontrez l’animal, signez les papiers d’adoption et offrez-lui une nouvelle maison chaleureuse ❤️",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Comment ça marche ?
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          En seulement trois étapes simples, trouvez un animal à aimer ou aidez un compagnon à trouver un nouveau foyer.
        </motion.p>

        <motion.div
          className="grid gap-10 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-gray-100 rounded-full p-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
