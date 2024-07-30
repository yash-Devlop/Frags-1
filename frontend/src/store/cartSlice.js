import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

const cartSlice =  createSlice({
    name: 'cart',
    initialState,
    reducers: {
        insertCart: (state, action) => {
            state.data = action.payload.data
        }
    }
})

export const {insertCart} = cartSlice.actions

export default cartSlice.reducer