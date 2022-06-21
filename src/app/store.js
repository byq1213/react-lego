import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import legoReducer from '../Layout/reducer'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    legoReducer,
  },
})