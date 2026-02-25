

const initialState = {
    productID: ""
}


export const reducer1 = (state= initialState, action:any) => {
    switch(action.type) {
        case 'ADD_TO_CART_Reducer':
            return { ...state, productID: action.payload}
        default:
            return state;
    }
}