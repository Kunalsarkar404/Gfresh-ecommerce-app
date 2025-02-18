import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"cart",
    initialState:0,
    reducers:{
        addwishlist:(state, action) =>{
            return action.payload;
        }
    }
});
export const {addwishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;