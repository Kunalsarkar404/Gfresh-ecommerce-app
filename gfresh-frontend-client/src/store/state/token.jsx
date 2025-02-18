import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name:"token",
    initialState:"",
    reducers:{
        storetoken:(state, action) =>{
            return action.payload;
        }
    }
});
export const {storetoken} = tokenSlice.actions;

export default tokenSlice.reducer;