import { StaticImageData } from "next/image";

export type Product_list = {
    id:number,
    name:string,
    price: number,
    category: string,
    image: string | StaticImageData, 
};