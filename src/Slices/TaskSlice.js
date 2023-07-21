import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:"1",
        title:"Task 1",
        description: "Task 1 description",
        completed: false,
    },
    {
        id:"12",
        title:"Task 12",
        description: "Task 2 description",
        completed: false,
    },
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
      addTask: (state, action) => {
         state.push(action.payload)//toolkit
         //[...state, action.payload]//redux
      },
      editTask:(state, action) => {
        const {id, title, description} = action.payload

        const foundTask = state.find(task => task === id)
        if(foundTask){
            foundTask.title = title
            foundTask.description = description
        }
      },
      deleteTask: (state, action) => {
        const taskFound = state.find(task => task.id === action.payload)
        if(taskFound){
            state.splice(state.indexOf(taskFound),1)
        }
      }
    }
})

//exporto las funciones.
export const {addTask, deleteTask,editTask} = taskSlice.actions;
//exportamos el reducer de taskSlice
export default taskSlice.reducer