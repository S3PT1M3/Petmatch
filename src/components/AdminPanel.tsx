import React, { useState } from 'react';
import { Check, X, Eye, Calendar, MapPin, Mail, AlertTriangle, Shield } from 'lucide-react';

interface PendingPet {
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
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  submitter_name?: string;
  submitter_email?: string;
}

const mockPendingPets: PendingPet[] = [
  {
    id: '1',
    name: 'Max',
    species: 'Chien',
    breed: 'Beagle',
    age: 4,
    gender: 'Mâle',
    size: 'Moyen',
    location: 'Bordeaux, Nouvelle-Aquitaine',
    description: 'Max est un beagle très énergique qui adore les longues promenades. Il est sociable et s\'entend bien avec les enfants et les autres chiens.',
    image_url: 'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=500',
    contact_info: 'alice.moreau@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Élevé',
    status: 'pending',
    created_at: '2024-02-15T10:30:00Z',
    submitter_name: 'Alice Moreau',
    submitter_email: 'alice.moreau@email.com'
  },
  {
    id: '2',
    name: 'Simba',
    species: 'Chat',
    breed: 'Ragdoll',
    age: 3,
    gender: 'Mâle',
    size: 'Grand',
    location: 'Strasbourg, Grand Est',
    description: 'Simba est un chat ragdoll très calme et affectueux. Il adore être porté et est parfait pour une famille avec enfants.',
    image_url: 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=500',
    contact_info: 'marc.laurent@email.com',
    good_with_kids: true,
    good_with_pets: true,
    energy_level: 'Faible',
    status: 'pending',
    created_at: '2024-02-16T14:15:00Z',
    submitter_name: 'Marc Laurent',
    submitter_email: 'marc.laurent@email.com'
  },
  {
    id: '3',
    name: 'Ruby',
    species: 'Chien',
    breed: 'Border Collie',
    age: 2,
    gender: 'Femelle',
    size: 'Moyen',
    location: 'Lille, Hauts-de-France',
    description: 'Ruby est une border collie très intelligente qui a besoin de stimulation mentale. Elle serait parfaite pour une famille active.',
    image_url: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=500',
    contact_info: 'julie.garcia@email.com',
    good_with_kids: true,
    good_with_pets: false,
    energy_level: 'Élevé',
    status: 'approved',
    created_at: '2024-02-12T09:00:00Z',
    submitter_name: 'Julie Garcia',
    submitter_email: 'julie.garcia@email.com'
  },
  {
    id: '4',
    name: 'Oscar',
    species: 'Chat',
    breed: 'British Shorthair',
    age: 5,
    gender: 'Mâle',
    size: 'Moyen',
    location: 'Rennes, Bretagne',
    description: 'Oscar est un chat british shorthair très indépendant. Il préfère la tranquillité et serait parfait pour une personne seule.',
    image_url: 'https://images.pexels.com/photos/1571076/pexels-photo-1571076.jpeg?auto=compress&cs=tinysrgb&w=500',
    contact_info: 'david.roux@email.com',
    good_with_kids: false,
    good_with_pets: false,
    energy_level: 'Faible',
    status: 'rejected',
    created_at: '2024-02-10T16:45:00Z',
    submitter_name: 'David Roux',
    submitter_email: 'david.roux@email.com'
  }
];

