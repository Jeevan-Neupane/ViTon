import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItem: [],
    shippingCharge: 10

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { count, selectedColor, item } = action.payload;



            let cartProduct = {
                totalNumber: count || 1,
                checked: false,
                color: selectedColor || "white",
                ...item
            };

            state.cartItem = [...state.cartItem, cartProduct];



        },
        removeFromCart: (state, action) => {

            const filteredCart = state.cartItem.filter((item) => {
                return item.id !== action.payload;
            })

            state.cartItem = [...filteredCart];
        },
        setChecked: (state, action) => {

            const updatedList = state.cartItem.map((item) => {

                if (item.id === action.payload) {
                    return { ...item, checked: !item.checked }
                } else {
                    return item;
                }
            })

            state.cartItem = [...updatedList];

        },
        setSelctedItemNumber: (state, action) => {
            const updatedList = state.cartItem.map((item) => {

                if (item.id === action.payload.id) {
                    return { ...item, totalNumber: action.payload.selectedNumber }
                } else {
                    return item;
                }
            })

            state.cartItem = [...updatedList];

        },
        setSelctedItemColor: (state, action) => {
            const updatedList = state.cartItem.map((item) => {

                if (item.id === action.payload.id) {
                    return { ...item, color: action.payload.color }
                } else {
                    return item;
                }
            })

            state.cartItem = [...updatedList];

        },
        clearCart: (state, action) => {
            state.cartItem = [];
        },
        setItemToLocalStorage: (state, action) => {
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
        },
        getItemFromLocalStorage: (state, action) => {
            state.cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];

        },
        clearItemFromLocalStorage: (state, action) => {
            localStorage.clear();
        },
    }

})

export default cartSlice.reducer;
export const { addToCart, removeFromCart, setChecked, setSelctedItemNumber, setSelctedItemColor, clearCart, setItemToLocalStorage, getItemFromLocalStorage, clearItemFromLocalStorage } = cartSlice.actions;