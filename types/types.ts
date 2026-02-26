export type ItemTypes = {
  title: string;
  cat: string;
  colour: {
    colourTitle: string; 
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
