export interface ProductType {
  id: number;
  reference: string;
  name: string;
  brand: string;
  price: number;
  photos: string;
  top: string;
  lining: string;
  sockliner: string;
  outsole: string;
  lining_thickness: string;
  material: string;
  weather: string;
  sport: string;
  end: string;
  heel_shape: string;
  closure: string;
  pattern: string;
  additional_infos: string;
  properties: string;
  gender: string;
  categories: string[];
}

export interface SelectOptionType {
  id: number;
  value: string;
  unavailable: boolean;
}

export interface CartProduct {
  id: number;
  reference: string;
  brand: string;
  name: string;
  price: number;
  photo: string;
  gender: string;
  size: number;
  quantity: number;
}
