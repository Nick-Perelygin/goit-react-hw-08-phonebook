import {createSlice} from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'searchFilter',
    initialState: {filter: ''},
    reducers: {
        filterContact(state, action) {
            state.filter = action.payload.currentTarget.value
        }, 
    },
})
  
export const filterReducer = filterSlice.reducer
  
export const {filterContact} = filterSlice.actions