import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    forYouNumber: 1,
    moreProductNumber: 1
}

const numberSlice = createSlice({
    name: "number",
    initialState,
    reducers: {
        updateForYouNumber: (state, action) => {
            state.forYouNumber = action.payload;
        },
        updateMoreProductNumber: (state, action) => {
            state.moreProductNumber = action.payload;
        }
    }
})

export default numberSlice.reducer;
export const { updateForYouNumber, updateMoreProductNumber } = numberSlice.actions;