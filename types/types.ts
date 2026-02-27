export type ItemTypes = {
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

export type menTypes = {
  data: ItemTypes[];
  pending: string;
  error: string;
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
