import { useContext, createContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id: 1,
            todoTask: "ToDo Msg",
            completed: false,
        }
    ],
    addTodo: (todoTask) => {},
    updateTodo: (id, todoTask) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useToDo = () => {
    return useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider