import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export function addToCart(item){
    return (
        {
            // action tell which task to perform from here
            type: ADD_TO_CART,
            payload: item
        }
    )
}

export function removeFromCart(item){
    return (
        {
            // action tell which task to perform from here
            type: REMOVE_FROM_CART,
            payload: item
        }
    )
}