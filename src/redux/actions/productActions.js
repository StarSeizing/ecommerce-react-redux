import { ActionTypes } from "../constants/actions-types"

import (ActionTypes)
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODCUTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};