import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../Slices/TaskSlice'


export const store = configureStore({
   reducer:{
      tasks: tasksReducer
   }
})