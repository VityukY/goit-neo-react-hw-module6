import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   filters: {
		name: ""
	}
}
const filterSlice = createSlice(
   {
      name:'filters',
      initialState,
      reducers:{
         changeFilter:(state, {payload})=>{state.filters.name = payload}
      }
   }
)
export const {changeFilter} = filterSlice.actions
export const filterReducer = filterSlice.reducer