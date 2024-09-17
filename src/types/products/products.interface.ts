import { ICategory } from '../categories/categories.interface';

export interface IImage {
    url: string;
    id: string;
}

export interface IBanner {
    _id?: string;
    name: string;
    image: IImage;
}

export interface IProduct {
    _id?: string;
    name: string;
    description: string;
    images: IImage[];
    price: number;
    stock: number;
    categoryId: string | ICategory;
    isNew: boolean;
    isPotential: boolean;
}
