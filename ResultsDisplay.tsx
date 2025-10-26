import React from 'react';
import type { Place } from '../types';
import PlaceCard from './PlaceCard';

interface ResultsDisplayProps {
  places: Place[];
  itineraryIds: Set<string>;
  startPointId: string | null;
  onAddToItinerary: (place: Place) => void;
  onRemoveFromItinerary: (placeId: string) => void;
  onSetStartPoint: (place: Place) => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ 
  places, 
  itineraryIds, 
  startPointId,
  onAddToItinerary,
  onRemoveFromItinerary,
  onSetStartPoint
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6">
      {places.map((place) => (
        <PlaceCard 
          key={place.id} 
          place={place} 
          isInItinerary={itineraryIds.has(place.id)}
          isStartPoint={startPointId === place.id}
          onAddToItinerary={onAddToItinerary}
          onRemoveFromItinerary={onRemoveFromItinerary}
          onSetStartPoint={onSetStartPoint}
        />
      ))}
    </div>
  );
};

export default ResultsDisplay;