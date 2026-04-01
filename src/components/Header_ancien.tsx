import React, { useState } from 'react';
import { Heart, Menu, X, User, PlusCircle } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
  isAuthenticated: boolean;
  onAuthToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange, isAuthenticated, onAuthToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: Heart },
    { id: 'browse', label: 'Parcourir les Animaux', icon: Heart },
    { id: 'add-pet', label: 'Proposer un Animal', icon: PlusCircle, requiresAuth: true },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onViewChange('home')}
          >
            <Heart className="h-8 w-8 text-emerald-500 fill-current" />
            <span className="text-2xl font-bold text-gray-800">AdopteUnAmi</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              if (item.requiresAuth && !isAuthenticated) return null;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentView === item.id
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  
                  <span>{isAuthenticated ? 'Se Déconnecter' : 'Accueil'}</span>
                </button>
              );
            })}
          </nav>

          {/* Auth Button */}
          <button
            onClick={onAuthToggle}
            className="hidden md:flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors duration-200"
          >
            <User className="h-4 w-4" />
            <span>{isAuthenticated ? 'Se Déconnecter' : 'Se Connecter'}</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navItems.map((item) => {
                if (item.requiresAuth && !isAuthenticated) return null;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onViewChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium ${
                      currentView === item.id
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <button
                onClick={() => {
                  onAuthToggle();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium bg-emerald-500 text-white hover:bg-emerald-600"
              >
                <User className="h-5 w-5" />
                <span>{isAuthenticated ? 'Sign Out' : 'Sign In'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;