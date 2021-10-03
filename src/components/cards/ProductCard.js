//import { useContext, useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { ShopContext } from "../../contexts/ShoppingContext";
import { add, decrease, increase } from "../../Redux/cart/cartAction";



export default function ProductCard({ product: { id, image, title, category, price, rating} }) {
    //const {cartProducts, setCartProducts} = useContext(ShopContext );
    const cartProducts= useSelector( (state)=> state);
    const dispatch= useDispatch()

    return (
        <div className="py-3 px-12 space-y-2 flex flex-wrap justify-center h-115 rounded-2xl bg-purple-200">
            
            <div className="relative w-full pb-110p">
                <img className="absolute w-full h-full rounded-xl" src={image} alt="product" />
            </div>
            <h4 className=" w-screen bg-purple-200 px-2 rounded-lg font-semibold sm:h-36  sm:w-full">{title}</h4> 
            <div className="flex-grow">
                <h6 className="text-base font-extrabold"><i className="fa fa-dollar pr-1"></i> {price}</h6>
            </div>
            <div className="text-right">
                <h6 className="text-base font-semibold">{rating.rate} <i className="fa fa-star pl-1 text-bright-black"></i></h6>
            </div>
            
                {
                   ( cartProducts[id] &&(cartProducts[id].count>0)) ? (
                        <div className=" flex  flex-row  justify-between text-center w-full" >
                             
                            
                           
                            <button onClick={() => dispatch(decrease(id))}
                              className="bg-purple-500 transition transform hover:scale-110 px-2 m-1 rounded-lg" >
                                 <i className="fa fa-minus text-sm " ></i>
                            </button>
                            <h3 className="bg-purple-400 m-1  w-14 rounded-lg font-semibold text-xl" >{cartProducts[id].count}</h3>
                            
                            <button onClick={() =>dispatch(increase(id)) }
                            className="bg-purple-500 transition transform hover:scale-110 m-1 px-2  rounded-lg" >
                               <i className="fa fa-plus  text-sm"></i>
                            </button>
                           
                    
                           
                        </div>
                    ) : (
                        <button onClick={() => dispatch(add({ id, image, title, category, price, rating}))} className="p-2 bg-purple-400 transition transform hover:scale-105 w-full rounded-lg font-semibold"><i className="fa fa-cart-plus"></i> Add To Cart</button>
                    )
                }
           
            
        </div>
    )
}