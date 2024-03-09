import Hero from "@/components/Hero";
import Product_list from "@/views/productsList";
import Sction_01 from "@/views/sction_01";

export default function Home() {
  return ( <div>
    <Hero/> 
    {/*  <Hero/>  this is hero page */}
  
    <Sction_01 />

    <Product_list/>
  </div>
    

  )
};
