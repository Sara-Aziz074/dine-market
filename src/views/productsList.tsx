import Product_Card from "@/components/productCard";
import Image,{StaticImageData} from "next/image";
import {Products_Data} from "@/utils/mocks"
import prodt_1 from "/public/image/prodt_1.png";
import prodt_2 from "/public/image/prodt_2.png";
import prodt_3 from "/public/image/prodt_3.png";
import prodt_4 from "/public/image/prodt_4.png";
import prodt_5 from "/public/image/prodt_5.png";
import prodt_6 from "/public/image/prodt_6.png";
import prodt_7 from "/public/image/prodt_7.png";
import prodt_8 from "/public/image/prodt_8.png";
import prodt_9 from "/public/image/prodt_9.png";
import prodt_10 from "/public/image/prodt_10.png";
import prodt_11 from "/public/image/prodt_11.png";



const Product_list = () => {


   let ProductFilter = Products_Data.slice (4,10);
// console.log(productFilter) 

   return (
      <div className=" flex justify-evenly  py-10 mt-16">
{   ProductFilter.map ((abc)=>(
      <Product_Card 
        key={abc.id}
        title={abc.name}
        price={abc.price} 
        category={abc.category}
        image={abc.image as StaticImageData}/>
   ))
}         
         {/* <Product_Card
          title="Brushed Raglan Sweatshirt"
           price={100} 
           image={prodt_1} />

         <Product_Card
            title="Cameryn Sash Tie Dress"
            price={140}
            image={prodt_2} />

         <Product_Card
            title="Flex Sweatshirt"
            price={190}
            image={prodt_3} />

         <Product_Card
            title="Flex Sweatpants"
            price={240}
            image={prodt_4} />

         <Product_Card
            title="Pink Fleece Sweatpants"
            price={299}
            image={prodt_5} />

         <Product_Card
            title="Lite Sweatpants"
            price={310}
            image={prodt_6} />

         <Product_Card
            title="Imperial Alpaca Hoodie"
            price={340}
            image={prodt_7} />

         <Product_Card
            title="Raglan Sweatshirt"
            price={350}
            image={prodt_8} />

         <Product_Card
            title="Muscle Tank"
            price={390}
            image={prodt_9} />

         <Product_Card
            title="Brushed Bomber"
            price={340}
            image={prodt_10} />

         <Product_Card
            title="Flex Push Button Bomber"
            price={399}
            image={prodt_11} />

       */}
   </div>
   )
};

export default Product_list;
