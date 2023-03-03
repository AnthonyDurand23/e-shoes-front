export interface ProductType {
  id: number;
  reference: string;
  nom: string;
  marque: string;
  prix: number;
  photos: string;
  dessus: string;
  doublure: string;
  semelle_proprete: string;
  semelle_usure: string;
  epaisseur_doublure: string;
  matiere: string;
  temps: string;
  sport: string;
  bout: string;
  forme_talon: string;
  fermeture: string;
  motif: string;
  info_sup: string;
  proprietes: string;
  genre: string;
  categories: string[];
}

export interface SelectOptionType {
  id: number;
  value: string;
  unavailable: boolean;
}

export interface CartItem {
  reference: string;
  size: number;
  quantity: number;
}
