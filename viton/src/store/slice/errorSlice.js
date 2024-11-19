import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartError: null,
    timeOut: 4000
};



const errorSlice = createSlice({
    name: "errors",
    initialState,

    reducers: {
        addToCartError: (state, action) => {
            state.cartError = action.payload;
        },
        removeCartError: (state, action) => {
            state.cartError = null;
        }
    }
})


export default errorSlice.reducer;
export const { addToCartError, removeCartError } = errorSlice.actions;