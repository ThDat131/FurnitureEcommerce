import { IImage } from '@/types/products/products.interface';

export interface ICategory {
    _id?: string;
    name: string;
    image: IImage | undefined;
}
