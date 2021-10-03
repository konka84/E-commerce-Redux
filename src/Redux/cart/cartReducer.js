import { ADD, DECREASE, INCREASE, REMOVE_ALL, REMOVE_FROM_CART } from "./cartActionType";

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
      case INCREASE :
          return {
              ...state,
              [action.payload.id] :{
                  ...state[action.payload.id] ,
                  count:state[action.payload.id].count +1,

              } 
          }
        case DECREASE:
            return {
                ...state,
                [action.payload.id] :{
                    ...state[action.payload.id] ,
                    count:state[action.payload.id].count -1,
  
                } 
            }

        case REMOVE_FROM_CART:
            const clonedCart ={...state};
            delete clonedCart[action.payload.id]
            return  clonedCart;

        case REMOVE_ALL:
           
            return  {};
            
    default:
      return state;
  }
}