interface AdminPanelProps {
  onBack: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onBack }) => {
  const [pendingPets, setPendingPets] = useState<PendingPet[]>(mockPendingPets);
  const [selectedPet, setSelectedPet] = useState<PendingPet | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');
  const [loading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const handleApprove = async (petId: string) => {
    setActionLoading(true);
    
    setTimeout(() => {
      setPendingPets(prev => 
        prev.map(pet => 
          pet.id === petId ? { ...pet, status: 'approved' as const } : pet
        )
      );
      setActionLoading(false);
    }, 1000);
    
    setSelectedPet(null);
  };

  const handleReject = async (petId: string, notes?: string) => {
    setActionLoading(true);
    
    setTimeout(() => {
      setPendingPets(prev => 
        prev.map(pet => 
          pet.id === petId ? { ...pet, status: 'rejected' as const } : pet
        )
      );
      setActionLoading(false);
    }, 1000);
    
    setSelectedPet(null);
  };

  const filteredPets = pendingPets.filter(pet => {
    if (filter === 'all') return true;
    return pet.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'En Attente';
      case 'approved': return 'Approuvé';
      case 'rejected': return 'Rejeté';
      default: return 'Inconnu';
    }
  };

  if (selectedPet) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedPet(null)}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
          >
            ← Retour à la liste
          </button>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold mb-2">Vérification de l'annonce</h1>
                  <p className="text-blue-100">Soumis le {new Date(selectedPet.created_at).toLocaleDateString()}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedPet.status)}`}>
                  {getStatusText(selectedPet.status)}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image de l'animal */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Photo de l'animal</h3>
                  <div className="relative">
                    <img
                      src={selectedPet.image_url}
                      alt={selectedPet.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full p-2">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                  
                  {/* Points de vérification pour l'image */}
                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium text-gray-900">Points de vérification :</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Image claire et de bonne qualité</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Animal clairement visible</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Pas de contenu inapproprié</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Correspond à la description</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informations de l'animal */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations de l'animal</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-500">Nom</label>
                        <p className="font-medium">{selectedPet.name}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Espèce</label>
                        <p className="font-medium">{selectedPet.species}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Race</label>
                        <p className="font-medium">{selectedPet.breed}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Âge</label>
                        <p className="font-medium">{selectedPet.age} an{selectedPet.age !== 1 ? 's' : ''}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Sexe</label>
                        <p className="font-medium">{selectedPet.gender}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Taille</label>
                        <p className="font-medium">{selectedPet.size}</p>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500">Localisation</label>
                      <p className="font-medium flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {selectedPet.location}
                      </p>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500">Niveau d'énergie</label>
                      <p className="font-medium">{selectedPet.energy_level}</p>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500">Bon avec</label>
                      <div className="flex gap-2 mt-1">
                        {selectedPet.good_with_kids && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Enfants
                          </span>
                        )}
                        {selectedPet.good_with_pets && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            Autres animaux
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500">Description</label>
                      <p className="font-medium text-gray-700 mt-1">{selectedPet.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informations du soumissionnaire */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations du soumissionnaire</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-500">Nom</label>
                    <p className="font-medium">{selectedPet.profiles?.full_name || 'Non renseigné'}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Email de contact</label>
                    <p className="font-medium flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      {selectedPet.profiles?.email || selectedPet.contact_info}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              {selectedPet.status === 'pending' && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => handleReject(selectedPet.id)}
                      disabled={actionLoading}
                      className="flex items-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 disabled:opacity-50"
                    >
                      <X className="h-5 w-5 mr-2" />
                      {actionLoading ? 'Traitement...' : 'Rejeter l\'annonce'}
                    </button>
                    <button
                      onClick={() => handleApprove(selectedPet.id)}
                      disabled={actionLoading}
                      className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 disabled:opacity-50"
                    >
                      <Check className="h-5 w-5 mr-2" />
                      {actionLoading ? 'Traitement...' : 'Approuver et publier'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Panneau d'Administration</h1>
            <p className="text-gray-600">Gérez les soumissions d'animaux et les vérifications</p>
          </div>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
          >
            Retour au site
          </button>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-yellow-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {pendingPets.filter(p => p.status === 'pending').length}
                </p>
                <p className="text-sm text-gray-600">En Attente</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <Check className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {pendingPets.filter(p => p.status === 'approved').length}
                </p>
                <p className="text-sm text-gray-600">Approuvés</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <X className="h-8 w-8 text-red-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {pendingPets.filter(p => p.status === 'rejected').length}
                </p>
                <p className="text-sm text-gray-600">Rejetés</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{pendingPets.length}</p>
                <p className="text-sm text-gray-600">Total</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex space-x-4">
            {[
              { key: 'all', label: 'Tous' },
              { key: 'pending', label: 'En Attente' },
              { key: 'approved', label: 'Approuvés' },
              { key: 'rejected', label: 'Rejetés' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key as any)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  filter === key
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des animaux */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Chargement des soumissions...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Animal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Soumissionnaire
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPets.map((pet) => (
                  <tr key={pet.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          className="h-12 w-12 rounded-full object-cover"
                          src={pet.image_url}
                          alt={pet.name}
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{pet.name}</div>
                          <div className="text-sm text-gray-500">{pet.breed} • {pet.species}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{pet.profiles?.full_name || 'Non renseigné'}</div>
                      <div className="text-sm text-gray-500">{pet.profiles?.email || pet.contact_info}</div>
                      <div className="text-sm text-gray-900">{pet.submitter_name || 'Non renseigné'}</div>
                      <div className="text-sm text-gray-500">{pet.submitter_email || pet.contact_info}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(pet.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(pet.status)}`}>
                        {getStatusText(pet.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedPet(pet)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Examiner
                      </button>
                      {pet.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleApprove(pet.id)}
                            disabled={actionLoading}
                            className="text-green-600 hover:text-green-900 mr-2"
                          >
                            {actionLoading ? 'Traitement...' : 'Approuver'}
                          </button>
                          <button
                            onClick={() => handleReject(pet.id)}
                            disabled={actionLoading}
                            className="text-red-600 hover:text-red-900"
                          >
                            {actionLoading ? 'Traitement...' : 'Rejeter'}
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )}
        </div>

        {filteredPets.length === 0 && (
          <div className="text-center py-12">
            <AlertTriangle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune soumission trouvée</h3>
            <p className="text-gray-500">Il n'y a actuellement aucune soumission avec ce statut.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;