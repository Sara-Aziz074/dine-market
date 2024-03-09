import Image, { StaticImageData } from "next/image";
import prodt_2 from "./../../public/image/prodt_2.png"



const Product_Card = (props: {
    title: string, price: number,
    image: StaticImageData,
    category: string
}) => {
    return (
        <div className="py-5">
            <Image src={props.image} alt="product_image" />
            <h3 className="font-bold text-lg mt-3"> {props.title}</h3>
            <p className="font-bold text-lg mt-3"> ${props.price} </p>
            <p className="font-bold text-lg mt-3"> Category 
            <span className="font-normal text-base capitalize"> {props.category} </span></p>


        </div>
    )
};
export default Product_Card;