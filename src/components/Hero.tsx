import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button} from "@/components/ui/button";
import {ShoppingCart} from "lucide-react";




export default function Hero () {
    return (
        <div className="grid grid-cols-2 mt-8">

             <div >
                {/* left div */}
                <Badge className="  mt-24 px-6 py-2 mb-6 bg-blue-200 font-extrabold text-base rounded-lg text-blue-700">Sale 70%</Badge>

                {/* <span className="bg-blue-300 w-15 h-10 rounded-sm text-blue-900 font-semibold"> Sale 70%</span> */}
      <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl">
      An Industrial  <br />
      Take on  <br />
      Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can  <br />
     beat your outfit as long as you wear  <br />
        Dine outfits.
      </p>

      <Button className="h-16 px-8 mt-4 text-lg rounded-none"> 
      
      <ShoppingCart  className="mr-3 border-spacing-2 "/>
 
      Start  <br /> Shopping</Button>


      <div className="flex mt-8 gap-4 ">

      <Image src={"/image/h-1.webp"} alt="" width={100} height={100} /> 

            <Image src={"/image/h-2.webp"} alt="" width={100} height={100} />    


              <Image src={"/image/h-3.webp"} alt="" width={100} height={100} />    


                 <Image src={"/image/h-4.webp"} alt="" width={100} height={100} />    


                 </div>
      </div>

      <div className="rounded-full   bg-red-100	background-color: rgb(255, 236, 227);"> 
      {/* right div */}

       <Image
        src={"/image/hero-image.webp"}
        alt="Image"
        width={650}
        height={650}

      
        />
      </div>

        </div>
    )
};