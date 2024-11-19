import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    all_products: [],
    categories: [],
    pageNumber: 0
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.all_products = action.payload;
            state.filterProducts = action.payload;

        },
        addCategory: (state, action) => {
            let allCategory = [];
            if (action.payload) {
                allCategory = ["all", ...action.payload];
            }
            state.categories = [...allCategory];

        },
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        },
        resetPageNumber: (state, action) => {
            state.pageNumber = 0;
        }


    }



})


export default productsSlice.reducer;
export const { addProducts, addCategory, resetPageNumber, setPageNumber } = productsSlice.actions;