import "./styles/TodoCounter.css";

function TodoCounter({total, completed}) {
    return (
        <h2 className="title">
            <span>Has completado {completed} </span>
            de 
            <span> {total} tareas</span>
        </h2>
    );
}

export {TodoCounter};