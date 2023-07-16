import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {

    const { openModal, setOpenModal } = React.useContext(TodoContext);

    const createTodo = (e) => {
        setOpenModal(!openModal);
    };

    return (
        <div className="createTodo-container">
            <button type="button" onClick={(event) => createTodo(event)}>+</button>
        </div>
    );
}

export {CreateTodoButton};