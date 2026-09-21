import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";
import products from "./products";
export default function productsdtiles(){
    const{id}= useParams();
    const products= products.find((p)=> p.id === Number(id));
    const navigate=useNavigate();
    if(!products){
        return(
            <div>
                <h1>Product not found</h1>
                <button onClick={()=>navigate("/products")}>Back to products</button>
            </div>
        )
    }

    return(

        <div>

            <h1>{products.name}</h1>
            <p>{products.price}</p>
            <p>{products.describtion}</p>
            <button onClick={()=> navigate(-1)}>Back</button>
            <button onClick={()=>navigate("/checkout")}>Go to checkout</button>
        </div>
    )
}

