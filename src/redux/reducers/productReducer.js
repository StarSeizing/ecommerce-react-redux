import { ActionTypes } from "../constants/actions-types";

const initialState = {
    products: [{
        id: 1,
        title: "Joe",
        category: "programmer",
    }]
}
export const productReducer = (state, {type, payload}) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};