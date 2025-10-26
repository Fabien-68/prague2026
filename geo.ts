import type { Coordinates } from '../types';

/**
 * Calcule la distance entre deux points géographiques en utilisant la formule Haversine.
 * @param coord1 Les coordonnées du premier point.
 * @param coord2 Les coordonnées du second point.
 * @returns La distance en kilomètres.
 */
export const getDistance = (coord1: Coordinates, coord2: Coordinates): number => {
  if (!coord1 || !coord2) return 0;
  
  const R = 6371; // Rayon de la Terre en km
  const dLat = (coord2.lat - coord1.lat) * (Math.PI / 180);
  const dLng = (coord2.lng - coord1.lng) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(coord1.lat * (Math.PI / 180)) *
      Math.cos(coord2.lat * (Math.PI / 180)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance en km
  return distance;
};