import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import (productReducer)

const reducers = combineReducers({
    allProducts: productReducer,
})