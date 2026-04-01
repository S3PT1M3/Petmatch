import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import PetCard from './PetCard';

interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: string;
  size: string;
  location: string;
  description: string;
  image_url: string;
  contact_info: string;
  good_with_kids: boolean;
  good_with_pets: boolean;
  energy_level: string;
  created_at: string;
}

interface BrowsePetsProps {
  onPetSelect: (pet: Pet) => void;
}

// Mock data for demonstration
const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Luna',
    species: 'Chien',
    breed: 'Golden Retriever',
    age: 3,
    gender: 'Femelle',
    size: 'Grand',
    location: 'Paris, France',
    description: 'Luna est une golden retriever douce et aimante qui s\'entend bien avec les enfants et les autres animaux. Elle adore les longues promenades et jouer à rapporter dans le parc.',
    image_url: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
    contact_info: 'sarah.johnson@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Modéré',
    created_at: '2024-01-15'
  },
  {
    id: '2',
    name: 'Moustaches',
    species: 'Chat',
    breed: 'Maine Coon',
    age: 5,
    gender: 'Mâle',
    size: 'Grand',
    location: 'Lyon, France',
    description: 'Moustaches est un Maine Coon calme et affectueux qui aime se blottir dans les endroits ensoleillés. Il est parfait pour un foyer tranquille.',
    image_url: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
    contact_info: 'mike.chen@email.com',
    good_with_kids: true,
    good_with_pets: false,
    energy_level: 'Faible',
    created_at: '2024-01-12'
  },
  {
    id: '3',
    name: 'Max',
    species: 'Chien',
    breed: 'Berger Allemand',
    age: 2,
    gender: 'Mâle',
    size: 'Grand',
    location: 'Marseille, France',
    description: 'Max est un berger allemand énergique et intelligent qui a besoin d\'une famille active. Il excelle en dressage et adore les activités de plein air.',
    image_url: 'https://images.unsplash.com/photo-1648495333000-32689c4ead62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    contact_info: 'seattle.shelter@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Élevé',
    created_at: '2024-01-10'
  },
  {
    id: '4',
    name: 'Bella',
    species: 'Chat',
    breed: 'Siamois',
    age: 1,
    gender: 'Femelle',
    size: 'Moyen',
    location: 'Toulouse, France',
    description: 'Bella est une jeune siamoise joueuse qui adore courir après les jouets et explorer. Elle s\'épanouirait dans un foyer avec beaucoup d\'attention.',
    image_url: 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
    contact_info: 'anna.martinez@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Élevé',
    created_at: '2024-01-08'
  },
  {
    id: '5',
    name: 'Charlie',
    species: 'Chien',
    breed: 'Croisé Labrador',
    age: 4,
    gender: 'Mâle',
    size: 'Moyen',
    location: 'Bordeaux, France',
    description: 'Charlie est un croisé labrador amical qui adore rencontrer de nouvelles personnes et d\'autres chiens. Il est propre et connaît les commandes de base.',
    image_url: 'https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    contact_info: 'denver.rescue@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Modéré',
    created_at: '2024-01-05'
  },
  {
    id: '6',
    name: 'Ombre',
    species: 'Chat',
    breed: 'Européen Noir à Poil Court',
    age: 6,
    gender: 'Mâle',
    size: 'Moyen',
    location: 'Nice, France',
    description: 'Ombre est un chat senior doux qui apprécie la compagnie tranquille. Il est parfait pour quelqu\'un qui cherche un animal calme et affectueux.',
    image_url: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg',
    contact_info: 'tom.wilson@email.com',
    good_with_kids: true,
    good_with_pets: false,
    energy_level: 'Faible',
    created_at: '2024-01-03'
  },
  {
    id: '7',
    name: 'Nala',
    species: 'Chien',
    breed: 'Beagle',
    age: 2,
    gender: 'Femelle',
    size: 'Moyen',
    location: 'Lille, France',
    description: 'Nala est une beagle curieuse et pleine d’énergie. Elle adore renifler partout lors des promenades et est très sociable avec les autres chiens.',
    image_url: 'https://images.pexels.com/photos/7210750/pexels-photo-7210750.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
    contact_info: 'julie.dupont@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Élevé',
    created_at: '2024-01-20'
  },
  {
    id: '8',
    name: 'Simba',
    species: 'Chat',
    breed: 'Chartreux',
    age: 4,
    gender: 'Mâle',
    size: 'Moyen',
    location: 'Strasbourg, France',
    description: 'Simba est un Chartreux doux et observateur. Il aime les endroits calmes et s’attache rapidement à sa famille.',
    image_url: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    contact_info: 'martin.leroy@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Modéré',
    created_at: '2024-01-18'
  },
  {
    id: '9',
    name: 'Coco',
    species: 'Perroquet',
    breed: 'Ara Ararauna',
    age: 8,
    gender: 'Mâle',
    size: 'Moyen',
    location: 'Montpellier, France',
    description: 'Coco est un perroquet intelligent et bavard qui adore interagir avec les humains. Il répète des mots simples et aime écouter de la musique.',
    image_url: 'https://images.unsplash.com/photo-1504579264001-833438f93df2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    contact_info: 'laura.morel@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Élevé',
    created_at: '2024-01-22'
  },
  {
    id: '10',
    name: 'Noisette',
    species: 'Lapin',
    breed: 'Bélier Nain',
    age: 1,
    gender: 'Femelle',
    size: 'Petit',
    location: 'Dijon, France',
    description: 'Noisette est un adorable lapin nain bélier très sociable. Elle aime grignoter des légumes frais et se faire caresser.',
    image_url: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    contact_info: 'sophie.martinez@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Modéré',
    created_at: '2024-01-25'
  },
  {
    id: '11',
    name: 'Pistache',
    species: 'Hamster',
    breed: 'Doré Syrien',
    age: 1,
    gender: 'Mâle',
    size: 'Petit',
    location: 'Rennes, France',
    description: 'Pistache est un hamster doré vif et curieux. Il aime explorer son habitat et faire tourner sa roue pendant la nuit.',
    image_url: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    contact_info: 'marc.brunet@email.com',
    good_with_kids: true,
    good_with_pets: false,
    energy_level: 'Élevé',
    created_at: '2024-01-28'
  },
  {
    id: '12',
    name: 'Ruby',
    species: 'Chien',
    breed: 'Bouledogue français',
    age: 3,
    gender: 'Femelle',
    size: 'Moyen',
    location: 'Grenoble, France',
    description:
      'Ruby est une Border Collie très intelligente et vive. Elle adore apprendre de nouveaux tours et participer à des jeux de réflexion. Idéale pour une famille active.',
    image_url:'https://images.unsplash.com/photo-1704279926528-6894d8aec3e6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    contact_info: 'julien.marchand@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Élevé',
    created_at: '2024-02-02'
  },
  {
    id: '13',
    name: 'Minette',
    species: 'Chat',
    breed: 'British Shorthair',
    age: 4,
    gender: 'Femelle',
    size: 'Moyen',
    location: 'Rouen, France',
    description:
      'Minette est une chatte British Shorthair calme et élégante. Elle aime observer depuis les fenêtres et se blottir sur les genoux le soir.',
    image_url:
      'https://images.unsplash.com/photo-1517451330947-7809dead78d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    contact_info: 'claire.roux@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Faible',
    created_at: '2024-02-05'
  },
  {
    id: '14',
    name: 'Tango',
    species: 'Perroquet',
    breed: 'Gris du Gabon',
    age: 7,
    gender: 'Mâle',
    size: 'Moyen',
    location: 'Nice, France',
    description:
      'Tango est un perroquet du Gabon très bavard et joueur. Il aime répéter des mots, chanter et attirer l’attention de son entourage.',
    image_url:
      'https://images.unsplash.com/photo-1538440367084-0a21cb983cee?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    contact_info: 'lucas.morel@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Élevé',
    created_at: '2024-02-08'
  },
  {
    id: '15',
    name: 'Canelle',
    species: 'Lapin',
    breed: 'Lapin Angora',
    age: 2,
    gender: 'Femelle',
    size: 'Petit',
    location: 'Tours, France',
    description:
      'Canelle est un petit lapin angora à la fourrure soyeuse. Très douce et propre, elle aime les câlins et les friandises aux carottes.',
    image_url:
      'https://images.unsplash.com/photo-1629898569904-669319348211?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    contact_info: 'elise.bernard@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Modéré',
    created_at: '2024-02-10'
  },
  {
    id: '16',
    name: 'Grisou',
    species: 'Hamster',
    breed: 'Russe Nain',
    age: 1,
    gender: 'Mâle',
    size: 'Petit',
    location: 'Reims, France',
    description:
      'Grisou est un hamster nain curieux et dynamique. Il adore courir dans sa roue et se cacher dans ses tunnels. Parfait pour un premier animal.',
    image_url:
      'https://images.unsplash.com/photo-1676918555382-fcd06a483e25?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    contact_info: 'marion.dupuis@email.com',
    good_with_kids: true,
    good_with_pets: false,
    energy_level: 'Élevé',
    created_at: '2024-02-12'
  },
  {
    id: '17',
    name: 'Oscar',
    species: 'Chien',
    breed: 'Cocker Spaniel',
    age: 5,
    gender: 'Mâle',
    size: 'Moyen',
    location: 'Nantes, France',
    description:
      'Oscar est un Cocker Spaniel affectueux et fidèle. Il aime la compagnie humaine et se promener au bord de l’eau. Très doux avec les enfants.',
    image_url:
      'https://images.pexels.com/photos/791862/pexels-photo-791862.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
    contact_info: 'antoine.gerard@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Modéré',
    created_at: '2024-02-15'
  }
]

