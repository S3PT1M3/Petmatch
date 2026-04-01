import React from 'react';
import { ArrowLeft, Heart, MapPin, Calendar, Mail, Phone, User, Check } from 'lucide-react';

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

interface PetDetailProps {
  pet: Pet;
  onBack: () => void;
}

const PetDetail: React.FC<PetDetailProps> = ({ pet, onBack }) => {
  const getEnergyColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'faible': return 'bg-green-500';
      case 'modéré': return 'bg-yellow-500';
      case 'élevé': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-emerald-600 hover:text-emerald-700 mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour à la Navigation
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Image */}
          <div className="relative h-96">
            <img
              src={pet.image_url}
              alt={pet.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{pet.name}</h1>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {pet.location}
                </span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {pet.age} an{pet.age !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
            <button className="absolute top-6 right-6 p-3 bg-white bg-opacity-90 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-200">
              <Heart className="h-6 w-6 text-gray-600 hover:text-red-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">À Propos de {pet.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{pet.description}</p>
                </div>

                {/* Characteristics */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Caractéristiques</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-500">Espèce</span>
                      <p className="font-medium text-gray-900">{pet.species}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Race</span>
                      <p className="font-medium text-gray-900">{pet.breed}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Sexe</span>
                      <p className="font-medium text-gray-900">{pet.gender}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Taille</span>
                      <p className="font-medium text-gray-900">{pet.size}</p>
                    </div>
                  </div>
                </div>

                {/* Energy Level */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Niveau d'Énergie</h3>
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      {['Faible', 'Modéré', 'Élevé'].map((level, index) => (
                        <div
                          key={level}
                          className={`h-3 w-8 rounded-full ${
                            pet.energy_level.toLowerCase() === level.toLowerCase()
                              ? getEnergyColor(level)
                              : 'bg-gray-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <span className="font-medium text-gray-900">{pet.energy_level}</span>
                  </div>
                </div>

                {/* Good With */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Bon Avec</h3>
                  <div className="flex flex-wrap gap-3">
                    {pet.good_with_kids && (
                      <div className="flex items-center bg-green-100 text-green-800 px-3 py-2 rounded-full">
                        <Check className="h-4 w-4 mr-2" />
                        Enfants
                      </div>
                    )}
                    {pet.good_with_pets && (
                      <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-2 rounded-full">
                        <Check className="h-4 w-4 mr-2" />
                        Autres Animaux
                      </div>
                    )}
                    {!pet.good_with_kids && !pet.good_with_pets && (
                      <div className="text-gray-600">Préfère être le seul animal dans un foyer d'adultes</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6 sticky top-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Informations de Contact</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Annoncé par</p>
                        <p className="font-medium text-gray-900">Propriétaire</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">E-mail</p>
                        <p className="font-medium text-gray-900">{pet.contact_info}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Publié le</p>
                        <p className="font-medium text-gray-900">
                          {new Date(pet.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-200 font-medium mb-3">
                    Contacter pour {pet.name}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    En contactant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;