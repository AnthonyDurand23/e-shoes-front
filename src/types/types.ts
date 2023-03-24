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

export type InputsNameType = 'firstname' | 'lastname' | 'address' | 'city' | 'zipcode' | 'phone' | 'email';

export interface inputType {
  id: number;
  name: InputsNameType;
  type: string;
  placeholder: string;
  errorMessage: string;
  label: string;
  pattern?: string;
  required: boolean;
  classname?: string;
}

export interface CartOrder {
  reference: string;
  name: string;
  size: number;
  quantity: number;
  photoUrl: string;
  price: string;
}

export interface OrderType {
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  zipcode: string;
  phone: string;
  email: string;
  cart: CartOrder[];
  totalPriceCart: number;
  paymentId: string;
  deliveryDate: string;
}
