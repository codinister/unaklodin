export type ItemTypes = {
  id: string;
  type: string; 
  createdAt: string; 
  updatedAt: string;
  title: string;
  cat: string;
  colour: {
    title: string; 
    hex: string;
  }[];
  size: string[];
  description: any;
  excerpt: string;
  features: string[];
  gallery: string[];
  price: number;
  product: string;
  stock: number;
  sub_title: string;
  thumbnail: string;
};

export type stateTypes = {
  data: ItemTypes[];
  dupData: ItemTypes[];
  pending: string;
  error: string;
  cat: unknown[]
};

export type colourType = {
  title: string; 
  hex: string;
}


export type ItemCard  = {
  title: string; 
  price: number; 
  totalColours: number, 
  img: string; 
  gallery: string[], 
  currency: string;
}