const BrowsePets: React.FC<BrowsePetsProps> = ({ onPetSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredPets = mockPets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecies = !selectedSpecies || pet.species === selectedSpecies;
    const matchesSize = !selectedSize || pet.size === selectedSize;
    const matchesAge = !selectedAge || 
                      (selectedAge === '0-2' && pet.age <= 2) ||
                      (selectedAge === '3-7' && pet.age >= 3 && pet.age <= 7) ||
                      (selectedAge === '8+' && pet.age >= 8);

    return matchesSearch && matchesSpecies && matchesSize && matchesAge;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Trouvez Votre Animal Parfait</h1>
          <p className="text-lg text-gray-600">Parcourez nos animaux disponibles et trouvez votre nouveau meilleur ami</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher par nom, race ou localisation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filtres
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select
                  value={selectedSpecies}
                  onChange={(e) => setSelectedSpecies(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Toutes les Espèces</option>
                  <option value="Chien">Chiens</option>
                  <option value="Chat">Chats</option>
                  <option value="Perroquet">Perroquet</option>
                  <option value="Lapin">Lapin</option>
                  <option value="Hamster">Hamster</option>
                </select>

                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Toutes les Tailles</option>
                  <option value="Petit">Petit</option>
                  <option value="Moyen">Moyen</option>
                  <option value="Grand">Grand</option>
                </select>

                <select
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Tous les Âges</option>
                  <option value="0-2">Jeune (0-2 ans)</option>
                  <option value="3-7">Adulte (3-7 ans)</option>
                  <option value="8+">Senior (8+ ans)</option>
                </select>

                <button
                  onClick={() => {
                    setSelectedSpecies('');
                    setSelectedSize('');
                    setSelectedAge('');
                    setSearchTerm('');
                  }}
                  className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  Tout Effacer
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Affichage de {filteredPets.length} animal{filteredPets.length !== 1 ? 'ux' : ''}
            {searchTerm && ` pour "${searchTerm}"`}
          </p>
        </div>

        {/* Pet Grid */}
        {filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} onSelect={onPetSelect} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mb-4">
              <MapPin className="h-16 w-16 text-gray-300 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun animal trouvé</h3>
            <p className="text-gray-500 mb-4">Essayez d'ajuster vos critères de recherche ou vos filtres.</p>
            <button
              onClick={() => {
                setSelectedSpecies('');
                setSelectedSize('');
                setSelectedAge('');
                setSearchTerm('');
              }}
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Effacer tous les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowsePets;