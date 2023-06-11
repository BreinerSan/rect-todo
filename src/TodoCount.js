import "./styles/TodoCounter.css";

function TodoCounter({total, completed}) {
    return (
        total === completed ?

        <h2 className="title">
            <span>
                Hey felicidades, completaste todas las tareas a realizar!!!
            </span>
        </h2>
        
        :

        <h2 className="title">
            <span>Has completado {completed} </span>
            de 
            <span> {total} tareas</span>
        </h2>
    );
}

export {TodoCounter};