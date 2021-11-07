import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from './counterSlice'
import todoSlice from './todoSlice'
export const store = configureStore({
  reducer: {counter :counterSliceReducer, todo1 : todoSlice},
})