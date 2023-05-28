import "./styles/CreateTodoButton.css";

function CreateTodoButton() {

    const createTodo = (e) => {
        console.log(e);
    };

    return (
        <div className="createTodo-container">
            <button type="button" onClick={(event) => createTodo(event)}>+</button>
        </div>
    );
}

export {CreateTodoButton};