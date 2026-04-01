import React from 'react';
import { Heart, MapPin, Calendar, Info } from 'lucide-react';

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

interface PetCardProps {
  pet: Pet;
  onSelect: (pet: Pet) => void;
}

const PetCard: React.FC<PetCardProps> = ({ pet, onSelect }) => {
  const getEnergyColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'faible': return 'bg-green-100 text-green-800';
      case 'modéré': return 'bg-yellow-100 text-yellow-800';
      case 'élevé': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className="relative">
        <img
          src={pet.image_url}
          alt={pet.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-white bg-opacity-90 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-200">
            <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEnergyColor(pet.energy_level)}`}>
            Énergie {pet.energy_level}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{pet.name}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {pet.species}
          </span>
        </div>

        <p className="text-gray-600 mb-3">{pet.breed} • {pet.gender} • {pet.size}</p>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{pet.age} an{pet.age !== 1 ? 's' : ''}</span>
          <span className="mx-2">•</span>
          <MapPin className="h-4 w-4 mr-1" />
          <span>{pet.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pet.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {pet.good_with_kids && (
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              Bon avec les enfants
            </span>
          )}
          {pet.good_with_pets && (
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
              Bon avec les animaux
            </span>
          )}
        </div>

        <button
          onClick={() => onSelect(pet)}
          className="w-full bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-200 flex items-center justify-center"
        >
          <Info className="h-4 w-4 mr-2" />
          En Savoir Plus
        </button>
      </div>
    </div>
  );
};

export default PetCard;