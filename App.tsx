import React, { useState, useMemo, useCallback } from 'react';
import type { Place } from './types';
import Header from './components/Header';
import ResultsDisplay from './components/ResultsDisplay';
import FilterPanel from './components/FilterPanel';
import ItineraryPanel from './components/ItineraryPanel';
import { allPlaces } from './data/places';

const allCategories = [...new Set(allPlaces.map(p => p.category))].sort();
const defaultStartPoint = allPlaces.find(p => p.name === 'Hôtel Leon D’Oro');

const App: React.FC = () => {
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [itinerary, setItinerary] = useState<Place[]>(defaultStartPoint ? [defaultStartPoint] : []);

  const handleCategoryChange = (category: string) => {
    setActiveCategories(prev => {
      const newCategories = new Set(prev);
      if (newCategories.has(category)) {
        newCategories.delete(category);
      } else {
        newCategories.add(category);
      }
      return Array.from(newCategories);
    });
  };

  const handleSetStartPoint = useCallback((place: Place) => {
    setItinerary(currentItinerary => {
      const otherStops = currentItinerary.filter(p => p.id !== place.id);
      return [place, ...otherStops];
    });
  }, []);

  const handleAddToItinerary = useCallback((place: Place) => {
    setItinerary(currentItinerary => [...currentItinerary, place]);
  }, []);

  const handleRemoveFromItinerary = useCallback((placeId: string) => {
    setItinerary(currentItinerary => currentItinerary.filter(p => p.id !== placeId));
  }, []);
  
  const handleAddSuggestion = useCallback((place: Place) => {
     setItinerary(currentItinerary => [...currentItinerary, place]);
  }, []);

  const handleReorderItinerary = useCallback((index: number, direction: 'up' | 'down') => {
    setItinerary(currentItinerary => {
      const newItinerary = [...currentItinerary];
      const [movedItem] = newItinerary.splice(index, 1);
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      newItinerary.splice(newIndex, 0, movedItem);
      return newItinerary;
    });
  }, []);

  const itineraryIds = useMemo(() => new Set(itinerary.map(p => p.id)), [itinerary]);
  const startPointId = useMemo(() => itinerary.length > 0 ? itinerary[0].id : null, [itinerary]);

  const filteredPlaces = useMemo(() => {
    if (activeCategories.length === 0) {
      return [];
    }
    return allPlaces.filter(place => activeCategories.includes(place.category));
  }, [activeCategories]);
  
  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519677100203-a0e668c97d09?q=80&w=1974&auto=format&fit=crop')" }}>
      <div className="min-h-screen bg-black bg-opacity-70 backdrop-blur-md">
        <Header />
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Prague Amour</h2>
            <p className="text-lg md:text-xl text-gray-200">
              Notre guide à nous deux pour une exploration unique de Prague. Cochez les catégories pour découvrir nos lieux favoris.
            </p>
          </div>

          <FilterPanel 
            allCategories={allCategories}
            selectedCategories={activeCategories}
            onCategoryChange={handleCategoryChange}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              {activeCategories.length > 0 && filteredPlaces.length > 0 ? (
                <ResultsDisplay 
                  places={filteredPlaces} 
                  itineraryIds={itineraryIds}
                  startPointId={startPointId}
                  onAddToItinerary={handleAddToItinerary}
                  onRemoveFromItinerary={handleRemoveFromItinerary}
                  onSetStartPoint={handleSetStartPoint}
                />
              ) : (
                <p role="alert" className="text-center text-gray-300 text-xl bg-black bg-opacity-40 p-6 rounded-lg">
                  Veuillez sélectionner une ou plusieurs catégories pour afficher les lieux correspondants.
                </p>
              )}
            </div>
            <div className="lg:col-span-1">
              <ItineraryPanel 
                itinerary={itinerary}
                onRemoveFromItinerary={handleRemoveFromItinerary}
                allPlaces={allPlaces}
                onAddSuggestion={handleAddSuggestion}
                onReorderItinerary={handleReorderItinerary}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;