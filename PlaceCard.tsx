import React, { useMemo } from 'react';
import type { Place } from '../types';

interface PlaceCardProps {
  place: Place;
  isInItinerary: boolean;
  isStartPoint: boolean;
  onAddToItinerary: (place: Place) => void;
  onRemoveFromItinerary: (placeId: string) => void;
  onSetStartPoint: (place: Place) => void;
}

const categoryIcons: { [key: string]: string } = {
  'Essentiel': '🏰', 'Balade': '🚶', 'Parc': '🌳', 'Panorama': '🏞️', 'Restaurant': '🍽️',
  'Café': '☕', 'Musée': '🏛️', 'Boutique': '🛍️', 'Art': '🎨', 'Activité': '🤸',
  'Insolite': '✨', 'Lieu Secret': '🤫',
};

const PlaceCard: React.FC<PlaceCardProps> = ({ 
  place, 
  isInItinerary,
  isStartPoint,
  onAddToItinerary, 
  onRemoveFromItinerary,
  onSetStartPoint
}) => {

  const { mainDescription, conseil, signature } = useMemo(() => {
    const parts = place.description.split('\n');
    let conseil = '';
    let signature = '';
    const mainDescParts: string[] = [];

    parts.forEach(part => {
      if (part.toLowerCase().startsWith('conseil :')) {
        conseil = part.substring('conseil :'.length).trim();
      } else if (part.startsWith('—')) {
        signature = part;
      } else {
        mainDescParts.push(part);
      }
    });

    return {
      mainDescription: mainDescParts.join('\n').trim(),
      conseil,
      signature,
    };
  }, [place.description]);

  const icon = categoryIcons[place.category] || '📍';

  return (
    <div className={`bg-black bg-opacity-60 border border-gray-700 rounded-lg shadow-lg flex flex-col transition-all duration-300 backdrop-blur-sm ${isInItinerary ? 'border-yellow-400' : ''}`}>
      <div className="p-6 flex flex-col flex-grow">
        
        <div className="flex justify-between items-start mb-4 gap-4">
          <div className="flex-grow">
            <span className="text-5xl" role="img" aria-label={place.category}>{icon}</span>
            <h3 className="text-2xl font-bold text-white mt-2">{place.name}</h3>
            <p className="text-sm font-semibold text-blue-300">{place.category}</p>
          </div>
        </div>

        {conseil && (
          <div className="mb-4 p-3 bg-white/10 rounded-lg border border-yellow-500/50">
            <p className="font-bold text-yellow-300 flex items-center">
              <span className="text-xl mr-2">💡</span> Conseil
            </p>
            <p className="text-yellow-100 pl-1 mt-1">{conseil}</p>
          </div>
        )}
        
        <p className="text-gray-300 flex-grow mb-4 whitespace-pre-wrap">{mainDescription}</p>
        
        <div className="text-sm text-gray-400 space-y-2 mb-5 mt-auto">
          <p className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mr-2 mt-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>{place.address}</span>
          </p>
          {place.price && 
            <p className="flex items-center">
              <span className="mr-2 text-base">💶</span>
              <span className="font-bold">{place.price}</span>
            </p>
          }
          {signature && <p className="pt-2 opacity-70">{signature}</p>}
        </div>
        
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-700">
          {place.mapsUrl && (
            <a
              href={place.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Voir sur la carte
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          )}
          {place.link && (
             <a
              href={place.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-500 text-sm font-medium rounded-md text-gray-200 bg-white/10 hover:bg-white/20"
            >
              Visiter le site
            </a>
          )}
          
          <div className="flex-grow"></div>
          
          {!isStartPoint && (
             <button
              onClick={() => onSetStartPoint(place)}
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-500 text-sm font-medium rounded-md text-gray-200 bg-white/10 hover:bg-white/20"
              title="Définir comme point de départ"
            >
              Départ 🏨
            </button>
          )}

          <button
            onClick={() => isInItinerary ? onRemoveFromItinerary(place.id) : onAddToItinerary(place)}
            className={`inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md ${
              isInItinerary
                ? 'bg-red-600 hover:bg-red-700 text-white border-transparent'
                : 'bg-green-600 hover:bg-green-700 text-white border-transparent'
            }`}
          >
            {isInItinerary ? 'Retirer' : 'Ajouter au parcours'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;