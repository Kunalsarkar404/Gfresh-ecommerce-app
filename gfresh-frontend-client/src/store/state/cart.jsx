import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:0,
    reducers:{
        addItem:(state, action) =>{
            return action.payload;
        }
    }
});
export const {addItem} = cartSlice.actions;

export default cartSlice.reducer;