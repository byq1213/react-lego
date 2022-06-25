import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import legoSlice from '../features/lego/legoSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lego: legoSlice,
  },
})