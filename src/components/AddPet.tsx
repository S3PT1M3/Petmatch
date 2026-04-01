import React, { useState } from 'react';
import { Upload, MapPin, Heart, Check } from 'lucide-react';

interface AddPetProps {
  isAuthenticated: boolean;
  onAuthRequired: () => void;
}

const AddPet: React.FC<AddPetProps> = ({ isAuthenticated, onAuthRequired }) => {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    gender: '',
    size: '',
    location: '',
    description: '',
    contact_info: '',
    good_with_kids: false,
    good_with_pets: false,
    energy_level: '',
    image_url: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }

    // In a real app, this would submit to Supabase
    console.log('Submitting pet:', formData);
    setIsSubmitted(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <Heart className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Connexion Requise</h2>
          <p className="text-gray-600 mb-6">
            Veuillez vous connecter pour proposer votre animal à l'adoption. Cela nous aide à assurer la sécurité de notre communauté.
          </p>
          <button
            onClick={onAuthRequired}
            className="w-full bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-200"
          >
            Se Connecter pour Continuer
          </button>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
              <Check className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Animal Ajouté avec Succès !</h2>
          <p className="text-gray-600 mb-6">
            Votre annonce d'animal a été soumise et sera examinée sous peu. Nous vous préviendrons une fois qu'elle sera en ligne sur la plateforme.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-200 mr-4"
          >
            Ajouter un Autre Animal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Proposer Votre Animal à l'Adoption</h1>
          <p className="text-lg text-gray-600">
            Aidez votre animal bien-aimé à trouver un nouveau foyer aimant grâce à notre plateforme sécurisée
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          {/* Basic Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Informations de Base</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l'Animal *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Entrez le nom de votre animal"
                />
              </div>

              <div>
                <label htmlFor="species" className="block text-sm font-medium text-gray-700 mb-2">
                  Espèce *
                </label>
                <select
                  id="species"
                  name="species"
                  required
                  value={formData.species}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Sélectionner l'espèce</option>
                  <option value="Chien">Chien</option>
                  <option value="Chat">Chat</option>
                </select>
              </div>

              <div>
                <label htmlFor="breed" className="block text-sm font-medium text-gray-700 mb-2">
                  Race *
                </label>
                <input
                  type="text"
                  id="breed"
                  name="breed"
                  required
                  value={formData.breed}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="ex: Golden Retriever, Siamois"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                  Âge (années) *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  min="0"
                  max="30"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Âge de l'animal en années"
                />
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                  Sexe *
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Sélectionner le sexe</option>
                  <option value="Mâle">Mâle</option>
                  <option value="Femelle">Femelle</option>
                </select>
              </div>

              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
                  Taille *
                </label>
                <select
                  id="size"
                  name="size"
                  required
                  value={formData.size}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Sélectionner la taille</option>
                  <option value="Petit">Petit</option>
                  <option value="Moyen">Moyen</option>
                  <option value="Grand">Grand</option>
                </select>
              </div>
            </div>
          </div>

          {/* Location and Contact */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Localisation et Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 inline mr-1" />
                  Localisation *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Ville, Région"
                />
              </div>

              <div>
                <label htmlFor="contact_info" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail de Contact *
                </label>
                <input
                  type="email"
                  id="contact_info"
                  name="contact_info"
                  required
                  value={formData.contact_info}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="votre.email@exemple.com"
                />
              </div>
            </div>
          </div>

          {/* Pet Characteristics */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Caractéristiques de l'Animal</h2>
            
            <div className="mb-6">
              <label htmlFor="energy_level" className="block text-sm font-medium text-gray-700 mb-2">
                Niveau d'Énergie *
              </label>
              <select
                id="energy_level"
                name="energy_level"
                required
                value={formData.energy_level}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Sélectionner le niveau d'énergie</option>
                <option value="Faible">Faible - Calme et détendu</option>
                <option value="Modéré">Modéré - Activité modérée</option>
                <option value="Élevé">Élevé - Très actif et joueur</option>
              </select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="good_with_kids"
                  name="good_with_kids"
                  checked={formData.good_with_kids}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label htmlFor="good_with_kids" className="ml-3 text-sm font-medium text-gray-700">
                  Bon avec les enfants
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="good_with_pets"
                  name="good_with_pets"
                  checked={formData.good_with_pets}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label htmlFor="good_with_pets" className="ml-3 text-sm font-medium text-gray-700">
                  Bon avec les autres animaux
                </label>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Parlez aux adoptants potentiels de la personnalité, des habitudes et des besoins spéciaux de votre animal..."
            />
          </div>

          {/* Photo Upload */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Photo de l'Animal *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors duration-200">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-sm text-gray-600 mb-2">
                Cliquez pour télécharger ou glissez-déposez
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG jusqu'à 10MB
              </p>
              <input
                type="url"
                name="image_url"
                value={formData.image_url}
                onChange={handleInputChange}
                className="mt-4 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Ou collez l'URL de l'image ici"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-emerald-500 text-white py-3 px-8 rounded-lg hover:bg-emerald-600 transition-colors duration-200 font-medium"
            >
              Proposer l'Animal à l'Adoption
            </button>
            <p className="text-xs text-gray-500 mt-4">
              En soumettant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPet;