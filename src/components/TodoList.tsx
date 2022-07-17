import React from "react"; 
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import './style.css'

export interface PropsInterface{
    todos: Todo[]
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}


const TodoList:React.FC<PropsInterface> = ({todos, setTodos}:PropsInterface) => {
    return( 
            <div className="todos">
                {todos.map((todo) => (
                    <SingleTodo 
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                    />
                ))}
            </div>
    )
}

export default TodoList