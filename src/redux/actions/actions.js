import { ADD_CUSTOMER, ADD_RELEVERS, REMOVE_CUSTOMER } from "../actiontype/actionType";


export const addCustomer = (data, id) => ({
    type: ADD_CUSTOMER,
    payload:{
        name:data,
        id:id
    }
})


export const removeCustomer = (id) => ({
    type:REMOVE_CUSTOMER,
    id
})


export const addRelevent = (id,name, food) => ({
    type: ADD_RELEVERS,
    payload: {
        name:name,
        id:id,
        food:[]
    }
})