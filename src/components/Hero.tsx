// src/components/Hero.tsx

import { motion } from "framer-motion";
import { Heart, Shield, Home } from "lucide-react";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

interface HeroProps {
  onViewChange: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onViewChange }) => {
  return (
    <div className="bg-gray-50">

      {/* ==================== HERO FULLSCREEN DYNAMIQUE ==================== */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=1170&auto=format&fit=crop"
            alt="Animaux heureux adoptés"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Texte principal animé */}
        <motion.div
          className="relative z-10 max-w-3xl text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Trouvez Votre <br />
            <span className="text-emerald-400">Compagnon Idéal</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Trouvez votre futur compagnon ou aidez un animal à retrouver l’amour d’un foyer.
            Ensemble, créons des histoires d’amitié et de bienveillance.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => onViewChange("browse")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-600 transition"
            >
              Parcourir les Animaux
            </motion.button>

            <motion.button
              onClick={() => onViewChange("add-pet")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full border border-emerald-500 hover:bg-emerald-50 transition"
            >
              Proposer un Animal
            </motion.button>
          </div>
        </motion.div>

        {/* Statistiques décoratives */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-200 flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Heart className="w-5 h-5 text-emerald-400" />
          <span className="text-sm">+2 500 adoptions réussies</span>
        </motion.div>
      </section>

      {/* ==================== HERO SECTION ==================== */} 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16"> 
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Offrez un <span className="text-emerald-500">nouveau départ</span>  
          <br /> à un ami fidèle</h1> 

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"> 
              Connectez-vous avec des familles aimantes, des particuliers bienveillants et des refuges de confiance. 
              Donnez une seconde chance de bonheur à un animal ou trouvez votre nouveau meilleur ami. </p> 
              <div className="flex flex-col sm:flex-row gap-4 justify-center"> 

                <button onClick={() => onViewChange("browse")} 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg 
                text-white bg-emerald-500 hover:bg-emerald-600 transition-all duration-200 hover:scale-105 shadow-lg" > 
                Parcourir les Animaux </button> 
                
                <button onClick={() => onViewChange("add-pet")} 
                className="inline-flex items-center px-8 py-3 border-2 border-emerald-500 text-base font-medium rounded-lg 
                text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 hover:scale-105" > 
                Proposer un Animal </button> 
                
              </div> 
        </div> 
        
      {/* ==================== IMAGE PRINCIPALE ==================== */} 
      <div className="mt-16 relative"> <div className="relative rounded-2xl overflow-hidden shadow-2xl"> 
        <img src="https://images.pexels.com/photos/14751278/pexels-photo-14751278.jpeg" alt="Happy family with adopted pets" className="w-full h-96 object-cover" /> 
        <div className="absolute inset-0 bg-black bg-opacity-20"></div> 
        </div> 
      </div>
    </div>

      {/* ==================== HOW IT WORKS SECTION ==================== */}
      <HowItWorks />

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <Testimonials />

      {/* ==================== FEATURES SECTION ==================== */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir AdopteUnAmi ?
            </h2>
            <p className="text-lg text-gray-600">
              Nous rendons l'adoption d'animaux sûre, simple et significative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sûr et Sécurisé
              </h3>
              <p className="text-gray-600">
                Toutes les annonces sont vérifiées et nous assurons une communication sécurisée.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Facile à Utiliser
              </h3>
              <p className="text-gray-600">
                Parcourez, filtrez et trouvez votre compagnon idéal rapidement.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Home className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Correspondances Parfaites
              </h3>
              <p className="text-gray-600">
                Nous aidons à associer chaque animal avec la famille idéale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== STATS SECTION ==================== */}
      <div className="bg-emerald-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">

            <div>
              <div className="text-4xl font-bold mb-2">2 500+</div>
              <div className="text-emerald-100">Animaux Adoptés</div>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">850+</div>
              <div className="text-emerald-100">Familles Heureuses</div>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-emerald-100">Refuges Partenaires</div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
