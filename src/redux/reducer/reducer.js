import { ADD_CUSTOMER, ADD_RELEVERS, REMOVE_CUSTOMER } from "../actiontype/actionType";

const initialState = {
    customer:[],
    relever:[]
}


export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            const {id, name} = action.payload
           return{
            ...state, customer :[...state.customer,{
               id,
               name
            }]
           }

           case REMOVE_CUSTOMER:
        const newList = state.customer.filter((ele) => ele.id !== action.id)
        return{
            ...state,
            customer: newList
        }
    case ADD_RELEVERS:
        console.log(action.payload,"payload")
        default:
            break;
    }
}