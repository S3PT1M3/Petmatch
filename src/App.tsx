import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrowsePets from './components/BrowsePets';
import PetDetail from './components/PetDetail';
import AddPet from './components/AddPet';
import AuthModal from './components/AuthModal';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

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

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  /* =========================
     Navigation & protections
  ========================== */
  const handleViewChange = (view: string) => {
    if (view === 'add-pet' && !isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    if (view === 'admin' && !isAdmin) {
      setShowAuthModal(true);
      return;
    }

    setCurrentView(view);
    setSelectedPet(null);
  };

  /* =========================
     Sélection d’un animal
  ========================== */
  const handlePetSelect = (pet: Pet) => {
    setSelectedPet(pet);
    setCurrentView('pet-detail');
  };

  /* =========================
     Authentification
  ========================== */
  const handleAuthToggle = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);
      setIsAdmin(false);
      setCurrentView('home');
    } else {
      setShowAuthModal(true);
    }
  };

  const handleAuthenticated = (admin: boolean = false) => {
    setIsAuthenticated(true);
    setIsAdmin(admin);
    setShowAuthModal(false);
  };

  const handleAuthRequired = () => {
    setShowAuthModal(true);
  };

  /* =========================
     Rendu principal
  ========================== */
  const renderCurrentView = () => {
    // 🔐 Page Admin
    if (currentView === 'admin') {
      return <AdminPanel onBack={() => setCurrentView('home')} />;
    }

    // 🐾 Détails animal
    if (selectedPet && currentView === 'pet-detail') {
      return (
        <PetDetail
          pet={selectedPet}
          onBack={() => {
            setSelectedPet(null);
            setCurrentView('browse');
          }}
        />
      );
    }

    // 🌍 Autres vues
    switch (currentView) {
      case 'browse':
        return <BrowsePets onPetSelect={handlePetSelect} />;

      case 'add-pet':
        return (
          <AddPet
            isAuthenticated={isAuthenticated}
            onAuthRequired={handleAuthRequired}
          />
        );

      default:
        return <Hero onViewChange={handleViewChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentView={currentView}
        onViewChange={handleViewChange}
        onAuthToggle={handleAuthToggle}
        isAuthenticated={isAuthenticated}
        isAdmin={isAdmin}
      />

      {/* 📄 Pages statiques */}
      {currentView === 'about' ? (
        <AboutPage />
      ) : (
        renderCurrentView()
      )}

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuthenticated={handleAuthenticated}
      />

      <Footer />
    </div>
  );
}

export default App;
