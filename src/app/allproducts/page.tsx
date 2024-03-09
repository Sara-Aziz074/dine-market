import { StaticImageData } from "next/image";
import Product_Card from "@/components/productCard";
import {Products_Data} from "@/utils/mocks";

export default function FulProducts (){
    return (
        // <div className="bg-lime-600 font-bold min-h-screen  flex justify-center ">
                  <div className=" flex justify-evenly  py-10 mt-16 flex-wrap">
{   Products_Data.map ((abc)=>(
      <Product_Card 
        key={abc.id}
        title={abc.name}
        price={abc.price} 
        category={abc.category}
        image={abc.image as StaticImageData}/>
   ))
} 
            </div>
        // </div>
    )
    };