import { ADD_TO_CART, REMOVE_FROM_CART,GET_USER_LIST } from "./constants";

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

export function getUserList() {
    return (
        {
            type: GET_USER_LIST,
        }
    )
}