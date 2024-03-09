"use clint";
import Image from "next/image";
import Link from "next/link";
import {APP_LINKS} from "@/utils/constant";
import { Input } from "@/components/ui/input";
import {ShoppingCart} from "lucide-react";

export default  function  Header () {
    return ( <div className="p-5 flex  bg-purple-300 justify-between items-center">
        <div> 
       <Link href={"./"}>
                <Image
          src={"/image/Logo.webp"} 
         alt="logo"
          width={100} 
          height={100}/> 
          </Link>
          </div>

    <div className="flex gap-10 items-center">
        
      {APP_LINKS.map((link)=>(<Link href={link.href}>

        <p className="font samibold">{link.name}</p>
      </Link>))}  
        </div>
   <div>
    
  <Input placeholder="Search item" className="7" />
   </div>
   <div  className=" w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center relative">
   
   <div className="w-4 h-4 rounded-full flex justify-center items-center bg-red-500 absolute right-0 top-0"> 
 <p className="text-white text-xs">0</p>
   </div>
   <ShoppingCart />

   
   

   </div>

    </div>
        
        )

}
