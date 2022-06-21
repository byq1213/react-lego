import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    pageConfig: []
}
export const LegoReducer = createSlice({
    name: 'LegoReducer',
    initialState,
    reducers: {
        addComponent: (state, action) =>{
            console.log('action', action)
            state.pageConfig = action.pageConfig
        }
    }
})
export const {addComponent} = LegoReducer.actions
export default LegoReducer.reducer
