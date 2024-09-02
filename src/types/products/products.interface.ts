import { ICategory } from '../categories/categories.interface';

interface IImage {
  url: string;
  id: string;
}

export interface IProduct {
  _id?: string;
  name: string;
  description: string;
  images: IImage[];
  price: number;
  stock: number;
  // categoryId: string | ICategory;
  categoryId: ICategory;
}
