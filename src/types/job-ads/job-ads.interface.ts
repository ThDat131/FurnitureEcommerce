import { IImage } from '../products/products.interface';

export interface IJobAds {
    _id?: string;
    name: string;
    position: string;
    quantity: number;
    startDate: Date;
    endDate: Date;
    title: string;
    positionInformation: string;
    jobDescription: string;
    requirement: string;
    salaryInformation: string;
    image?: IImage;
}
