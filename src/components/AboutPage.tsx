import { motion } from "framer-motion";
import { Heart, PawPrint, Users, ShieldCheck } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="text-gray-800">

      {/* HERO INTRO */}
      <section className="relative h-72 md:h-96 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-4xl md:text-6xl font-bold text-white text-center"
        >
          À propos d’<span className="text-emerald-400">AdopteUnAmi</span>
        </motion.h1>
      </section>

      {/* PRESENTATION */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify">
      <strong className="text-gray-800">
        AdopteUnAmi est une plateforme dédiée à l’adoption responsable d’animaux domestiques.
      </strong>
      <br /><br />
      Offrez un foyer à un compagnon et transformez sa vie en lui donnant la chance
      de rejoindre une famille où il pourra s’épanouir pleinement. Adopter un animal,
      c’est bien plus qu’un geste généreux : c’est un engagement sincère, une promesse
      de protection et de tendresse envers un être qui n’attend qu’une nouvelle
      opportunité pour créer un lien unique avec vous. Chaque adoption est une rencontre
      qui change deux vies — celle de l’animal, mais aussi la vôtre, en vous apportant
      affection, joie et présence au quotidien.
    </p>

    <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify">
      Et si vous êtes dans une situation où vous ne pouvez plus offrir à votre compagnon
      l’attention ou le cadre dont il a besoin, vous pouvez également lui permettre de
      trouver une nouvelle famille aimante et responsable. Donner une seconde chance à
      son animal n’est jamais un abandon, mais un acte de courage et de bienveillance,
      car il s’agit de lui offrir un avenir plus adapté et harmonieux. Grâce à AdopteUnAmi,
      vous facilitez cette transition en toute sérénité, en veillant à son bien-être et
      à son bonheur.
    </p>
  </motion.div>
</section>


      {/* MISSION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Notre Mission
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center p-6 bg-white rounded-xl shadow"
            >
              <Heart className="w-12 h-12 mx-auto text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Encourager l’adoption</h3>
              <p className="text-gray-600 text-sm">
                Offrir une seconde chance aux animaux abandonnés ou dans le besoin.
              </p>
            </motion.div>

            {/* 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center p-6 bg-white rounded-xl shadow"
            >
              <Users className="w-12 h-12 mx-auto text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Relier familles & animaux</h3>
              <p className="text-gray-600 text-sm">
                Faciliter la mise en relation entre propriétaires et adoptants.
              </p>
            </motion.div>

            {/* 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center p-6 bg-white rounded-xl shadow"
            >
              <ShieldCheck className="w-12 h-12 mx-auto text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Promouvoir la responsabilité</h3>
              <p className="text-gray-600 text-sm">
                Garantir une adoption réfléchie, bienveillante et durable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      {/*<section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Comment ça marche ?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Rechercher", desc: "Explorez les animaux à adopter.", icon: PawPrint },
            { step: "2", title: "Contacter", desc: "Échangez avec le propriétaire.", icon: Users },
            { step: "3", title: "Rencontrer", desc: "Rencontrez votre futur compagnon.", icon: Heart },
            { step: "4", title: "Adopter", desc: "Offrez-lui un foyer rempli d’amour.", icon: ShieldCheck },
          ].map((item) => (
            <motion.div
              key={item.step}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white shadow p-6 rounded-xl"
            >
              <item.icon className="w-10 h-10 mx-auto text-emerald-500 mb-3" />
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>*/}

      {/* STATS */}
      <section className="bg-emerald-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold">+2 500</h3>
            <p className="text-lg">Adoptions réussies</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="text-lg">Familles satisfaites</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">150+</h3>
            <p className="text-lg">Animaux disponibles</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
