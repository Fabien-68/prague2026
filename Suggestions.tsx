import React, { useMemo } from 'react';
import type { Place } from '../types';
import { getDistance } from '../utils/geo';

interface SuggestionsProps {
  from: Place;
  to: Place;
  allPlaces: Place[];
  itineraryIds: Set<string>;
  onAddSuggestion: (place: Place) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({ from, to, allPlaces, itineraryIds, onAddSuggestion }) => {

  const suggestedPlaces = useMemo(() => {
    // Calculer le point médian
    const midPoint = {
      lat: (from.coordinates.lat + to.coordinates.lat) / 2,
      lng: (from.coordinates.lng + to.coordinates.lng) / 2,
    };

    // Filtrer les lieux qui ne sont pas déjà dans l'itinéraire
    const availablePlaces = allPlaces.filter(p => !itineraryIds.has(p.id));
    
    // Calculer la distance de chaque lieu disponible par rapport au point médian
    const placesWithDistance = availablePlaces.map(place => ({
      place,
      distance: getDistance(midPoint, place.coordinates),
    }));

    // Trier par distance et prendre les 3 plus proches
    return placesWithDistance.sort((a, b) => a.distance - b.distance).slice(0, 3);

  }, [from, to, allPlaces, itineraryIds]);

  if (suggestedPlaces.length === 0) {
    return null;
  }

  return (
    <div className="mt-2 text-left">
      <p className="text-sm text-gray-300 mb-2">Suggestions à proximité du trajet :</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {suggestedPlaces.map(({ place }) => (
          <button
            key={place.id}
            onClick={() => onAddSuggestion(place)}
            className="px-2 py-1 text-xs font-semibold text-black bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors"
            title={`Ajouter ${place.name}`}
          >
            + {place.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;