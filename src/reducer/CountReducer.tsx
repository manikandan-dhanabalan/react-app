

// const countReducer = (state, action) => {
//     switch
// }

export function countReducer (state : any, action : any) {
    switch(action.type) {
        case "increment" :
            return { count : state.count + 1}
         case "decrement":
            return { count: state.count - 1 }
        case "reset":
            return { count : 0 }
        default:
            throw new Error("Unknown action");
    }
}