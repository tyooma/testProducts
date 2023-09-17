export type Product = {
  id?: number;
  title: string;
  price: number;
  description: string;
  image?: string;
  category: string;
  liked?: boolean;
};

export type Products = Product[];
