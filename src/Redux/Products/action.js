import {GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS} from "./actionType"
import axios from "axios";


 const getProductsRequestAction=()=>{
return {type:GET_PRODUCTS_REQUEST}
}
 const getProductsSuccessAction=(payload)=>{
return {type:GET_PRODUCTS_SUCCESS,payload}
}
 const getProductsFailureAction=()=>{
return {type:GET_PRODUCTS_FAILURE}
}

export const getProducts=(dispatch)=>{
    dispatch(getProductsRequestAction())
    
    axios.get(" https://json-8pz0.onrender.com/all").then((res)=>{
        console.log(res);
        dispatch(getProductsSuccessAction(res.data))
    })
    .catch((err)=>{
        dispatch(getProductsFailureAction())
    })
}