export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Place {
  id: string;
  name: string;
  address: string;
  description: string;
  mapsUrl: string;
  category: string;
  coordinates: Coordinates;
  link?: string;
  price?: string;
}