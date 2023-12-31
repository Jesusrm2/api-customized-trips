export type Category = {
    type: string;
    label: string;
    duration: number;
  };

export interface IPiDia {
  poiObj: PoiObj;
  time: number;
  startTime: number;
}

interface PoiObj {
  business_status: string;
  geometry: Geometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  photos: Photo[];
  place_id: string;
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
}

interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

interface Geometry {
  location: Location;
  viewport: Viewport;
}

interface Viewport {
  northeast: Location;
  southwest: Location;
}

interface Location {
  lat: number;
  lng: number;
}

export interface IDetalleItinerario {
    dias: number ;
    fecha: string ;
    horaI: string ;
    horaF: string ;
    selectedCategories: Category[];
    ubicacion: [number, number] | null;
  
  }
  export const tiposAtractivosTuristicos: Category[] = [
    { type: "amusement_park", label: "parque de atracciones", duration: 120 },
    { type: "aquarium", label: "acuario", duration: 90 },
    { type: "art_gallery", label: "galería de arte", duration: 60 },
    { type: "night_club", label: "club nocturno", duration: 180 },
    { type: "museum", label: "museo", duration: 120 },
    { type: "park", label: "parque", duration: 60 },
    { type: "restaurant", label: "restaurante", duration: 90 },
    { type: "stadium", label: "estadio", duration: 180 },
    { type: "lodging", label: "hotel", duration: 480 },
    { type: "zoo", label: "zoológico", duration: 120 },
    { type: "airport", label: "aeropuerto", duration: 240 },
    { type: "cafe", label: "cafetería", duration: 30 },
    { type: "store", label: "tienda", duration: 60 },
    { type: "campground", label: "campamento", duration: 240 },
    { type: "casino", label: "casino", duration: 180 },
    { type: "church", label: "iglesia", duration: 60 },
    { type: "clothing_store", label: "tienda de ropa", duration: 60 },
    { type: "supermarket", label: "supermercado", duration: 60 },
    { type: "movie_theater", label: "cine", duration: 120 },
    { type: "train_station", label: "estación de tren", duration: 60 },
    { type: "travel_agency", label: "agencia de viajes", duration: 60 },
  ];
  