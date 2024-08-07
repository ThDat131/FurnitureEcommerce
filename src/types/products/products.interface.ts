export interface IProduct {
  _id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  stock: number;
  categoryId: string;
}
