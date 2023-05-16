import "./styles/TodoItem.css";

function TodoItem(props) {

  return (
    <li className="todo-item">
      <button className={`check ${props.completed ? "check--active":""}`}>
      </button>
      <p>{props.text}</p>
      <button className="close-item"></button>
    </li>
  );
}

export {TodoItem};