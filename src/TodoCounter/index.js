import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);
    return (
        totalTodos === completedTodos ?

        <h2 className="title">
            <span>
                Hey felicidades, completaste todas las tareas a realizar!!!
            </span>
        </h2>
        
        :

        <h2 className="title">
            <span>Has completado {completedTodos} </span>
            de 
            <span> {totalTodos} tareas</span>
        </h2>
    );
}

export {TodoCounter};