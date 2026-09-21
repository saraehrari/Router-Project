import products from "../data/products"
export default function products(){
    return(
        <div>
            <h1>products</h1>
               <ul>
                {
                    products.map((products)=>
                      <li>
                    key={products.id} 
                    <b>{products.name}</b> - ${products.pri} {" "}
                    <Link to={`/products/${products.id}`}>View Detiles</Link>
                      </li>
                    )
                }
               </ul>
        </div>
    )
}