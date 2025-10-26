import React, { useMemo } from 'react';
import type { Place } from '../types';
import { getDistance } from '../utils/geo';
import Suggestions from './Suggestions';

interface ItineraryPanelProps {
  itinerary: Place[];
  onRemoveFromItinerary: (placeId: string) => void;
  allPlaces: Place[];
  onAddSuggestion: (place: Place) => void;
  onReorderItinerary: (index: number, direction: 'up' | 'down') => void;
}

const ItineraryPanel: React.FC<ItineraryPanelProps> = ({ itinerary, onRemoveFromItinerary, allPlaces, onAddSuggestion, onReorderItinerary }) => {
  
  const totalDistance = useMemo(() => {
    let distance = 0;
    for (let i = 1; i < itinerary.length; i++) {
      distance += getDistance(itinerary[i - 1].coordinates, itinerary[i].coordinates);
    }
    return distance;
  }, [itinerary]);

  const generateGoogleMapsUrl = () => {
    if (itinerary.length === 0) {
      alert("Veuillez ajouter au moins un lieu.");
      return;
    }
    const url = itinerary[0].mapsUrl;
    if (itinerary.length === 1 && url) {
      window.open(url, '_blank');
      return;
    }

    const baseUrl = 'https://www.google.com/maps/dir/';
    const waypoints = itinerary.map(place => `${place.coordinates.lat},${place.coordinates.lng}`).join('/');
    
    const finalUrl = `${baseUrl}${waypoints}`;
    window.open(finalUrl, '_blank');
  };
  
  const itineraryIds = new Set(itinerary.map(p => p.id));

  return (
    <div className="sticky top-8 p-6 bg-black bg-opacity-50 border border-gray-700 rounded-lg backdrop-blur-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
          Notre Itinéraire
        </h3>
        {itinerary.length > 1 && (
          <span className="text-sm font-bold text-yellow-300 bg-yellow-900/50 px-2 py-1 rounded">
            ~ {totalDistance.toFixed(1)} km
          </span>
        )}
      </div>
      {itinerary.length === 0 ? (
        <p className="text-gray-400">Ajoutez des lieux pour commencer à planifier votre parcours.</p>
      ) : (
        <div className="max-h-[60vh] overflow-y-auto pr-2 mb-6">
            <div aria-label="Étapes de l'itinéraire">
              {itinerary.map((place, index) => {
                const prevPlace = index > 0 ? itinerary[index - 1] : null;
                const distance = prevPlace ? getDistance(prevPlace.coordinates, place.coordinates) : 0;
                
                return (
                  <div key={place.id} className="mb-2">
                    {prevPlace && distance > 2 && (
                      <div className="mb-2 text-center text-yellow-400 border-t border-b border-yellow-800/50 py-2">
                        <p className="font-bold">⚠️ Trajet long: {distance.toFixed(1)} km</p>
                        <Suggestions
                          from={prevPlace}
                          to={place}
                          allPlaces={allPlaces}
                          itineraryIds={itineraryIds}
                          onAddSuggestion={onAddSuggestion}
                        />
                      </div>
                    )}
                    <div className={`flex items-center justify-between bg-white/10 p-2 rounded-md ${index === 0 ? 'border-l-4 border-yellow-400' : ''}`}>
                      <div className="flex items-center min-w-0">
                        <span className="font-bold mr-3 text-lg">{index === 0 ? '🏨' : index + 1}</span>
                        <p className={`flex-grow text-gray-200 truncate ${index === 0 ? 'font-bold' : ''}`} title={place.name}>{place.name}</p>
                      </div>
                      <div className="flex items-center">
                        {index > 0 && ( // Ne pas afficher les flèches pour le point de départ
                          <div className="flex flex-col mr-2">
                            <button onClick={() => onReorderItinerary(index, 'up')} disabled={index === 1} className="text-gray-400 hover:text-white disabled:opacity-30">▲</button>
                            <button onClick={() => onReorderItinerary(index, 'down')} disabled={index === itinerary.length - 1} className="text-gray-400 hover:text-white disabled:opacity-30">▼</button>
                          </div>
                        )}
                        <button 
                          onClick={() => onRemoveFromItinerary(place.id)}
                          className="text-red-400 hover:text-red-300 text-xl font-bold px-2"
                          aria-label={`Retirer ${place.name} de l'itinéraire`}
                        >
                          &times;
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      )}
      {itinerary.length > 0 && (
        <button 
          onClick={generateGoogleMapsUrl}
          className="w-full mt-4 px-4 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 transition-colors"
        >
          {itinerary.length > 1 ? 'Créer notre parcours sur Maps' : 'Voir le lieu sur Maps'}
        </button>
      )}
    </div>
  );
};

export default ItineraryPanel;