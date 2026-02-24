import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload  //payload is itself object you can access here also
            }
            state.todos.push(todo)
        }, 
        //sayhello- if we want to declare function just give reference here

        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer