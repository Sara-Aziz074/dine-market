import  image, { StaticImageData } from "next/image";
import { Product_list } from "./type";
import prodt_1 from "/public/image/prodt_1.png"
import prodt_2 from "/public/image/prodt_2.png"
import prodt_3 from "/public/image/prodt_3.png"
import prodt_4 from "/public/image/prodt_4.png"
import prodt_5 from "/public/image/prodt_5.png"
import prodt_6 from "/public/image/prodt_6.png"
import prodt_7 from "/public/image/prodt_7.png"
import prodt_8 from "/public/image/prodt_8.png"
import prodt_9 from "/public/image/prodt_9.png"
import prodt_10 from "/public/image/prodt_10.png"
import prodt_11 from "/public/image/prodt_11.png"



export const Products_Data : Product_list [] = [
    {
    id: 1 ,
    name: "product_1",
    category: "female",
     price: 450,
    image:prodt_1 ,
    },
    {
        id: 2 ,
        name: "product_2",
        category: "female",
         price: 360,
        image:prodt_2 ,
        },
        {
            id: 3 ,
            name: "product_3",
            category: "male",
             price: 459,
            image: prodt_3 ,
            },
            {
                id: 4 ,
                name: "product_4",
                category: "male",
                 price: 370,
                image:prodt_4 ,
                },
                {
                    id: 5,
                    name: "product_5",
                    category: "male",
                     price: 375,
                    image:prodt_5 ,
                    },
                    {
                        id: 6 ,
                        name: "product_6",
                        category: "female",
                         price: 360,
                        image:prodt_6 ,
                        },
                   {
                            id: 7 ,
                            name: "product_7",
                            category: "female",
                             price: 350,
                            image:prodt_7 ,
                   },   
                   {
                    id: 8 ,
                    name: "product_8",
                    category: "kids",
                     price: 350,
                    image:prodt_8 ,
                    },
                    {
                        id: 9,
                        name: "product_9",
                        category: "male",
                         price: 290,
                        image:prodt_9 ,
                        },
                        {
                            id: 10 ,
                            name: "product_10",
                            category: "male",
                             price: 250,
                            image:prodt_10 ,
                            },
                            {
                                id: 11 ,
                                name: "product_11",
                                category: "kids",
                                 price: 234,
                                image:prodt_11 ,
                                },
];