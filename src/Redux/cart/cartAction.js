import { ADD, DECREASE, REMOVE_ALL, REMOVE_FROM_CART } from "./cartActionType";

export function add(products){
    return{
        type: ADD,
        payload: products,
    };
}

export function increase(id){
    return{
        type: ADD,
        payload: {
            id,
        }
    };
}
export function decrease(id){
    return{
        type: DECREASE,
        payload: {
            id,
        }
}
}
export function remove(id){
    return{
        type: REMOVE_FROM_CART,
        payload: {
            id,
        }
}
}

export function removeAll(){
    return{
        type: REMOVE_ALL,
       
}
}