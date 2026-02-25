
export const ADD_TO_CART = (productID:any) => {
    return {
        type: 'ADD_TO_CART_Action',
        payload: productID
    }
}