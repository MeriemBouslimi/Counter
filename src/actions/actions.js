import {INCREMENT,DECREMENT} from "./actions-type";

export function increment (payload){
    return {type:INCREMENT,payload}
}

export function decrement (payload){
    return {type:DECREMENT,payload}
}